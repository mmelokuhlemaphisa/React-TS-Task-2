<img src="https://socialify.git.ci/mmelokuhlemaphisa/React-TS-Task-2/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="React-TS-Task-2" width="640" height="320" />

# About the Project

This project is **Link Vault**, a React + TypeScript application that allows users to save, edit, delete, and search their favorite links.  
It is a modern, responsive web app that leverages **local storage** for persistence, ensuring your links remain available even after refreshing the page.


# Features

* **Reusable Components**: Header, Search Bar, Form Input, Button, and Link List components.
* **Local Storage Integration**: Saved links persist after refreshing the browser.
* **Search Functionality**: Filter links by title, description, tags, or URL (real-time search).
* **Responsive Layout**: Optimized for desktops, tablets, and mobile screens.
* **Modern UI Design**: Clean, minimal, and intuitive interface.


# Main Components

* **Header.tsx** → Navigation bar and search input.
* **SearchBar.tsx** → Search box with real-time filtering.
* **FormInput.tsx** → Form for adding/editing links (title, description, tags, URL).
* **Linklist.tsx** → Displays links in a table with edit/delete actions.
* **Button.tsx** → Reusable button component.
* **LocalStorageFunction.ts** → Utility functions for saving and retrieving data.

# Steps Taken to Build the React App

1. **Set up React Project**
   ```bash
   npm create vite@latest
   Project name: link-vault
   cd link-vault
   npm install
   npm run dev
