import { UserProvider } from "../../utils/Providers/UserProvider";
import { Routes } from "../Routes/Routes";
import { StyledApp } from "./style";

function App() {

  return (
    <StyledApp>
      <UserProvider>
        <Routes />
      </UserProvider>
    </StyledApp>
  );
}

export default App;
