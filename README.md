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
- `src/data/contacts.js`: centralized `LINKS` configuration, shared by every Fiverr CTA, contact card, and footer link (`CONTACTS` remains an alias for compatibility).
- `src/components/FiverrCTA.jsx`: the reusable freelance enquiry panel after Featured Projects and inside Contact.
- `src/components/FiverrLink.jsx`: a validated external Fiverr link shared by the hero, service CTA, project dialogs, and enquiry panels.
- `src/components/HowIWork.jsx` and `WhyWorkWithMe.jsx`: the four-step workflow and working principles within Services.
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

Original images are preserved without modification (about 663 KiB total). Images use intrinsic dimensions, responsive sizing, and asynchronous decoding. Below-fold previews and gallery images are lazy loaded; the opened dialog's primary screenshot loads immediately. Full-size originals remain accessible. The supplied Data Grouping slide was not included because its prose concerns hotels/customers rather than the automobile analysis. An empty or failed primary image displays a labeled placeholder instead of invented data.

## Update contact links

Edit `LINKS` near the top of `src/data/contacts.js` to update the email address, phone number, and HTTPS LinkedIn, GitHub, and Fiverr URLs. `LINKS.fiverr` already contains the supplied real URL, `https://www.fiverr.com/s/Emg4NYY`; every Fiverr CTA uses it. Use an email without `mailto:` and a phone number with its international country code; the helper generates `mailto:` and `tel:` links automatically. Empty values, `#`, placeholder strings, and invalid URLs are never active links. Missing Fiverr links hide both the button and enquiry panel. No requests are sent to a form provider.

Freelance CTAs point to Fiverr. LinkedIn/GitHub are labeled for professional networking, while email and phone remain available for recruiter/general enquiries. No pricing, payment details, seller badges, ratings, or testimonials are invented. The optional `resume` value is empty because no resume file was supplied; there is no download button. When a real resume is available, add its asset and wire a validated download link before showing that button.

## Add future projects

Add an object to the exported `projects` array in `src/data/projects.js`, following an existing entry. Provide a unique `id`, `number`, `title`, `category`, `tools`, `description`, `overview`, `objective`, `workedOn`, `analyzed`, `features`, `image`, `imageWidth`, and `imageHeight`. Add `role` for collaborative work. An optional `gallery` array accepts `{ image, width, height, caption }` objects. Keep `featured: true` on the primary sales project. The grid and modal render entries automatically.

## Deploy to Vercel

Push the repository to your Git provider, import it in Vercel, and select the Vite preset. Use `npm run build` as the build command and `dist` as the output directory. Deploy after checking the preview. See [Vercel's Vite guide](https://vercel.com/docs/frameworks/frontend/vite).

## Deploy to Netlify

Import the repository in Netlify. Set the build command to `npm run build` and the publish directory to `dist`. For manual deployment, build locally and upload the `dist` folder through Netlify's deploy interface. See [Netlify's Vite guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/).

## Deploy to GitHub Pages

Push the project to a GitHub repository. In Settings → Pages, select GitHub Actions as the source. Use the Vite deployment workflow linked below: check out the repository, set up Node.js 22, run `npm ci` and `npm run build`, upload `dist` with `actions/upload-pages-artifact`, and deploy using `actions/deploy-pages`. Set Pages write and OIDC token permissions as shown in the official workflow. The configured `base: './'` supports repository subpaths for this single-page, hash-navigation site. See the complete [Vite GitHub Pages workflow](https://vite.dev/guide/static-deploy#github-pages).

## Before sharing publicly

Review your contact links, project descriptions, and screenshots. The site displays screenshots; it does not embed interactive Power BI/Tableau dashboards or invent live project URLs. `og:url` and the canonical URL in `index.html` point to the existing Vercel deployment. Update them if the domain changes. A social preview image is intentionally omitted until one is supplied.
