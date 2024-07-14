import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";


function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
     </BrowserRouter> 
    </>
  );
}

export default App;
