import React, {useState} from 'react'



const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [passConfirmError, setPassConfirmError] = useState("");
    

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1){
            setFirstNameError("First name is required")
        } else if (e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters")
        } else
            setFirstNameError("")
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1){
            setLastNameError("Last name is required")
        } else if (e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters")
        } else
            setLastNameError("") 
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1){
            setEmailError("Email is required")
        } else if (e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters")
        } else
            setEmailError("") 
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1){
            setPasswordError("Password is required")
        } else if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("")
        }
    }

    const handlePassConfirm = (e) => {
        setPassConfirm(e.target.value);
        if (e.target.value != password){
            setPassConfirmError("Passwords do not match")
        } else {
            setPassConfirmError("")
        }
    }
    


    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange = {handleFirstName} />
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange = {handleLastName}/>
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange = {handleEmail}/>
                    {
                        emailError ?
                        <p>{emailError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange = {handlePassword}/>
                    {
                        passwordError ?
                        <p>{passwordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="password" onChange = {handlePassConfirm}/>
                    {
                        passConfirmError ?
                        <p>{passConfirmError}</p>:
                        ''
                    }
                </div>
            </form>

        </div>
  )
}

export default Form