# Atomic Blog

A small React blog app focused on component composition and shared state with Context API.

## Features

- Add new posts from a form
- Browse and search posts in real time
- Debounced search input for smoother filtering
- Toggle fake dark mode
- Clear all current posts
- Generate and browse a large archive of random posts (10,000)
- Add archive items into the main posts list

## Tech Stack

- React 18
- Context API + custom hook (`usePosts`)
- Create React App
- Faker (`@faker-js/faker`) for archive/random post generation

## Project Structure

```text
src/
	App.js
	index.js
	context/
		PostContext.jsx
	components/
		Archive/
		CreateRandomPost/
		Debounce/
			useDebounce.js
		Footer/
		FormAddPost/
		Header/
		List/
		Main/
		Post/
		Result/
		SearchPost/
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open `http://localhost:3000` in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm test`

Runs the test runner in watch mode.

### `npm run build`

Creates a production build in the `build` folder.

### `npm run eject`

Ejects Create React App configuration (irreversible).

## State Management Notes

- Global app state lives in `PostContext`
- The app root is wrapped with `PostsProvider` in `src/index.js`
- `usePosts` is the shared hook used by components to read/update post state

## Debounced Search

Search uses a local input state plus a debounced value via `components/Debounce/useDebounce.js` before updating global `searchQuery`.

This reduces unnecessary filtering on every keystroke and keeps typing responsive.
