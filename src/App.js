import "./App.css";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";

const sdk = await new AppExtensionsSDK({ identifier: "123abc" }).initialize({
  size: { height: 500 },
});

function App() {
  return (
    <label>
      field
      <input type="text" style={{ width: "300px", height: "50px" }} />
    </label>
  );
}

export default App;
