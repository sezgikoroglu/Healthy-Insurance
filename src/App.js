import React from "react";
import { AppProvider, useApp} from "./context/state";
import Main from "./container/main";

function App() {

  const item = useApp();

  return (
    <AppProvider>

        <Main/>

    </AppProvider>
  );
}

export default App;
