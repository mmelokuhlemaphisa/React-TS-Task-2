import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FormInput from "./component/FormInput";
// import Linklist from "./component/Linklist";
import { useState } from "react";
import type { LinkItem } from "./component/Linklist";
import { getItems } from "./utils/LocalStorageFunction";

function App() {
  const [items, setItems] = useState<LinkItem[]>(() =>
    getItems<LinkItem>("links")
  );
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<LinkItem[] | []>([]);

  return (
    <div className="app-root">
      <Header
        items={items}
        setItems={setItems}
        searchResults={searchResults}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        setSearchResults={setSearchResults}
      />

      <main className="container">
        <FormInput
          items={items}
          setItems={setItems}
          searchResults={searchResults}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          setSearchResults={setSearchResults}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
