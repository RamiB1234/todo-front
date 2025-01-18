# To-Do App Frontend

This repository contains the frontend of the To-Do application, built using React and Bootstrap. It provides a user-friendly interface to interact with the backend API for managing tasks.

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **View Tasks**: Displays a list of all tasks with their current status.
- **Toggle Completion**: Allows users to mark tasks as completed or pending.
- **Responsive Design**: Ensures usability across various device sizes.

## Getting Started

Follow these instructions to set up and run the frontend locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RamiB1234/todo-front.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd todo-front
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```
The application will open in your default browser at `http://localhost:3000`.

## Configuration

The frontend communicates with the backend API. Ensure the backend is running and accessible. If the backend URL differs, update the API base URL in the `api.js` file accordingly.

## Deployment

To create an optimized production build:
```bash
npm run build
```
The optimized build will be in the `build` directory, ready for deployment.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.