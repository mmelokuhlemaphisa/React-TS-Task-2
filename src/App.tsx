import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FormInput from "./component/FormInput";
import Button from "./component/Button";

function App() {
  return (
    <div>
      <div>
        <Header />
        
      </div>

   <div className="container">

<FormInput/>


  </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
