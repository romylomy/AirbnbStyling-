import { useState } from "react"


export default function Form (){
    const [formData, setFormData] = useState(
        {
            firstName:'', 
            lastName:'', 
            email:'', 
            comments: '', 
            isFriendly: true,
        }
    )

    console.log(formData)

    function handleChange(event){
        const {name, value, type, checked } = event.target
        setFormData( prevState => {
            
            return{
                ...prevState,
                [name]: type === "checkbox" ? checked : value 
            }

        }) 
        
    }

    return (
        <form>
            <input
                type='text'
                placeholder="First Name"
                onChange={handleChange}
                name = "firstName"
                value = {formData.firstName}
            />
            <input
                type='text'
                placeholder="Last Name"
                onChange={handleChange}
                name = "lastName"
                value ={formData.lastName}
                
            />
            <input
                type='email'
                placeholder="Email "
                onChange={handleChange}
                name = "email"
                value = {formData.email}
                
            />
            <textarea
                value = {formData.comments}
                placeholder = "comments"
                onChange= {handleChange}
                name = 'comments'
            />
            <input 
                type= "checkbox" 
                id="isFriendly"
                name = "isFriendly"
                onChange= {handleChange}
                checked={formData.isFriendly}
                />
            <label htmlFor="isFriendly">Are you Friendly</label>
            <br/> 
        </form>
    )
}