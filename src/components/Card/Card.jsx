import Ticket from "../Ticket/Ticket";
import "./Card.scss"
import React from "react";

const Card = (props) => {

    const {users} = props;

    return (users.map ((data) => {
        return <Ticket name={data.name} role={data.role} key={data.id} />

  })
    )
}


  export default Card