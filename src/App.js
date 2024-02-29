import { useEffect } from "react";
import "./App.css";
import AppExtensionsSDK, {
  Command,
  Modal,
} from "@pipedrive/app-extensions-sdk";

function App() {
  useEffect(() => {
    const init = async () => {
      const sdk = await new AppExtensionsSDK().initialize({
        size: { height: 500 },
      });
      await sdk.execute(Command.OPEN_MODAL, {
        type: Modal.JSON_MODAL,
        action_id: "62a33a39-4b48-460f-af2f-fd47707718ef",
      });
    };
    init();
  }, []);

  return (
    <form>
      <label>
        field
        <input type="text" style={{ width: "300px", height: "50px" }} />
      </label>
    </form>
  );
}

export default App;
