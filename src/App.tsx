import { PathfindingProvider } from "./context/PathfindingContext";


function App() {

  return (
    <PathfindingProvider>
      <h1 class="text-3xl font-bold underline h-screen w-screen bg-blue-500">
        Hello all!
      </h1>
    </PathfindingProvider>
  );
}

export default App;
