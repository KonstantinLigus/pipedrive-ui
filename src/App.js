import { useEffect } from "react";
import "./App.css";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";

function App() {
  useEffect(() => {
    const init = async () => {
      await new AppExtensionsSDK({
        identifier: "7c9c58b7-97a6-49d7-81e7-98fb8e0a9e25",
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
