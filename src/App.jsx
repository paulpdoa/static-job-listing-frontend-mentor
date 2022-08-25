import Home from "./pages/Home"
import Header from "./components/Header"
import { JobContextProvider } from './context/JobContext';


function App() {

  return (
    <JobContextProvider>
      <Header />
      <Home />
    </JobContextProvider>
  )
}

export default App
