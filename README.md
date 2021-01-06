[![Storybook](https://img.shields.io/badge/Chromatic-Storybook-green)](https://master--5ff5b5e3816aa60021b27e34.chromatic.com/)
[![Chromatic Library](https://img.shields.io/badge/Chromatic-Library-green)](https://www.chromatic.com/library?appId=5ff5b5e3816aa60021b27e34&branch=master)

# Next.js Template

A simple template for starting up an application with the following stack:

- [Next.js](https://nextjs.org/)
- [Emotion](https://emotion.sh/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/) -
  [Deployed storybook example](https://master--5ff5b5e3816aa60021b27e34.chromatic.com/)
- [Chromatic](https://www.chromatic.com/) -
  [Deployed library example](https://chromatic.com/library?appId=5ff5b5e3816aa60021b27e34&branch=master)
- [GitHub](https://github.com/)
- [Kodiak](https://kodiakhq.com/)
- [Dependabot](https://dependabot.com/)
- [Yarn](https://yarnpkg.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)

## Installation

You must have `yarn` and `node>=12.16.1` installed first. To install the dependencies run:

```shell
yarn install
```

To start the application in development mode run:

```shell
yarn dev
```

To run a static version of the site locally run:

```shell
yarn static
```

## Scripts provided

- `install` install dependencies
- `dev` run in dev mode with hot-module replacement @ http://localhost:3000/
- `build` build next.js application
- `export` export next.js static application to `./out`
- `static` build/export/serve a static next.js application @ http://localhost:3000/
- `validate` run tests/linter/type-checks/format-checks and build the application (the build checks for transpiler
  errors)
- `test` run jest tests
- `lint` run linter with `--fix`
- `lint:test` run linter
- `format` format code w/ prettier
- `format:test` check for code formatting w/ prettier (won't modify code)
- `storybook` runs storybook @ http://localhost:6006
- `storybook:build` builds storybook output for static deployment (necessary for Chromatic)

## Husky Hooks

- `pre-commit` lints the staged files and formats them automatically
- `pre-push` runs the validate script

## Setup

### Chromatic & Github

To enable Chromatic, follow the following steps:

1. In your GitHub account, set the `CHROMATIC_PROJECT_TOKEN` secret
   <img width="1061" alt="Image 2020-05-09 at 9 14 37 PM" src="https://user-images.githubusercontent.com/37161095/81488693-24b7b880-923a-11ea-9be8-c9dedc0b4380.png">

## Screenshots

### Chromatic - Storybook

![Storybook Example](https://user-images.githubusercontent.com/37161095/103788866-55403400-500d-11eb-9cdd-79df7cde6683.png)

### Chromatic - Library

![Chromatic Library Example](https://user-images.githubusercontent.com/37161095/103789042-8caee080-500d-11eb-91fc-3283c6a5b07b.png)
