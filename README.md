# Sepehr Khajavi — Portfolio

**Live: https://sepehrkhajavi.github.io**

Static one-page portfolio. No build step, no npm, no database.
Open `index.html` in a browser, or drag this folder onto Netlify to deploy.

## Files

```
index.html     the page — all content lives here
style.css      all styling
script.js      project data (top of file), filter, lightbox, reveals, video players
artifact.html  generated preview copy — see "Preview" below
images/        renders, portrait
assets/        logo.png, cv.pdf
```

## Editing content

- **Project text, metadata, lightbox images** → `PROJECTS` array at the top of `script.js`
- **Project cards in the grid** → the `<article class="card">` blocks in `index.html`
- **Everything else** (bio, experience, skills, contact) → directly in `index.html`

After editing `style.css` or `script.js`, bump the `?v=` number on both `<link>` and
`<script>` in `index.html` so browsers pick up the change instead of using a cached copy.

## Images

Renders are exported at max 1800–2000px, JPEG quality ~82, with a smaller
`-thumb` version for the grid. Keep new images to the same budget — the whole
page should stay well under ~5MB.

## Animations

The Motion section links to Google Drive files by ID. Each card is a real link
that upgrades to an inline player on click, so it works without JavaScript.

Reel 04 (Luxury Pool Design Animation II) is on YouTube and works today.
**The seven remaining Drive files must be shared "Anyone with the link → Viewer"**
or visitors see a Google sign-in box instead of a video. Vimeo or YouTube would be a better
host; to switch, replace the iframe URL in the `.reel__video` click handler in
`script.js` and the `href`/`data-video` on each card in `index.html`.

## Video embeds and the preview

Third-party iframes (YouTube, Google Drive) are blocked by the Artifact preview's
content-security policy. Video will NOT play there no matter how the embed is
configured. Test video on a real host — `netlify.com/drop` will serve this folder
at a real URL in under a minute. Every reel also carries an "Open on YouTube /
Open in Drive" link, so the section stays usable even where embeds are refused.

## Preview

`artifact.html` is a generated copy of `index.html` with the `<html>/<head>/<body>`
wrapper stripped, used to publish the shareable preview. It is NOT the deliverable —
`index.html` is. Regenerate it after editing `index.html`.

## Publishing a change

The repo is `sepehrkhajavi/sepehrkhajavi.github.io` and GitHub Pages serves
`main` from the root. To publish an edit:

```
git add -A
git commit -m "what changed"
git push
```

The live site updates about a minute later. Remember to bump the `?v=` number
on the CSS and JS links in `index.html` when you change those files, or
browsers will keep serving the cached copies.

`.nojekyll` is committed so Pages serves the files as-is rather than running
them through Jekyll.

## Still outstanding

- Social links are commented out in `index.html` — add real profile URLs and
  uncomment
- Education years are blank
- Poster frames for the 7 Drive reels (needs the video files locally; the
  YouTube one already has a real poster)
- Real project titles for projects 2, 3 and 4 (currently working titles)
- Kitchen project description is missing its final sentence
