# Todo App

This is a simple Todo application built with React, Redux, and JSON Server. It allows users to add, delete, and toggle todos, with the data persisted on a JSON server. This also uses Tailwind CSS and Framer Motion, because, why not.

## Features

- Add new todos
- Delete existing todos
- Toggle the completion status of todos
- Animations for adding and removing todos using Framer Motion
- State management using Redux
- Error boundary for handling unexpected errors

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [json-server](https://www.npmjs.com/package/json-server)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Rishi-Sudhakar/todo-app.git
   cd todo-app
   ```
2. Install the dependencies: (Feel free to check package.json)

   ```sh
   npm install
   ```
3. Start the JSON Server: (Feel free to use any ports, make sure to edit the port config in code)
<img width="824" alt="Screenshot 2024-06-10 at 10 24 43 PM" src="https://github.com/Rishi-Sudhakar/todo-app/assets/79398572/280e6df5-593f-4ca3-8d39-793b3a445e93">

   ```sh
   json-server --watch db.json --port 5001
   ```
4. Start the React application:

   ```sh
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` (It automatically redirects you anyway)
<img width="682" alt="Screenshot 2024-06-10 at 10 22 44 PM" src="https://github.com/Rishi-Sudhakar/todo-app/assets/79398572/9e5f919e-1fbd-4318-9d36-9ccdb26f198d">

## Folder Structure
```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   ├── redux/
│   │   ├── actions/
│   │   │   └── todoActions.js
│   │   ├── reducers/
│   │   │   └── todoReducer.js
│   │   └── store.js
│   ├── App.js
│   ├── index.css
│   └── index.js
└── db.json
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
