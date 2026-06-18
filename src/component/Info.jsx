import { useState } from 'react';
import { useForm } from "react-hook-form"

const Info = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    email: '',
    course: '',
    year: '',
    phone: '',
  });
 const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()


 const onSubmit=(data)=>{
    console.log(data)
 }

  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Student Registration</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="studentName" className="form-label">
                  Student Name
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                 {...register("studentName",{
                          required: "Student Name is required",
                        })}
                        />
                        {errors.studentName && (
                       <p className="text-danger">{errors.studentName.message}</p>
                                            )}
              </div>

              <div className="col-md-6">
                <label htmlFor="rollNumber" className="form-label">
                  Roll Number
                </label>
                <input
                  id="rollNumber"
                  name="rollNumber"
                  type="text"
                  className="form-control"
                  placeholder="Enter roll number"
                  {...register("rollNumber",{
                          required: "Roll Number is required",
                        })}
                        
                />
                {errors.rollNumber &&( <p className='text-danger'>{errors.rollNumber.message}</p> ) }
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  {...register("email",{required:"Email is required"})}
                />
                 {errors.email && (
                       <p className="text-danger">{errors.email.message}</p>
                                            )}
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone number"
                   {...register("phone",{required:"phone No. is required"})}
                />
                  {errors.phone && ( <p className='text-danger'>{errors.phone.message}</p>)}
              </div>
               
              <div className="col-md-6">
                <label htmlFor="course" className="form-label">
                  Course
                </label>
                <input
                  id="course"
                  name="course"
                  type="text"
                  className="form-control"
                  placeholder="Enter course"
                 {...register("course",{required:"Course is mandetory"})}
                />
              </div>
              {errors.course && (<p className='text-danger'>{errors.course.message}</p>)}

              <div className="col-md-6">
                <label htmlFor="year" className="form-label">
                  Academic Year
                </label>
                <select
                  id="year"
                  name="year"
                  className="form-select"
                  {...register("year")}
                >
                  <option value="">Choose year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;