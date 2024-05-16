---
# YAML Frontmatter properties
---

# Directories

This document outlines the structure of the codebase for internal reference however it will only explain in detail the non-Quasar Framwork-related directories, for more information about a Quasara directory/file you can visit the [Quasar structure docs](https://quasar.dev/quasar-cli-vite/directory-structure#introduction).

::: tip
Make sure you read the Vite CLI version since the Webpack version might have different configurations
:::

## Main Directory Structure

<!-- for structure use :: ├─ └─ (copy & past) -->

the directories mainly follow the [Quasar Framework projects structure](https://quasar.dev/quasar-cli-vite/directory-structure#introduction) for a more detailed explanation about each directory please go to its section below ( or at the side of this page)

```
.
├─ .quasar/
├─ .vscode/
├─ dist/
├─ docs/
├─ H-dist/
├─ public/
├─ src/
├─ src-capacitor/
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.cjs
├─ .npmrc
├─ H-dister.sh
├─ index.html
├─ jsconfig.json
├─ postcss.config.cjs
├─ quasar.config.js
└─ readme.md

```

## Detailed Directory Structure

### .quasar/ [Not in scope for this documentation]

This directory contains configurations specific to the Quasar framework.

### .vscode/

This directory contains extensions and settings for Visual Studio Code to enhance code uniformity and developer experience.

### dist/

This directory contains built applications. Inside:

```
.
└─ spa/
```

- **spa/**: Built Single Page Application (SPA) apps.

### docs/

This directory contains VitePress documentation. Inside:

```
.
├─ .vitepress/
├─ assets/
└─ <docs_directories>/
```

- **.vitepress/**: VitePress configuration folder.
- **assets/**: VitePress static assets.
- **<docs_directories>/**: Directories for documentation.

### H-dist/

This directory contains the built application configured for Hostinger hosting.

### public/

This directory contains public assets accessible by the application. Inside:

```
.
└─ dev/
```

- **dev/**: Assets and API endpoint for development use.

### src/

This directory contains the main source code of the project. Here is a general look at how the `src/` directory is structured, each directory will be explained in detail

```
src/
├─ assets/
├─ boot/
├─ components/
├─ css/
├─ i18n/
├─ layouts/
├─ pages/
├─ router/
├─ services/
├─ stores/
├─ utils/
└─ App.vue
```

#### ├─ `assets/`

Here are all of the static assets of the app, as well as any other auto-generated icons and assets using [Quasar's IconGeni](https://quasar.dev/icongenie/introduction).

```
.
├─ brand/   -- for any brand-related content e.g. logos  --
└─ social/  -- for logos of social media channels used --
```

each category can have a light and a dark folder for each theme if needed.

#### ├─ `boot/`

The boot folder is scaffolded by Quasar please refer to [Quasar boot files](https://quasar.dev/quasar-cli-vite/boot-files) for more info.

**TL;DR** These files will run before the Vue app instance is instantiated thus you can run the logic needed before initializing the app, in this project (like most other projects) it is used to install necessary plugins needed before initiation.

::: tip
When adding a new boot file for a plugin (or any other functionality that needs to run before Vue) you need to add it to the [Quasa.config.js](https://quasar.dev/quasar-cli-vite/quasar-config-file) file as well.
:::

#### ├─ `components/`

All app components will be available in this directory following this structure

```
.
├─ <page_name>/ -- page specific components --
├─ sections/    -- section components --
├─ micro/       -- one function components --
├─ macro/       -- compounded components --
└─
```

#### ├─ `css/`

This directory is a Quasar scaffolded directory for when you need to add/edit global styling; the Quasar docs don't show in great detail how to use this so here is how to use it.

##### variables

when adding / editing variables you need to keep in mind that Quasar will only look for the [`quasar.variables.scss`](https://quasar.dev/style/sass-scss-variables) file to extract global variables from, to more about global variables please refer to the [global variables section](/styling/global-variables.md)

##### global classes

You can set up global classes of styles that are being used frequently by following the next steps:

**step1:** Add a new `.scss` or edit a file to separate the styling logic (better for semantics)

**step2:** If a new `.scss` file is added then you need to add it in the [`quasar.config.js`](https://quasar.dev/quasar-cli-vite/quasar-config-file#css) file.

```js
// --- quasar.config.js ---

export default configure((ctx) => {
  return{
  ...
  css: ["app.scss", "<other_file_name>.scss"],
  ...
}}
```

#### ├─ `i18n/`

Internationalization files, not used as of v0.5.~

#### ├─ `layouts/`

Here you can add different layouts of the app, currently, there are only two layouts for each app build mode but we can have multiple layouts for each mode, for example, we can have a layout for specific pages like the login page.

::: tip
layouts can be selected during routing, so you can select what layout you need in the `router/routes.js` file
:::

#### ├─ `pages/`

Each page folder contains the following:

- main `.vue` file
- page-specific utilities

**Remember that page components are in the components directory**

#### ├─ `router/`

Vue Router files

```
├─ index.js   -- Vue Router init file --
└─ routes.js  -- routes file --
```

#### ├─ `services/`

The services directory is a layer that connects the application with other services' APIs, each file in the directory represents a service the app uses, and the file will expose the endpoints (and other utility functions) of each API service as an object of functions, this way we can change the service API (in case we find better service provider) and edit the functions accordingly if needed without touching other files in the source code.

::: tip
it is best practice when using multiple APIs from the same provider to group them under one folder, currently, it's only one provider (the app backend server) so grouping is not needed.
:::

#### ├─ `stores/`

This project uses [Pinia](https://pinia.vuejs.org/) as an app storage solution.

#### ├─ `utils/`

Here you can find all global utility functions that are used throughout the app.

#### └─ `App.vue`

Main Vue entry point.

### src-capacitor/

This directory contains source code specific to Capacitor.

### Root utilities

Root utilities are utility functions or bash scripts to enhance the development experience, this is not part of Quasar Framework.

::: danger
Root utility scripts must run from the root directory.
:::

you can use these scripts using the bash terminal integrated into your IDE (by clicking the down arrow next to + for adding a new terminal) or by using the GIT BASH terminal like so

```bash
bash <script_name>.sh
# e.g. bash H-dister.sh
```

or by making the script an executable so you can run it using your IDE shell/powershell directly

**step 1**: make it as an executable

```bash
chmod u+x <script_name>.sh
```

**step 2**: now you can directly use it in shell/powershell terminal like so

```bash
.\<script_name>.sh
```

#### 'H-dister.sh'

Shell script to automate configuring for Hostinger hosting from 'dist/spa/' and put resulting files in the 'H-dist/' directory.

#### 'install-packs.sh'

Shell script to automate installing all packages from all source folders like src and src-capacitor all at once.

### Others

- **.editorconfig**: Configuration file for maintaining consistent coding styles across various editors.
- **.eslintignore**: Configuration file specifying files and directories to be ignored by ESLint.
- **.eslintrc.cjs**: ESLint configuration file in CommonJS format.
- **.npmrc**: Configuration file for npm.
- **H-dister.sh**: Shell script to automate configuring for Hostinger hosting from 'dist/spa/' and put resulting files in 'H-dist/' directory.
- **index.html**: Main HTML file.
- **install-packs.sh**: Shell script to automate installing all packages from all source folders like src and src-capacitor all at once.
- **jsconfig.json**: Quasar framework Editor config (if not using TypeScript).
- **postcss.config.cjs**: PostCSS configuration file in CommonJS format.
- **quasar.config.js**: [Quasar configuration](https://quasar.dev/quasar-cli-vite/quasar-config-file) file.
- **readme.md**: Main project README file.
