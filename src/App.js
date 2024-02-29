import { useEffect } from "react";
import "./App.css";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";

function App() {
  useEffect(() => {
    const init = async () => {
      await new AppExtensionsSDK({
        identifier: "62a33a39-4b48-460f-af2f-fd47707718ef",
      }).initialize({
        size: { height: 500 },
      });
    };
    init();
  }, []);

  return (
    <label>
      field
      <input type="text" style={{ width: "300px", height: "50px" }} />
    </label>
  );
}

export default App;
