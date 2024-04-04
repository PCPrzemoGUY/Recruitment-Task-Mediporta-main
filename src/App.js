import "./App.css";
import { TagsProvider } from "./components/TagsContext";
import TagsList from "./components/TagsList";

function App() {
  return (
    <TagsProvider>
      <div className="App">
        <TagsList />
      </div>
    </TagsProvider>
  );
}

export default App;
