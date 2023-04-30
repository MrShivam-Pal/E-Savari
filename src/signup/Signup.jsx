import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './css/Signup.css';

export default function Signup(){

    const navigate = useNavigate();

    const[input, setInputs] = useState();

    function showStatus(status, message){
        var message_box;
        if(status === 0){
            message_box = document.getElementById('error-message');
        }
        else{
            message_box = document.getElementById('success-message');
        }
    
        message_box.innerHTML = message;
        message_box.style.display = "block";
        setTimeout(function(){
            message_box.style.display = "none";
        }, 3000);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();  
        axios.post('http://localhost/eSavari/users/signup-user.php', input).then(function(response){
            // console.log(response.data);
            navigate('/login');
            showStatus(response.data['status'], response.data['message']);
        });
    }

    return(
    <div id="container">
        <div id="signupform">
        <h2 id="headerTitle">Signup Form</h2>
        <form onSubmit={handleSubmit}>
        <div class="row">
            <label>Name</label>
            <input description="name" name="name" placeholder="Enter your name" type="text" onChange={handleChange} required/>
        </div>
        <div class="row">
            <label>Email</label>
            <input description="email" name="email" placeholder="Enter your email" type="email" onChange={handleChange} required/>
        </div>
        <div class="row">
            <label>Phone Number</label>
            <input description="phoneNumber" name="phoneNumber" maxLength="10" placeholder="Enter your Phone Number" type="number" onChange={handleChange} required/>
        </div>
        <div class="row">
            <label>PassWord</label>
            <input description="Password" name="password" placeholder="Enter your password" type="password" onChange={handleChange} required/>
        </div>
        <div class="row">
            <label>Confirm PassWord</label>
            <input description="confirmPassword" name="confirmPassword" placeholder="Enter your password again!" type="password" onChange={handleChange} required/>
        </div>
        <div id="button" class="row">
        <button>Submit</button>
        </div>
        </form>
        </div>
    </div>
    );
}
