import { TodayHabitsProvider } from "../../utils/Providers/TodayHabitsProvider";
import { UserProvider } from "../../utils/Providers/UserProvider";
import { Routes } from "../Routes/Routes";
import { StyledApp } from "./style";

function App() {

  return (
    <StyledApp>
      <UserProvider>
        <TodayHabitsProvider>
          <Routes />
        </TodayHabitsProvider>
      </UserProvider>
    </StyledApp>
  );
}

export default App;
