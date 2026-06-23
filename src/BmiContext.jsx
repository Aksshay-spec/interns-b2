
import { createContext, useState } from "react";

const BmiContext = createContext()

 export const BmiProvider = ({ children }) => {
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const calculateBmi = (data) => {
    const weight = Number(data.weight)
    const height = Number(data.height)

    if (!weight || !height || height <= 0) {
      setBmi('')
      setMessage('Please enter valid weight and height values.')
      return
    }

    const bmiValue = weight * 10000 / (height * height)
    const bmiRounded = bmiValue.toFixed(2)

    setBmi({
      weight,
      height: data.height,
      bmi: bmiRounded,
    })

    if (bmiValue < 18.5) {
      setMessage('Underweight')
    } else if (bmiValue < 25) {
      setMessage('Normal Weight')
    } else if (bmiValue < 30) {
      setMessage('Overweight')
    } else {
      setMessage('Obese')
    }
  }

  return (
    <BmiContext.Provider value={{ bmi, setBmi, message, setMessage, calculateBmi }}>
      {children}
    </BmiContext.Provider>
  )
}

export default BmiContext;