import React from "react";

import Test from "../components/homepage/atoms/test"
import useModal from "../functions/useModal";
import Login from "../components/homepage/molecules/login_form";
import Signup from "../components/homepage/molecules/signup_form";


const IndexPage = () => {
  const [isShowingSignup, toggleSignup] = useModal();
  const [isShowingLogin, toggleLogin] = useModal();

  const showSignup = () => {
    toggleSignup();
    toggleLogin();
  }
  const showLogin = () => {
    toggleLogin();
    toggleSignup();
  }

  return(
    <div>
      <h1>Landing Pages</h1>
      <Test></Test>
      <Login isShowing={isShowingLogin} showSignup={showSignup} hide={toggleLogin}/>
      <Signup isShowing={isShowingSignup} showLogin={showLogin} hide={toggleSignup}/>
      <button onClick={toggleSignup}>Signup</button>
      <button onClick={toggleLogin}>Login</button>
    </div>
  )
}

export default IndexPage
