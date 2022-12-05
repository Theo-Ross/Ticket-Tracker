import "./Ticket.scss"
import Counter from "../Counter/Counter"



const Ticket = (props) => {
const {name, role} = props
    return (

    <div className="ticket__container">
        <div className="ticket__np">
            <p>{name}</p>
            <p>{role}</p>
        </div>
        < Counter />
     </div>
    )
}

export default Ticket;