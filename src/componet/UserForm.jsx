import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const[firstnameError, setFirstnameError] = useState("")
    const[lastnameError, setLastnameError] = useState("")
    const[emailError, setEmailError] = useState("")
    const[passwordError, setPasswordError] = useState("")
    const[confirmpasswordError, setConfirmpasswordError] = useState("")

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("Firstname is required!");
        } else if(e.target.value.length < 3) {
            setFirstnameError("Firstname must be 3 characters or longer!");
        } else{
            setFirstnameError("")
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Lastname is required!");
        } else if(e.target.value.length < 3) {
            setLastnameError("Lastname must be 3 characters or longer!");
        } else{
            setLastnameError("")
        }
    }
            const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else{
            setEmailError("")
        }
    }
        const handlePassword = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError("Password is required");
            } else if(e.target.value.length < 3) {
                setPasswordError("Password must be 3 characters or longer!");
            } else{
                setPasswordError("")
            }
        }
            const handleConfirmpassword =(e) =>{
                setConfirmpassword(e.target.value)
                if(e.target.value !== password){
                    setConfirmpasswordError("Password must match")
                }else{
                    setConfirmpasswordError("")
                }
    }
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };
    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={handleFirstname} value = {firstname}/>
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={handleLastname} value = {lastname}/>
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } value = {email}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } value = {password}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmpassword } value = {confirmpassword}/>
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;