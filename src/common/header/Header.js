import { Button } from "@material-ui/core";
import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import './Header.css';
import logo from '../../assets/logo.svg';

 function  Header(){
   const[login,setLogin] = useState(false);

   function handleLogin(){
       setLogin(!login);
   }
        return(

            <div className="header">
                <img id="logo" src= {logo} alt="logo"/>
                <Button variant="contained" color="default" onClick={handleLogin}>{login ? "LOGOUT" : "LOGIN"}</Button>
            </div>
        );
    
}
export default Header;