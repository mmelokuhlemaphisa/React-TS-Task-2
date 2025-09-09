import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FormInput from "./component/FormInput";
import Linklist from "./component/Linklist";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="container">
        <div style={{width:"50%"}}>
          <FormInput />
        </div>

      <div style={{width:"48%"}}>
            <Linklist />
          </div>
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
