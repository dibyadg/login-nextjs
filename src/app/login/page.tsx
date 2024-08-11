"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./login.module.css"




const Login: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name:"",
  });

  const onLogin = async() =>{

  }

    return(     
    <div className={styles.container}>
      <h2 className="text-center text-3xl p-4">Login Form</h2>
      <form className="m-40">
      
        <div className="mb-5">
        <label htmlFor="email" className="m-1">Email</label>
        <br />
          <input type="text" className="text-black" id="email" value={user.email} onChange={(e)=>{
            setUser({...user,email:e.target.value}) 
          }} />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="mr-4" >Password</label>
          <br />
        <input type="password" className="text-black" id="password" value={user.password} onChange={(e)=>{
          setUser({...user,password:e.target.value})
        }} />
        </div>
        <button type="submit" className="bg-red-100 text-black p-2 rounded mb-4">Login</button>
        <br/>
        <Link href="/signup" className="border text-xl p-1 rounded">Visit Signup Page</Link>
      </form>

    </div>
        
    );
}
export default Login
