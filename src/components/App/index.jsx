import { UserProvider } from "../../utils/Providers/UserProvider";
import { Routes } from "../Routes/Routes";

function App() {

  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
