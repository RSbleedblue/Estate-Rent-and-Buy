# Rent a Property - Real Estate Single Page Application

## Overview

This project is a single-page real estate web application for renting properties. It allows users to search and filter properties based on multiple criteria and save specific properties to a Favorites page. The application is built using React and Redux, with Tailwind CSS for styling.

## Features

1. **Filtering Mechanism**: The application provides four levels of filtering as shown in the reference link. The filters help users to narrow down their search to find properties that meet their specific requirements.
2. **Favorites Page**: Users can add properties to a Favorites page. This page displays the properties that the user has marked as favorites, allowing them to easily review and compare their choices.
3. **Dummy Data**: The application uses dummy data to display results after applying filters. This ensures that the application can be tested and demonstrated without needing a backend service.

## Components

1. **NavBar**: The navigation bar component that includes links to different sections of the application.
2. **SearchBar**: A search bar component for users to enter search queries.
3. **FilterBar**: A filter bar component that includes various filtering options.
4. **ListingLoader**: A component that displays the list of properties based on the applied filters.
5. **FavoritesPage**: A component that displays the properties that the user has added to their favorites.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rent-a-property.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rent-a-property
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **React Toastify**: A library for displaying toast notifications in React applications.

## Folder Structure

```
rent-a-property/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Listing/
│   │   │   └── ListingLoader.jsx
│   │   ├── filter/
│   │   │   └── filterBar.jsx
│   │   ├── navbar/
│   │   │   └── navbar.jsx
│   │   └── searchBar/
│   │       └── searchBar.jsx
│   ├── Slices/
│   │   └── EstateSlice.js
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   └── FavoritesPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.js
│   └── Store.js
├── .gitignore
├── package.json
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
