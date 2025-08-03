# Deployment Guide

This document outlines the recommended process for deploying the Kya Energy website to a production environment. Our project is built with Next.js, making it ideally suited for deployment on platforms that support Node.js applications.

## Recommended Platform: Vercel

[Vercel](https://vercel.com/) is the creator of Next.js and provides a seamless, zero-configuration deployment experience. It is the recommended platform for this project.

### Steps to Deploy on Vercel

1.  **Push to a Git Repository**: Ensure your project is pushed to a Git provider (e.g., GitHub, GitLab, Bitbucket).

2.  **Import Project on Vercel**:
    *   Sign up for a Vercel account.
    *   From your Vercel dashboard, click "Add New..." -> "Project".
    *   Connect your Git provider and select the `kya-energy-website` repository.

3.  **Configure Project (Optional)**:
    *   Vercel will automatically detect that this is a Next.js project and configure the build settings correctly.
    *   You can add environment variables here if needed (e.g., for a database connection or API keys).

4.  **Deploy**:
    *   Click the "Deploy" button.
    *   Vercel will automatically clone the repository, install dependencies, build the project, and deploy it.

Vercel will automatically re-deploy the application every time you push a new commit to the main branch.

## General Deployment on Other Platforms

If you are not using Vercel, you can deploy the application on any platform that supports Node.js.

### 1. Build the Application

First, you need to create a production-ready build of the application. Run the following command:

```bash
npm run build
```

This command creates an optimized build in the `.next` directory.

### 2. Start the Server

After the build is complete, you can start the production server using:

```bash
npm run start
```

This command starts a Node.js server on the default port (3000) to serve the built application. You will need to ensure your hosting provider runs this command and correctly maps the port to handle incoming traffic.

### Important Considerations

*   **Environment Variables**: Ensure all necessary environment variables are set in your production environment.
*   **Node.js Version**: Use a Node.js version that is compatible with the one specified in the project's `package.json` or a more recent LTS version.
*   **HTTPS**: Always serve your production application over HTTPS. Most modern hosting platforms handle this automatically.
