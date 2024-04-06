import { Suspense } from "react";
import RelayEnvironment from "./relay/RelayEnvironment";
import Home from "./HomePage";

function App() {
  return (
    <RelayEnvironment>
      <Suspense fallback={<p>loading</p>}>
        <Home/>
      </Suspense>
    </RelayEnvironment>
  );
}

export default App;
