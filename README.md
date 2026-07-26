# Personal website

This website is built using [MyST](https://mystmd.org), a community-driven, open-science markdown ecosystem.

## Development

```bash
npm install -g mystmd
myst start
```

## Build & deploy

```bash
myst build --html
```

Deployment to GitHub Pages happens automatically from `main` via `.github/workflows/deploy.yml`.