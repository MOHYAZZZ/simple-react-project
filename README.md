# Camera Search Application

This is a simple React application created as a learning exercise to gain a practical understanding of React. The application displays a list of cameras and provides a search functionality to find cameras by their names. It showcases a simple implementation of state management and component composition in React.

## Main Features

- List of cameras: Displays a list of classic and modern cameras along with their images and descriptions.

- Search function: Provides a search box where users can search for a camera by its name. As you type in the search box, the list of cameras gets filtered based on your input.

## Components

This application contains the following main components:

- `App`: This is the main component of the application. It manages the state of the application, which includes a list of cameras and the filtered list of cameras based on the search input. It also renders the `CameraList` and `SearchBox` components.

- `CameraList`: This is a component that takes in an array of cameras as props and displays them. Each camera is displayed with an image, name, and description.

- `SearchBox`: This is a component that provides a search box for users to search for cameras by their names. It handles the search input and triggers the filtering of the cameras list.
