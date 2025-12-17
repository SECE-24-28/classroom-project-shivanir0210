import{BrowserRouter,Routes,Route, Link} from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Users from "./Users"
import Books from "./Books"
import Invoices from "./Invoices"

function App() {
  return (
    <BrowserRouter>
    <h1>im from app</h1>
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to="/User/1"><li>Users 1</li></Link>
        <Link to="/User/2"><li>Users 2</li></Link>
        {/* <Link to="/Book"><li>Books</li></Link> */}
        <Link to="/Book/newbook"><li>New Book</li></Link>
        <Link to="/Book/oldbook"><li>Old Book</li></Link>
    </ul>
   
    <Routes>
      <Route path="/"element={<Home/>}></Route> 
      <Route path="/About"element={<About/>}></Route> 
      <Route path="/Contact"element={<Contact/>}></Route> 
      <Route path="/User/:id"element={<Users/>}></Route> 
      <Route path="/Book"element={<Books/>}></Route>
      <Route path="/Book">
      <Route path="newbook" element={<Books/>}></Route>
        <Route path="oldbook" element={<Books/>}></Route>
        </Route>
      <Route path="/Invoice"element={<Invoices/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
