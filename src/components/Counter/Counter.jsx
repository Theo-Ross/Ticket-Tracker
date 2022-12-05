import "./Counter.scss"
import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
       
          setCounter(counter + 1);
        }

      const handleDecrement = () => {
       
          setCounter(counter - 1);
        }



        return (

                <div className="counter__container">
                    <h1 className="counter__title">Counter</h1>
                    <p className="counter__display">{counter}</p>
                    <div className="counter__buttons"><p onClick={handleDecrement} className="counter__decrement">-</p> <p onClick={handleIncrement} className="counter__increment">+</p></div>
                </div>

        )

}

export default Counter;





















