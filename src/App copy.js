import "./styles/style.css";
import NotesApp from "./components/page/NotesApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NotesApp />
    </BrowserRouter>
  );
}

export default App;
