import { useContext } from 'react'
import BmiContext from './BmiContext'
import { useForm } from 'react-hook-form'

const Bmidetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { bmi, setBmi, message, setMessage, calculateBmi } = useContext(BmiContext)

  const onSubmit = (data) => {
    calculateBmi(data)
  }

  const handleReset = () => {
    reset()
    setBmi('')
    setMessage('')
  }

  return (
    <div className="bmi-page">
      <div className="bmi-card">
        <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bmi-form">
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              placeholder="Enter weight (kg)"
              id="weight"
              {...register('weight', { required: true })}
              className="form-input"
            />
            {errors.weight && <span className="field-error">Weight is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              placeholder="Enter height (cm)"
              id="height"
              {...register('height', { required: true })}
              className="form-input"
            />
            {errors.height && <span className="field-error">Height is required</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn primary">
              Calculate
            </button>
            <button type="button" className="btn secondary" onClick={handleReset}>
              Reset
            </button>
          </div>

          <div className="information">
            <h4>
              Your BMI is: <span>{bmi?.bmi || '--'}</span>
            </h4>
            <p>
              {message || 'Fill in your weight and height, then submit to see your result.'}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Bmidetails;
