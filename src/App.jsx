import './App.scss';
import team from "./Data/names";
import SearchBar from "./components/SearchBar/SearchBar"
import {useState} from "react";
import Ticket from './components/Ticket/Ticket';


const App = () => {
const [searchTerm, setSearchTerm] = useState("");
const handleInput = (event) => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput); 
};

  const teamMap = team.map((data) => {
    return <Ticket name={data.name} role={data.role} key={data.id} />
  })
  const filteredEmployee  =  team.filter((users) => {
        const userLowercase = users.name.toLowerCase()

    return userLowercase.includes(searchTerm)
  })
  const employeeSearch = filteredEmployee.map((users) => (<Ticket name={users.name} role={users.role} key={users.id}/>))

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
    <SearchBar handleInput={handleInput} searchTerm={searchTerm}/>
    <div className='app__tickets'>
    {searchTerm.length > 0 ? employeeSearch : teamMap}      
    {/* if the length of the sting SearchTerm has a value greater than 0. Render(?) the filteredEmployeeJSX else(:) render the mappedTeam */}
    </div>
      </div>
  );
}

export default App;
