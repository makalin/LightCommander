# LightCommander

LightCommander is a simple file manager inspired by Norton and Total Commander, built using Electron. It provides a dual-panel interface with basic file operations and keyboard shortcuts for efficient navigation and management.

## Features

- **Dual-Panel Interface**: Navigate directories in two panels simultaneously.
- **File Operations**:
  - View (F3)
  - Edit (F4)
  - Copy (F5)
  - Move (F6)
  - Delete (F8)
- **Keyboard Shortcuts**: Perform actions quickly using function keys.
- **Footer Menu**: Clickable buttons for all supported functions.
- **Simple Text Editor**: View and edit files within the app.
- **Dark Mode**: Toggle between light and dark themes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/LightCommander.git
   cd LightCommander
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## Usage

- Use the dual panels to navigate directories.
- Select files and perform operations using the footer buttons or keyboard shortcuts:
  - **F3**: View file content.
  - **F4**: Edit file content.
  - **F5**: Copy files.
  - **F6**: Move files.
  - **F8**: Delete files.
- Toggle between light and dark mode from the menu.

## Development

- To modify or add features, edit the Electron backend in `main.js` and the frontend in `index.html` and `renderer.js`.
- Run the app in development mode:
  ```bash
  npm start
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Inspired by Norton and Total Commander.
- Built with Electron.

## Contact

For questions or suggestions, please open an issue.
