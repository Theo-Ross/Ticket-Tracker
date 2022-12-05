import './App.scss';
import Ticket from "./components/Ticket/Ticket"
import team from "./Data/names"


function App() {
 
  const ticketJSX = team.map ((data) => {
    return <Ticket name={data.name} role={data.role} />
  })

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>

    <div className='app__tickets'>
      {ticketJSX}
    </div>



      </div>
  );
}

export default App;
