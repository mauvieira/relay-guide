import { Suspense } from "react";
import RelayEnvironment from "./relay/RelayEnvironment";
import Home from "./HomePage";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <RelayEnvironment>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <Suspense fallback={<p>loading</p>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironment>
  );
}

export default App;
