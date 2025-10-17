import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FormInput from "./component/FormInput";
// import Linklist from "./component/Linklist";
import { useState } from "react";
import type { LinkItem } from "./component/Linklist";
import { getItems } from "./utils/LocalStorageFunction";

function App() {
  const [items, setItems] = useState<LinkItem[]>(() => {
    // Initialize with data from localStorage
    return getItems<LinkItem>("links");
  });
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<LinkItem[] | []>([]);
  return (
    <div>
      <div>
        <Header
          items={items}
          setItems={setItems}
          searchResults={searchResults}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          setSearchResults={setSearchResults}
        />
      </div>

      <div className="container">
        <div style={{ width: "100%" }}>
          <FormInput
            items={items}
            setItems={setItems}
            searchResults={searchResults}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            setSearchResults={setSearchResults}
          />
        </div>

        <div style={{ width: "48%" }}>{/* <Linklist /> */}</div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
