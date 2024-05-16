---
# YAML Frontmatter properties
---

# Getting Started

This project is built with [Quasar Framework](https://quasar.dev/) using [Vite](https://vitejs.dev/) for better cross-platform support and a seamless developing experience, currently, the portfolio page is an app that can run as an SPA web page and as native mobile apps for both Android and IOS using [Capacitor.js ](https://capacitorjs.com/) runtime.

This documentation will document the usage of the source code within the [repository](https://github.com/anas-cd/anasali.info-frontend) scope, however for the usage of Quasar Framework or Capacitor.js please refer to their documentation.

- [Capacitor.js](https://capacitorjs.com/docs)
- [Quasar Framework](https://quasar.dev/start)

also the project uses [VitePress](https://vitepress.dev/) for documentation.

## Prerequisites

Before we start coding we need to have some preparation work for Quasar, this project uses the [Quasar Cli](https://quasar.dev/start/quasar-cli), which provides a great development experience and allows you to get the full potential of Quasar.

::: tip Quasar CLI requirements

- Node 14+ for Quasar CLI with Vite.
- Yarn v1 (strongly recommended), PNPM, or NPM.
    :::

you can install the Quasar CLI globally by running this command:

```bash
npm i -g @quasar/cli
```

great that's it :tada:

## Setup Project

Since this is a cross-platform project the codebase might use plugins from multiple modes interchangeably, thus we need to install all dependencies for the root directory as well as dependencies in subdirectories for each Quasar build mode.

::: tip
Each source folder is for a Quasar build mode, like a Capacitor, Cordova, Electorn and so on using this naming convention `src-<Quasar_build_mode>\` however SPA mode uses the `src\` folder since it is the default Quasar mode.
:::

instead of entering and running `npm install` in each directory, you can use the root bash utility `install-packs.sh` in the root directory like so :

::: danger
Root utility scripts must run from the root directory.
:::

```bash
bash install-packs.sh
```

or you can make it an executable script and then run it directly

```bash
chmod u+x install-packs.sh
.\install-packs.sh
```

::: warning
Your IDE terminal may not recognize "bash" or "chmod", a quick solution is to run it using [Git BASH](https://gitforwindows.org/), you can run `bash install-packs.js` directly
or run `chmod u+x install-packs.sh` then you can run `.\install-packs.sh` from the IDE terminal.
:::

if for any reason you don't want to use the utility script you should simply run `npm install` in the root directory then run it again for every build mode source folder, `cd src-<mode>\` then run `npm install`.

## Starting Development Mode

Starting dev servers will be mode-specific, you can use [Quasar Vite CLI commands](https://quasar.dev/quasar-cli-vite/commands-list#dev) to start the dev servers for each mode

### Default Mode (SPA)

```bash
quasar dev
```

### Capacitor Mode

- to start a dev server for Android

```bash
quasar dev -m capacitor -T android
```

- to start a dev server for IOS

```bash
quasar dev -m capacitor -T ios
```

### Documentaion Dev Server

the project uses [Vitepress](https://vitepress.dev/) to generate a static site for documentation, you can run a Vitepress dev server like so

```bash
npm run docs:dev
```

## Linting & Formatting

the script commands are created during the scaffolding of Quasar CLI

### Lint The Files

```bash
yarn lint
# or
npm run lint
```

### Format The Files

```bash
yarn format
# or
npm run format
```

## Building For Production

Building command will be mode-specific, you can refer to the Quasar build command [here](https://quasar.dev/quasar-cli-vite/commands-list#mode) for more details.

### Default Build Mode (SPA)

```bash
quasar build
```

### Capacitor Build Mode

you can build the app in the terminal using the [Quasar command for Capacitor](https://quasar.dev/quasar-cli-vite/developing-capacitor-apps/build-commands) like so

- for Android

```bash
quasar build -m capacitor -T android
```

- for IOS

```bash
quasar build -m capacitor -T ios
```

if you want to build the app using the IDE instead (Android Studio / Xcode) you can add the `--ide` tag at the end of the command.
