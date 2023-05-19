# Game Junction

Game Junction is a test project developed as part of a company interview process. It is a mobile app built using React Native and leverages various libraries and technologies for navigation, state management, API requests, and UI components.

## Features

- Tab navigation with two screens: "All Games" and "Records".
- The "All Games" tab serves as the main section of the app, while the "Records" tab solves an extra problem task.
- The "All Games" tab includes functionality such as filtering and sorting.
- Filtering: Users can access the filter options by tapping the "Filter By" button, which opens a modal with filtering criteria.
- Sorting: Users can access the sorting options by tapping the "Sort By" button, which opens a modal with available sorting variants.

## Technologies Used

- React Native: A JavaScript framework for building native mobile apps.
- React Navigation: A navigation library for handling navigation and routing in the app.
- React Context and useReducer: Used for managing app state and sharing data between components.
- Axios: A popular HTTP client for making API requests.
- axios-rate-limit: A library used to limit the number of requests sent to the backend to prevent exceeding the rate limit (4 requests per second).
- react-native-svg: A library for rendering SVG images and icons in React Native apps.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/RabiyatRamaldanova/GameJunction.git

2. Navigate to the project directory:

   cd GameJunction

3. Install the dependencies:

   npm install

4. Start the development server:

   npm start