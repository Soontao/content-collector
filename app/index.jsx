import { createRoot } from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm";
import App from "./App.jsx";

const root = createRoot(document.getElementById("container"));

root.render(<App />);

document.title = "Content Collector";
