# Getting Started

This guide provides all the necessary steps to get the Kya Energy website running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)

## 1. Clone the Repository

First, clone the project repository from GitHub to your local machine.

```bash
git clone https://github.com/georgesnoe/kya-energy-website.git
cd kya-energy-website
```

## 2. Install Dependencies

Once you are inside the project directory, you need to install all the required dependencies defined in the `package.json` file.

Using npm:
```bash
npm install
```

## 3. Run the Development Server

After the installation is complete, you can start the local development server.

```bash
npm run dev
```

This command starts the Next.js application in development mode with hot-reloading enabled.

## 4. Open the Application

Once the server is running, you will see output in your terminal indicating that the server has started, typically on port 3000.

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

You should now see the Kya Energy website homepage. The website will automatically reload if you make any changes to the source code.
