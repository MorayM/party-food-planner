# React + Vite + Supabase boilerplate

This is my minimal React boilerplate for working with a Supabase backend. Keep it simple with no state management, just React, routing and tests.

This is a work-in-progress!

## Get Started

1. Install [Node 22](https://nodejs.org/en)
2. Install [`pnpm`](https://pnpm.io/installation)
3. If using VSCode, install extensions for ESLint, StyleLint and Prettier. This is not necessary to run this project though.
4. In the project directory, run `pnpm install` to install the necessary project dependencies.

## Run

To run the application in dev mode, run `pnpm dev`. This will start up the development server to host the site on your local machine. It will also enable Hot Module Replacement (HMR) so any code changes will be instantly applied when a file is saved without the need to reload the browser.

To build a bundle for deployment, run `pnpm build`. This will generate and bundle all the assets needed to run the site and place them in the `dist` folder. This can then be served from a web server of your choice.

## Lint

To run the linter, run `pnpm lint`. This will check all code and style files for errors. I recommend using the VSCode extensions' "Fix on Save" features instead but this script is useful for incorporating in pre-commit checks and other parts of the CI/CD pipeline.

## Test

Test files are placed alongside the files they test. To run all tests and start the watcher, run `pnpm run test`. This will watch for changes to tests and rerun them automatically. Alternatively, run `pnpm run test <path>` to run a specific test file or directory of test files.

If a prettier output is required, run `pnpm run test:ui` will start a web UI at http://localhost:51204/__vitest__/. As with the console-based test runner, this will automatically reload with changes.

To see code coverage statistics, run `pnpm run test:coverage`.

## TODO:

- Another version that has state management
- Add example files to fill out the folder structure below

## Folder Structure

Anything that is shipped goes in the `src` folder.

- `assets`: static assets like images
- `components`: global components that are used in multiple places, e.g. forms
- `context`: React context objects
- `features`: a fresh hierarchy of components, hooks, services, assets etc, grouped by feature. Prefer exporting components from each feature from an index.ts file for encapsulation
- `hooks`: global custom React hooks that are used in multiple places
- `layouts`: common layout components e.g. headers, footers
- `pages`: page wrapper components rendered by the router
- `scss`: global Sass variables, mixins and functions used in multiple places
- `utils`: common **small** utility functions. These should be simple **pure** functions

For smaller projects, remove the `features` folder and simply have folders for each page in the `pages` folder with their components.

Everything outside of the `src` folder is configuration with the exception of the `public` folder. Anything placed in here will be made available at the root of the site. Place files like `robots.txt`, `sitemap.xml`, `favicon.ico` etc in here, along with any custom fonts. Files placed in here should NOT be imported into code in `src`.