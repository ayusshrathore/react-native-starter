# React Native Starter

Welcome to React Native Starter! This repository serves as a foundation for kickstarting your React Native projects. It includes a basic setup with essential libraries and a project structure to get you up and running quickly. Whether you are building a simple mobile app or a more complex one, React Native Starter provides a solid starting point.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

React Native Starter is a boilerplate project that sets up a React Native app with some commonly used libraries and configurations. It is designed to save you time and effort in the initial setup of your project, allowing you to focus on building your app's unique features.

## Features

- **Ready-to-Use Setup**: The project comes with a pre-configured React Native setup, including essential dependencies and project structure.

- **Navigation**: Integrated navigation setup using React Navigation, enabling easy navigation between screens.

- **State Management**: State management is handled using Redux, ensuring a smooth and predictable data flow.

- **API Integration**: Axios is included to facilitate easy integration with APIs and handling network requests.

- **Styling**: Utilizes stylesheets and styled-components for easy and organized styling.

- **Linting**: ESLint is set up to maintain code quality and consistency.

- **i18n Support**: The project is ready to support multiple languages using i18n.

- **Customizable Theme**: The project allows easy theming through customizable style variables.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- React Native CLI
- Android Studio (for Android development) or Xcode (for iOS development)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ayusshrathore/react-native-starter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-native-starter
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project structure is organized to enhance maintainability and scalability. Here's an overview of the main directories:

- `android`: Contains Android-specific configurations and files.

- `ios`: Contains iOS-specific configurations and files.

- `src`: Contains the main source code of the React Native app.

  - `assets`: Includes app assets such as images and icons.

  - `components`: Contains reusable React components used throughout the app.

  - `navigation`: Includes the setup for navigation using React Navigation.

  - `store`: Contains the zustand setup, including hooks to access the store.

  - `screens`: Contains individual screens of the app.
 
  - `entities`: Contains entities for defining interfaces and types for the app.
 
  - `hooks`: Contains custom hooks to fetch data using React Query.

  - `services`: Includes services related to API integration, storage, etc.

  - `styles`: Contains global styles and theme variables.

## Usage

To run the React Native Starter app, follow these steps:

### Android

1. Ensure you have the Android emulator or a physical Android device connected.

2. Run the following command to start the app:

   ```bash
   npm run android
   ```

### iOS

1. Ensure you have Xcode installed on your macOS machine.

2. Run the following command to start the app:

   ```bash
   npm run ios
   ```

## Contributing

Contributions to React Native Starter are welcome and encouraged! If you find any bugs, have feature requests, or want to improve the code, feel free to open issues and pull requests.

---

I hope you find React Native Starter helpful in kickstarting your React Native projects. If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!
