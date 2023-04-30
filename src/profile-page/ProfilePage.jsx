import "./css/ProfilePage.css";
import {  useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ProfilePage() {

  const navigate = useNavigate();

  const[input, setInputs] = useState([]);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

function getUsers() {
	const id = localStorage.getItem('eSaveri-id');
    axios.put(`http://localhost/eSavari/users/info-user.php?id=${id}`).then(function(response) {
      console.log(response.data);
      setInputs(response.data);
  });
}


const handleChange = (event) => {

  const name = event.target.name;
  const value = event.target.value;

  setInputs(values => ({...values, [name]: value}));

}

// const handleSubmit = (event) => {
//   event.preventDefault();
  
//   axios.post(`http://localhost/eSavari/users/edit-user.php`, input).then(function(response){
//       console.log(response.data);
//       navigate('/profile');
//       window.location.reload();
//   });
// }

  function logout(){
    localStorage.removeItem('eSavari-loggedin');
    localStorage.removeItem('eSavari-id');
    navigate('/');
    window.location.reload(true);
  }

  return (
    <>
    { 
        (localStorage.getItem("eSavari-loggedin")) ? <> 
        <section class="py-5 my-5">
		<div class="container">
			<h1 class="mb-5">Account Settings</h1>
			<div class="bg-white shadow rounded-lg d-block d-sm-flex">
				<div class="profile-tab-nav border-right">
					<div class="p-4">
						<div class="img-circle text-center mb-3">

							{/* <img src="" alt="Image" class="shadow"/> */}

						</div>
						<h4 class="text-center">{input.name}</h4>
					</div>
					<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i class="fa fa-home text-center mr-1"></i> 
							Account
						</a>
            <a class="nav-link" id="logout-tab" data-toggle="pill" href="#logout" role="tab" aria-controls="logout" aria-selected="false" onClick={logout}>
							<i class="fa fa-sign-out text-center mr-1"></i> 
							Logout
						</a>
					</div>
				</div>
				<div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 class="mb-4">Account Settings</h3>
						<div class="row">
            {/* <form onSubmit={handleSubmit}> */}
							<div class="col-md-6">
								<div class="form-group">
								  	<label>Name</label>
								  	<input type="text" class="form-control" name="name" value={input.name} onChange={handleChange} required/>
                    <input type="text" name="id" value={input.id} onChange={handleChange} required hidden/>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
								  	<label>Email</label>
								  	<input type="text" class="form-control" name="email" value={input.email} onChange={handleChange} required/>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
								  	<label>Phone number</label>
								  	<input type="text" class="form-control" maxLength="10" name="phoneNumber" value={input.phoneNumber} onChange={handleChange} required/>
								</div>
							</div>
              {/* <button>Submit</button>
              </form> */}
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
      </> : <><div className="signedOut"><h1>Login To See</h1></div></>
    }
    </>
  );
}