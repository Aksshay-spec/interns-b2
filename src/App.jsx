import { useForm } from "react-hook-form"
function App() {
const {
  register,
  handleSubmit,
  watch,
  formState: {errors, isSubmitting},
} = useForm();
async function onSubmit(data){
  // API call ko simulate krte h
  await new Promise((resolve)=>setTimeout(resolve, 5800));
  console.log("Submiting the form", data);
}
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
     <div>
     <label>First Name: </label>
     <input 
     className={errors.firstName ? 'input-error':""}
     {...register("firstName",
       {
         required: "Name is required",
          minLength:{value:3, message:'min len atlist 3'},
        maxLength:{value:6, message:'max le 6'} 
        })} />
        {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
    </div>
    <br />
     <div>
     <label>Last Name: </label>
     <input 
     {...register("lastName", {
      required: "Enter last name",
      pattern: {
        value: /^[A-Za-z]+$/i ,
        message:"last name is not as per the rule"
      }
     })} />
     {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
    </div>
    <br />
    //click btn true the btn is disabled
    <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting":"Submit"}
    
    />
   </form>
  )
}

export default App
