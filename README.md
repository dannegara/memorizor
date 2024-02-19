# Memorizor

Welcome to Memorizor Game, a fun and engaging project where you can test your memory skills by flipping cards to find matching cats! This project is built using React, TypeScript, and Vite.

Try it yourself here https://memorizor.vercel.app

## Features

- Single-player mode: Test your memory skills by yourself.

- Multiplayer mode: Compete with a friend to see who can find the most matching pairs.

- Beautifully designed UI for an enjoyable gaming experience.

## Getting Started

1. Install Dependencies

```
  npm install
```

2. Start the development server

```
  npm run dev
```

3. Open your browser and navigate to http://localhost:5173 to play the game.

## Architecture Overview

Memorizor app is built using the React Context API, providing a structured architecture that facilitates state management and data flow throughout the application. Here's an overview of the app's architecture:

1. ### Component-based Structure

   The app follows a component-based architecture, where each UI element and functionality is encapsulated within its own component. This modular approach promotes reusability, maintainability, and scalability of the codebase.

2. ### Context API for State Management

   The React Context API is utilized for managing global application state, such as game step. Contexts are created to encapsulate related state and provide a centralized location for accessing and updating this data across components without prop drilling.

3. ### Styling

   Styling is applied using CSS modules for a better style isolation among components.

4. ### API Integration

   The app integrates with external APIs, such as the cat image API for fetching cat images for the memory game. API requests are made asynchronously using built-in browser fetch API.

## Limitations

- The project is currently limited to fetching only 10 cats from the API because we do not have API KEY yet. Additional cats can be added with further development.

- The game is designed for entertainment purposes and may not be suitable for extremely large-scale use, like fetching 10000 cats without performance enhancements.

## Productionizing the App

The app is currently using Vercel. While Vercel offers many benefits for hosting React projects, such as easy deployment directly from GIT hosting, automatic scaling, and caching, there are also some potential disadvantages to consider:

1. Limited Configuration Options
2. Price for bigger apps
3. Performance Trade-Offs

As an alternative for Vercel I would propose to use a cloud provider which supports virtual computer, such as AWS, Google Cloud, Azure and so on. This will give us more flexibility on app lifecycle and costing optimizations.

In order to generate a production build of our app, we can simply run `npm run build` which will generate a `dist` directory with production-ready files.

As a web server we could use Nginx due to its features like:

- Performance
- Security
- Cache
