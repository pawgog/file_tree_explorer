# FileTree Explorer

React + Typescript + Vite + Tailwind

## Architectural Decisions

- **State Management (Context API + Custom Hooks)**: Chosen Context API over Redux for its simplicity in handling a single, coherent tree object. The useTree hook implements the Guard Pattern, ensuring secure data access and cleaner component syntax.
- **Data Structure**: The TreeNode component is designed recursively, allowing the application to render deeply nested structures with minimal and maintainable code.
- **Search Engine**: Fast file and folder filtering by name/path.
- **Lazy Initialization**: Implemented within useState to ensure that localStorage access and JSON.parse operations run only once during the initial mount, significantly optimizing startup performance.
- **Styling**: Added Tailwind CSS solely for the quick development of a responsive interface with advanced state.
- **Routing (React Router)**: Implemented utility parameters (:nodePath) allow for direct linking of files and folders and support for the "Back" button in the application.

## Future Roadmap

- **List Virtualization**: For trees with significant thousands, rendering all DOM elements would reduce performance. I would use the react-window or react-virtuoso libraries.
- **Drag & Drop**: Implementing file and folder dragging, e.g. using dnd-kit to provide an interactive tree structure.
- **File Upload Support**: Adding support for .json file uploads via the File API, instead of just copy-pasting code.
- **Automated Tests**: Implementing unit tests (Vitest/Jest), e.g. for the findNode logic, and E2E tests for the JSON import process.

## Known Limitation

- **Key Uniqueness**: The current logic relies on node.name as the key. If two elements with the same name are in the same folder, React may experience rendering errors. Unique IDs or full paths are required.
- **LocalStorage Limits**: The localStorage limit is approximately 5 MB. With very large, complex JSON structures, writing may be impossible. Switching to IndexedDB or an external API is a solution.
- **No Memory Optimization**: All data is protected in the application state. With very large structures, memory distribution and rendering performance are compromised.
