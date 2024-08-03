# Indexo Boilerplate

This boilerplate from Indexo is designed to help you start projects quickly and efficiently. It includes a number of presets for testing, code transpilation, code formatting and verification, and database preconfiguration.

## Content

- **Testing with Jest**: Configuration to perform unit and integration tests.
- **Code transpilation with SWC**: Fast transpilation from JavaScript/ECMAScript to TypeScript.
- **Code formatting and verification**: ESLint and Prettier configured to maintain clean and consistent code.
- **Sequelize Preconfiguration**: Configured to work with any database supported by Sequelize.
- **Log format**: Consistent log format for subsequent analysis.

## Commands to start a new project

To start a new project based on this boilerplate, follow these steps:

```sh
git clone https://bitbucket.org/indexo/boilerplate [project-name]
cd [project-name]
code(-insiders) .
```

## Check list

Before starting work on your new project, check the following points:

- ✅ Changed package name, description (if necessary) and repository name in `package.json`.
- ✅ Added `APP_NAME`, `APP_KEY`, `APP_URL` and changed database data in the `.env`.
- ✅ Dependencies were installed with `pnpm install` (**Important**: it is mandatory to use `pnpm`).
- ✅ The CI was created with the authorization of a high-ranking person to move it to production.
- ✅ And finally... they started rubbing shoulders!

## Dependencies

Make sure you have all the necessary dependencies installed by running:

```sh
pnpm install
```

**Note**: It is mandatory to use `pnpm` for installing dependencies due to its efficiency in package management and its integration with the Indexo ecosystem.

## Quickstart

To start the development server, use:

```sh
pnpm start:dev
```

To build the app for production, use:

```sh
pnpm preflight
pnpm build
```

And to run the application in production, use:

```sh
pnpm start:prebuilt
```

## License

Review license.md file