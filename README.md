# Anqi Wang — Academic Website

Public academic profile for [Anqi Wang](https://an7iq.github.io), intended for PhD applications and research networking.

This repository is a static Next.js site. It is **not** the private PhD application tracker and should not contain application statuses, PI contact history, or private notes.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static site is written to `out/`. Preview it with:

```bash
npx serve out
```

## Update content

Keep factual updates in the data files rather than inside page components:

| File | What to edit |
| --- | --- |
| `src/data/site.ts` | Name, intro, contact links, navigation |
| `src/data/research.ts` | Research projects (`featured: true` appears on the homepage) |
| `src/data/publications.ts` | Published, under review / in preparation, conference outputs |
| `src/data/experience.ts` | Appointments |
| `src/data/education.ts` | Degrees |
| `src/data/skills.ts` | Methods and tools |
| `public/Anqi_Wang_CV.pdf` | Latest master CV |
| `public/images/anqi-wang-portrait.jpg` | Hero portrait |
| `public/images/research/` | Project figures |

Each research project supports:

```ts
{
  title,
  question,
  summary,
  tags,
  output,
  image,
  links,
  featured
}
```

Replace the abstract SVGs in `public/images/research/` with maps, plots, or other project figures when they are available. Do not use stock photographs that imply experiments that were not performed.

## GitHub Pages deployment

This project is set up for a user site:

`https://an7iq.github.io`

### 1. Create the repository

On GitHub, create a public repository named **`An7iq.github.io`** (matching the GitHub username).

### 2. Push this project

```bash
git add .
git commit -m "Add academic website"
git remote add origin https://github.com/An7iq/An7iq.github.io.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

In the repository:

1. Open **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Wait for the **Deploy to GitHub Pages** workflow to finish

The live site will be:

[https://an7iq.github.io](https://an7iq.github.io)

The CV will be at:

[https://an7iq.github.io/Anqi_Wang_CV.pdf](https://an7iq.github.io/Anqi_Wang_CV.pdf)

and

[https://an7iq.github.io/cv/](https://an7iq.github.io/cv/)

### Project repositories

If this site is later hosted from a repository that is **not** `An7iq.github.io`, GitHub Pages will serve it from a subpath. The workflow already passes `PAGES_BASE_PATH` into the Next.js build. No extra code change is required for that case.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Static export (`output: "export"`)
- GitHub Pages
