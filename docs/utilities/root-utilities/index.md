---
# YAML Frontmatter properties
---

# Root Utilities

Root utilities are project-level utilities used for development workflow automation.

## How To Add A Root Utility

### Step 1: Making The Utility

add the bash commands in a new root utility by making a bash file `.sh` at the root of the project

::: code-group

```bash [hello.sh (example only)]
#!/bin/bash
echo "Hello World"
```

:::

### Step 2: Using The Utility

::: danger
root utilities must run from the root directory only.
:::

you can directly run the bash command from a bash terminal like [Git Bash](https://gitforwindows.org/) (stand-alone or the integrated one in your IDE by clicking the down arrow then selecting git bash)

```bash
bash hello.sh
```

that's it.

if you want to use the powershell to run the bash script you first need to run this command in a bash env to make the script executable

```bash
chmod u+x hello.sh
```

then you can run the script from Powsershell like so

```
.\hello.sh
```

## Root Utilities

### - `H-dister.sh`

::: warning
this will need the `./dist/spa/` directory present to work, so you need to build the project first it will not build it for you.

also if you change the build dist directory you need to change the script for that, currently, it doesn't take arguments for the dist folder location.
:::

This is a Root utility script to prepare a dist folder ready for Hostinger shared hosting deployment, it will save the generated files to the `./H-dist` directory, it will create one if not found.

### - `install-packs.sh`

::: warning
this assumes that all source code directories start with `src`, if you change the naming convention you need to edit this script.
:::

since this is a cross-platform project some plugins are shared between platforms (SPA, Capacitor) for example the [localBrowser utility function](../localBrowser.md) uses the [Capacitor Browser plugin](https://capacitorjs.com/docs/apis/browser) which is used in SPA mode thus we need to install all packages in all platforms to start development, instead of doing this manually by `cd` into every source code folder of each platform and running `npm i` you can use this script.
