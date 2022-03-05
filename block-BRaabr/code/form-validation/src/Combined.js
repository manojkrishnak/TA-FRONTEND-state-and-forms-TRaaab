import App from "./App";
import FormValidation from "./Components/FormValidation";
import "../src/App.css";

function Combined() {
  return (
    <div className="container">
      <div className=" flex justify-bt">
        <App />
        <FormValidation />
      </div>
    </div>
  );
}

export default Combined;
