# Star Wars App

This project is a small web application based on the Star Wars API (SWAPI). The application allows users to search for various Star Wars entities, such as characters, films, and planets, and view detailed information about them. It uses React for the frontend, Axios for API requests, and Vite for building and serving the application.

# Demo Recording

![Star Wars App Demo](./src/assets/images/demo-recording.gif)

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Dependencies](#development-dependencies)
- [React Concepts Used](#react-concepts-used)

## Installation

To install the necessary dependencies and run the application, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-repository/star-wars-app.git
```

2. Navigate to the project directory:

```bash
cd star-wars-app
```

3. Install the dependencies:

```bash
yarn install
```

4. Run the development server:

```bash
yarn run dev
```

## Scripts

The following scripts are available in the project:

- `dev`: Starts the Vite development server.
- `build`: Builds the application for production.
- `lint`: Runs ESLint to check for linting issues.
- `preview`: Previews the built application using Vite.

## Dependencies

- **axios**: ^1.7.2
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.23.1

## Development Dependencies

- **eslint**: ^8.57.0
- **eslint-plugin-react**: ^7.34.1
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.6
- **sass**: ^1.77.5
- **vite**: ^5.2.0

## Assignment Expection Covered

1. **Search Page:**

- correct layout the positioning of the components - DONE
- work as expected - DONE
- Click on view all for Characters routes to List page, for others convery user that it’s not implemented. - DONE
- Api request cancellation for on-flight requests upon new search term. - DONE
- using Suspense. - DONE
- error boundary. - DONE

2. **List Page for Characters:**

- switch between grid view and list view - DONE
- functional Load more button - DONE
- 20 character items in intial load - DONE
- support at least medium and large screens (min 780px ~ max 1440px) - DONE
- support small, medium and large screens. - DONE
- use only css for the layout and responsive design. (No framework) suggesting css grids - DONE
- Edit Functionality / Delete Functionality - DONE

## React Concepts Used

This project utilizes several important React concepts:

1. **Functional Components**: The entire application is built using functional components, which are simpler and more concise compared to class components.

2. **React Router**: The project uses react-router-dom for client-side routing, allowing users to navigate between different pages without a full page reload. Key components include BrowserRouter, Routes, and Route.

3. **State Management**: React's useState hook is used to manage local component state, such as search queries and fetched data.

4. **Effect Hook**: The useEffect hook is employed to perform side effects, such as fetching data from the SWAPI API when a component mounts or when a search query changes.

5. **Custom Hooks**: The project includes custom hooks like useDebounce to handle debouncing search input, improving performance by limiting the number of API calls made.

6. **Error Boundaries**: Error boundaries are implemented using a class component to catch JavaScript errors anywhere in the child component tree, log those errors, and display a fallback UI.

7. **Axios**: Axios is used for making HTTP requests to the SWAPI API, providing a simple and flexible API for performing CRUD operations.

8. **CSS Modules & SCSS**: The project uses SCSS for styling, allowing for modular and maintainable CSS. Variables and mixins are used to maintain consistent styling across the application.

By leveraging these React concepts and tools, the application is designed to be scalable, maintainable, and performant.

This README provides an overview of the project setup, dependencies, and the React concepts utilized in the development of the Star War App. For more detailed information, refer to the source code.
