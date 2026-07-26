// src/postlist.mjs — a MyST plugin that adds a `{postlist}` directive.
//
// Mirrors the "Better blog lists with the MyST AST" approach used on
// chrisholdgraf.com: it scans a blog folder for Markdown posts, reads their
// frontmatter, and emits a card per post (newest first).
//
// Usage in a page:
//
//   ```{postlist}
//   :number: 3
//   ```
//
// Registered in myst.yml under `project.plugins`.
import fs from "node:fs";
import path from "node:path";

/** Recursively collect .md files under a folder. */
function walk(folder) {
  const out = [];
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    const p = path.join(folder, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && p.endsWith(".md")) out.push(p);
  }
  return out;
}

/** Tiny frontmatter reader (title / date / description / tags). */
function readFrontmatter(file) {
  const text = fs.readFileSync(file, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  const lines = match[1].split("\n");
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\w[\w-]*):\s*(.*)$/);
    if (!m) continue;
    let [, key, value] = m;
    // handle folded blocks (`description: >-`) and simple lists
    if (value === "" || value === ">-" || value === ">" || value === "|") {
      const parts = [];
      while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1])) {
        i++;
        parts.push(lines[i].trim().replace(/^- /, ""));
      }
      value = parts.join(" ");
    }
    fm[key] = value.replace(/^['"]|['"]$/g, "");
  }
  return fm;
}

const text = (value) => ({ type: "text", value });

const postlist = {
  name: "postlist",
  doc: "List blog posts as cards, newest first.",
  options: {
    number: { type: Number, doc: "Maximum number of posts to show." },
    folder: { type: String, doc: "Folder to scan (default: blog)." },
  },
  run(data) {
    const folder = data.options?.folder ?? "blog";
    const number = data.options?.number ?? 100;
    const posts = walk(folder)
      .map((file) => ({ file, ...readFrontmatter(file) }))
      .filter((p) => p.title && p.date)
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, number);

    return posts.map((p) => {
      const url = "/" + p.file.replace(/\.md$/, "");
      const when = new Date(p.date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const children = [
        { type: "cardTitle", children: [text(p.title)] },
      ];
      if (p.description) {
        children.push({ type: "paragraph", children: [text(p.description)] });
      }
      children.push({
        type: "footer",
        children: [
          { type: "emphasis", children: [text(`📅 ${when}`)] },
          ...(p.tags ? [text(`  ·  🏷 ${p.tags}`)] : []),
        ],
      });
      return { type: "card", url, children };
    });
  },
};

const plugin = {
  name: "Blog post list",
  directives: [postlist],
};

export default plugin;
