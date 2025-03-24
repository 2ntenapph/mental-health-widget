# Mental Health Widget

This project implements a psychological tests widget designed for embedding into web platforms such as Tilda. The widget supports multilingual functionality (Russian and English).

## Project Structure

```
mental-health-widget/
├── index.html
├── package.json
└── src/
    ├── Questionnaire.ts
    ├── calculateScores.ts
    ├── getLevelForCategory.ts
    ├── main.ts
    ├── renderQuestionnaire.ts
    ├── tests.ru.ts
    ├── ui.ts
    └── styles.css
```

## Installation

1. Clone or download the repository.
2. Navigate to the project folder in your terminal.
3. Install dependencies using npm:

```bash
npm install
```

## Development

To run the development server using Vite:

```bash
npm run dev
```

Open your browser to view the widget typically on `http://localhost:5173`.

## Building for Production

Compile and build the project for production deployment:

```bash
npm run build
```

The production files will be located in the `dist/` folder.

## Usage

Embed the compiled widget into your website by linking the built HTML, CSS, and JavaScript files.

## Features

- Multilingual support: Russian 🇷🇺 and English 🇺🇸
- Interactive psychological tests
- Modular TypeScript implementation for maintainability and scalability

## Technologies

- HTML/CSS/JavaScript
- TypeScript
- Vite

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Contributions

Contributions are welcome! Please create a pull request for proposed changes or enhancements.

