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

## Players Cards Pairs Data Structure

The Memorizor app utilizes a triple level array data structure to manage player card pairs. This structure is designed to organize the game state, specifically the pairs of cards that each player has discovered during gameplay. Here's an explanation of the data structure:

PlayerCardsPair:

```typescript
type PlayerCardsPair = [number, number];
```

- Represents a pair of cards discovered by a single player.
- Each pair consists of two numbers representing the indices of the matched cards in the game board.

PlayerCardsPairs:

```typescript
type PlayerCardsPairs = PlayerCardsPair[];
```

- Represents all the pairs of cards discovered by a single player.
- Each element of the array is a PlayerCardsPair.

PlayersCardsPairs:

```typescript
type PlayersCardsPairs = PlayerCardsPairs[];
```

- Represents the pairs of cards discovered by all players in the game.
- The length of the outer array corresponds to the number of players.
- Each element of the outer array (PlayerCardsPairs) represents the pairs of cards discovered by a specific player.
- Each element of the inner array (PlayerCardsPair) represents a pair of cards discovered by that player.

Example:

```typescript
const playersCardsPairs: PlayersCardsPairs = [
  // Player 1
  [
    [0, 1], // Player 1's first pair of cards
    [3, 4], // Player 1's second pair of cards
  ],
  // Player 2
  [
    [2, 5], // Player 2's first pair of cards
    [6, 7], // Player 2's second pair of cards
  ],
];
```

In addition to the custom data structure for managing player card pairs, the Cat Match Memory Game app utilizes the `Immer` library for state manipulation. Immer is employed to facilitate immutable updates to the game state, ensuring predictable and efficient management of complex data structures.

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
