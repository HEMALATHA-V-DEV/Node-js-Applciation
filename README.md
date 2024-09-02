# Quiz Application

This is a quiz application focused on DevOps and AWS services. Users can select a topic, take a quiz, and get their score.

## Setup

1. Install dependencies:


## File Descriptions:

.gitignore: Lists files/folders that Git should ignore (e.g., node_modules, .env, *.log, etc.).

Dockerfile: Used for containerizing the application. It sets up the environment, installs dependencies, and specifies how to run the app.

README.md: A markdown file providing a description of the project, setup instructions, and how to run the application.

package.json: Defines the Node.js project and its dependencies. It also contains scripts for running the application.

server.js: The entry point of the application. It sets up the server and listens for incoming HTTP requests.

app.js: Initializes the Express application, sets up middleware, and defines basic routes.

public/css/style.css: Contains the CSS styling for the HTML pages.

public/js/script.js: Handles the quiz logic (e.g., option selection, score calculation) on the client side.

public/index.html: The homepage where users can select between the DevOps and AWS quiz topics.

routes/quizRoutes.js: Contains the logic to serve the quiz questions and handle form submissions.