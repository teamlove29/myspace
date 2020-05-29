import React, { useState } from "react";



// const initialValues = {
//     email: "admin@demo.com",
//     password: "demo",
//   };



export default function Login(props) {

  const [name, setName] = useState("");

  function hendleonChange(e) {
    setName(e.target.value);
  }

  function hendleonSubmit(e) {
    e.preventDefault();
      console.log('test');
    //   this.props.history.push('/login');
    //   this.props.history.push('/Dashboard')
    // e.reventDefault()
    // console.log('test');
    
    // localStorage.setItem('access-token', true)
    // this.props.history.push('/Dashboard')
  }

  return (
    <div className="d-flex flex-column flex-root">
    {/*begin::Main*/}

{/*begin::Login*/}
<div className="login login-1 login-signin-on d-flex flex-row-fluid" id="kt_login">
<div className="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid" style={{backgroundImage: 'url(assets/media/bg/bg-1.jpg)'}}>
<div className="login-form text-center text-white p-7 position-relative overflow-hidden">
  {/*begin::Login Header*/}
  <div className="d-flex flex-center mb-15">
    <a href="#">
      <img src="assets/media/logos/logo-letter-9.png" className="max-h-100px" alt />
    </a>
  </div>
  {/*end::Login Header*/}
  {/*begin::Login Sign in form*/}
  <div className="login-signin">
    <div className="mb-20">
      <h3>Sign In To Admin</h3>
      <p className="opacity-60 font-weight-bold">Enter your details to login to your account:</p>
    </div>
    <form className="form" id="kt_login_signin_form">
      <div className="form-group">
        <input 
        onChange={hendleonChange}
        className="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8 mb-5" type="text" placeholder="Email or Username" name="" autoComplete="off" />
      </div>
      {/* ทดสอบ  */}
  <h1>{JSON.stringify({name})}</h1>
  <br/>
   {/* ทดสอบ  */}
      <div className="form-group">
        <input className="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8 mb-5" type="password" placeholder="Password" name="password" />
      </div>
      <div className="form-group d-flex flex-wrap justify-content-between align-items-center px-8">
        <label className="checkbox checkbox-outline checkbox-white text-white m-0">
          <input type="checkbox" name="remember" />Remember me
          <span /></label>
        <a href="javascript:;" id="kt_login_forgot" className="text-white font-weight-bold">Forget Password ?</a>
      </div>
      <div className="form-group text-center mt-10">
        <button id="kt_login_signin_submit" className="btn btn-pill btn-outline-white font-weight-bold opacity-90 px-15 py-3">Sign In</button>
      </div>
    </form>
    <div className="mt-10">
      <span className="opacity-70 mr-4">Don't have an account yet?</span>
      <a href="javascript:;" id="kt_login_signup" className="text-white font-weight-bold">Sign Up</a>
    </div>
  </div>
  {/*end::Login Sign in form*/}
  {/*begin::Login Sign up form*/}
  <div className="login-signup">
    <div className="mb-20">
      <h3>Sign Up</h3>
      <p className="opacity-60">Enter your details to create your account</p>
    </div>
    <form className="form text-center" id="kt_login_signup_form">
      <div className="form-group">
        <input className="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8" type="text" placeholder="Fullname" name="fullname" />
      </div>
      <div className="form-group">
        <input className="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8" type="text" placeholder="Email" name="email" autoComplete="off" />
      </div>
      <div className="form-group">
        <input className="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8" type="password" placeholder="Password" name="password" />
      </div>
      <div className="form-group">
        <input className="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8" type="password" placeholder="Confirm Password" name="cpassword" />
      </div>
      <div className="form-group text-left px-8">
        <label className="checkbox checkbox-outline checkbox-white text-white m-0">
          <input type="checkbox" name="agree" />I Agree the
          <a href="#" className="text-white font-weight-bold">terms and conditions</a>.
          <span /></label>
        <div className="form-text text-muted text-center" />
      </div>
      <div className="form-group">
        <button id="kt_login_signup_submit" className="btn btn-pill btn-outline-white font-weight-bold opacity-90 px-15 py-3 m-2">Sign Up</button>
        <button id="kt_login_signup_cancel" className="btn btn-pill btn-outline-white font-weight-bold opacity-70 px-15 py-3 m-2">Cancel</button>
      </div>
    </form>
  </div>
  {/*end::Login Sign up form*/}
  {/*begin::Login forgot password form*/}
  <div className="login-forgot">
    <div className="mb-20">
      <h3>Forgotten Password ?</h3>
      <p className="opacity-60">Enter your email to reset your password</p>
    </div>
    <form className="form" id="kt_login_forgot_form">
      <div className="form-group mb-10">
        <input className="form-control h-auto text-white placeholder-white opacity-70 bg-dark-o-70 rounded-pill border-0 py-4 px-8" type="text" placeholder="Email" name="email" autoComplete="off" />
      </div>
      <div className="form-group">
        <button id="kt_login_forgot_submit" className="btn btn-pill btn-outline-white font-weight-bold opacity-90 px-15 py-3 m-2">Request</button>
        <button id="kt_login_forgot_cancel" className="btn btn-pill btn-outline-white font-weight-bold opacity-70 px-15 py-3 m-2">Cancel</button>
      </div>
    </form>
  </div>
  {/*end::Login forgot password form*/}
</div>
</div>
</div>
{/*end::Login*/}

{/*end::Main*/}

  </div>
  );
}