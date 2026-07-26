# Personal website

This website is built using [MyST](https://mystmd.org), a community-driven,
open-science markdown ecosystem (ported from Docusaurus 2 — see
`MIGRATION.md`).

## Development

```bash
npm install -g mystmd
myst start
```

## Build & deploy

```bash
myst build --html
```

Deployment to GitHub Pages happens automatically from `main` via
`.github/workflows/deploy.yml`.

## Credits

Originally inspired by templates in the Docusaurus 2 showcase, in particular
pages by [Evan Tay](https://evantay.com/) and
[Tinaël Devresse](https://tinaeldevresse.eu/), now rebuilt with MyST
directives.
