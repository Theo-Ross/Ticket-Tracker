import './App.scss';
import Ticket from "./components/Ticket/Ticket"
import team from "./Data/names"
import SearchBar from "./components/SearchBar/SearchBar"



function App() {
 
const [searchTerm, setSearchTerm] = useState("");
const [filtered, setFiltered] = useState("");


const handleInput = (event) => {
  
  const cleanInput = event.target.value.toLowerCase();

  setSearchTerm(cleanInput);


  const filtered =  team.filtered(users => {

    const userLowercase = users.name.toLowerCase()
    return userLowercase.includes(searchTerm) && users
  })

  setFiltered(filtered)
}



  const ticketJSX = team.map ((data) => {
    return <Ticket name={data.name} role={data.role} />
  })

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      <div> <SearchBar handleInput={handleInput}/> </div>
    <div className='app__tickets'>
      {ticketJSX}
    </div>



      </div>
  );
}

export default App;
