import React from "react";
import login from "../admin/Assets/login.jpg"
export default function Login() {
  return (
    <div>
      <div>
        
       <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
<div>

  <img src={login} alt="skajdkjlk"  className="w-100"/>
</div>
          </div>
          <div className="col-md-6"> <main className="form-signin w-75 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
         
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main></div>
        </div>
       </div>
      </div>
    </div>
  );
}
