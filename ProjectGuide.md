# Project Name

This project requires Node.js, and it is recommended to use version 16.20.0.

## Prerequisites

-   [Node.js](https://nodejs.org/) (v16.20.0)
-   [npm](https://www.npmjs.com/)

## Getting Started

Follow the steps below to set up your development environment:

### 1. Node Version Management

We recommend using NVM (Node Version Manager) to manage your Node.js versions. If you don't have NVM installed, follow these steps:

1. Install NVM by following the instructions [here](https://github.com/nvm-sh/nvm#install--update-script).

2. Create a `.nvmrc` file in the project root with the desired Node.js version:

    ```plaintext
    16.20.0
    ```

3. Run the following commands to install and use the specified Node.js version:

    ```bash
    nvm install 16.20.0
    nvm use
    ```

### 2. Install Project Dependencies

After setting up Node.js, navigate to the project directory and install the project dependencies:

```bash
npm install
```

### 3. Run the Project

To quickly build and start the project, use the following command:

```bash
npm run run
```

### Additional Notes

Dependency Resolution
During the installation process, npm will execute a pre-installation script to ensure correct dependency versions are enforced. This script is designed to manage dependencies effectively.

### Scripts Overview:

npm run run: Build the project and start the development server.
npm run build: Build the project for production.
npm start: Start the development server.
npm test: Run tests using Jest.
npm run test:watch: Run tests in watch mode.
npm run lint: Lint the code using ESLint.
