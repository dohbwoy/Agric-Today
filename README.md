# AgricToday — GreenMinds Media

A responsive agriculture publication built with Eleventy and Decap CMS.

## Deploy free with Netlify
1. Open https://app.netlify.com/ and sign in.
2. Choose **Add new site → Import an existing project**, connect GitHub, and select `dohbwoy/Agric-Today`.
3. Build command: `npm run build`. Publish directory: `_site`. The included `netlify.toml` also sets these values.
4. Deploy. Your public website will be assigned a `.netlify.app` address.
5. The editor is at `https://YOUR-SITE.netlify.app/admin/`.

## Content editor setup
The CMS uses Decap's GitHub backend. Before the first login, configure GitHub OAuth for Decap CMS and set the OAuth provider/redirect URL according to the current Decap documentation. A GitHub backend requires OAuth; publishing the static website alone does not automatically enable editor sign-in. Keep registration restricted to trusted editors.

CMS docs: https://decapcms.org/docs/github-backend/  
Netlify deploy docs: https://docs.netlify.com/welcome/add-new-site/

## Add a story
In the editor, select **AgricToday Articles → New Article**, add headline/date/author/category/summary/body and an optional image, then save/publish. Images upload into `uploads/`.

## Local build
Requires Node.js 20+. Run `npm install`, then `npm run build`. Output is in `_site/`.
