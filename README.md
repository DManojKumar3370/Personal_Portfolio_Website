# Manoj Kumar — Data Analyst Portfolio

A responsive portfolio for D. Manoj Kumar, a B.Tech Computer Science and Engineering student specializing in Data Science, graduating in 2027. It presents supplied analytics projects and freelance services without invented client work, testimonials, or results.

## Tech stack

React, Vite, JavaScript, plain CSS, Lucide React icons, and locally bundled Manrope fonts. No backend or contact form service is required.

## Installation and local development

Use Node.js 22.12+ (tested on 22.21.0) and npm. From this project directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The default is http://127.0.0.1:5173/. Stop the server with Ctrl+C.

```sh
npm run build
npm run preview
```

The production output is `dist/`. `npm run preview` serves that output locally. For reproducible installs after cloning, use `npm ci` with the included lockfile.

## Files and features

- `src/components/`: navigation, hero, projects, modal, about, skills, services, contact, and footer components.
- `src/data/projects.js`: project descriptions, tools, features, image filenames, and optional gallery entries.
- `src/data/contacts.js`: the shared contact configuration used by both contact cards and footer.
- `src/styles.css`: responsive light theme, sticky navigation, keyboard focus styles, and reduced-motion support.
- `public/assets/projects/`: original supplied project screenshots.
- `index.html`: page title, description, Open Graph metadata, and favicon reference.
- `vite.config.js`: React integration and relative asset paths for portable static deployment.

The sales project is visually featured. Automobile analysis is explicitly labeled as a team project. Native dialog modals support Escape, focus restoration, keyboard navigation, backdrop dismissal, and scrollable details. Images have alt text and full-size links; unknown contact values stay inactive.

## Replace project screenshots

Copy real PNG, JPG, or WebP images into `public/assets/projects/`. Set each project's `image` to its filename in `src/data/projects.js`:

```js
image: 'business-sales.png'
```

Current assets:

- `business-sales.png`: supplied Power BI dashboard.
- `toycraft-tableau.png`: supplied ToyCraft Tableau dashboard.
- `automobile-distributions.png`: supplied automobile chart slide, used as its card preview.
- `automobile-relationships.png`: supplied automobile chart slide, included in the detail gallery.

Original images are copied without modification. CSS controls their display; detail views show the full images. The supplied Data Grouping slide was not included because its prose concerns hotels/customers rather than the automobile analysis. An empty or failed primary image displays a labeled placeholder instead of invented data.

## Update contact links

Edit `CONTACTS` near the top of `src/data/contacts.js`. Replace all four `YOUR_...` values with your real email address and HTTPS LinkedIn, GitHub, and Fiverr profile URLs. Use an email address without `mailto:`. The helper adds it automatically. Empty, placeholder, or invalid values remain inactive and display “Add link”. No requests are sent to a form provider.

## Add future projects

Add an object to the exported `projects` array in `src/data/projects.js`, following an existing entry. Provide a unique `id`, `number`, `title`, `category`, `tools`, `description`, `objective`, `analyzed`, `features`, and `image`. Add `role` for collaborative work. An optional `gallery` array accepts `{ image, caption }` objects. Keep `featured: true` on the primary sales project. The grid and modal render entries automatically.

## Deploy to Vercel

Push the repository to your Git provider, import it in Vercel, and select the Vite preset. Use `npm run build` as the build command and `dist` as the output directory. Deploy after checking the preview. See [Vercel's Vite guide](https://vercel.com/docs/frameworks/frontend/vite).

## Deploy to Netlify

Import the repository in Netlify. Set the build command to `npm run build` and the publish directory to `dist`. For manual deployment, build locally and upload the `dist` folder through Netlify's deploy interface. See [Netlify's Vite guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/).

## Deploy to GitHub Pages

Push the project to a GitHub repository. In Settings → Pages, select GitHub Actions as the source. Use the Vite deployment workflow linked below: check out the repository, set up Node.js 22, run `npm ci` and `npm run build`, upload `dist` with `actions/upload-pages-artifact`, and deploy using `actions/deploy-pages`. Set Pages write and OIDC token permissions as shown in the official workflow. The configured `base: './'` supports repository subpaths for this single-page, hash-navigation site. See the complete [Vite GitHub Pages workflow](https://vite.dev/guide/static-deploy#github-pages).

## Before sharing publicly

Replace contact placeholders and review your project descriptions and screenshots. The site displays screenshots; it does not embed interactive Power BI/Tableau dashboards or invent live project URLs. Add `og:url` and a canonical URL in `index.html` after choosing your public domain. A social preview image is intentionally omitted until one is supplied.
