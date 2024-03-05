import './App.css';
import Create from './components/create/create';
import Read from "./components/read/read";
import { BrowserRouter, Route } from "react-router-dom";
import Update from "./components/update/update";
import Delete from "./components/delete/delete";



const App = () => {
  return (
    <>
      <BrowserRouter>
              

        <Route>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Route>

        
      </BrowserRouter>
    </>
  );
};

export default App;
