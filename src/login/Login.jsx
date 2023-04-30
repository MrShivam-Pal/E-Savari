import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './css/Login.css';

export default function Login(){

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
        axios.post('http://localhost/eSavari/users/login-user.php', input).then(function(response){
            console.log(response.data);
            if(response.data['status'] === '1'){
                navigate('/');
                console.log(response.data);
                localStorage.setItem('eSavari-loggedin', true);
                localStorage.setItem('eSaveri-id', response.data['id']);
                window.location.reload(true);
            }
            else{
                showStatus(response.data['status'], response.data['message']);
            } 
        });
    }

    return(
    <div id="container">
        <div id="loginform">
        <h2 id="headerTitle">Login Form</h2>
        <form onSubmit={handleSubmit}>
        <div class="row">
            <label>Email</label>
            <input description="email" name="email" placeholder="Enter your email" type="email" onChange={handleChange} required/>
        </div>
        <div class="row">
            <label>PassWord</label>
            <input description="Password" name="password" placeholder="Enter your password" type="password" onChange={handleChange} required/>
        </div>
        <div id="button" class="row">
        <button>Submit</button>
        </div>
        </form>
        </div>
    </div>
    );
}