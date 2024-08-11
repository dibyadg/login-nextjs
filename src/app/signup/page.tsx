"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./signup.module.css"



const Signup: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name:"",
  });

  const onSignup = async() =>{

  }

    return(     
    <div className={styles.container}>
      <h2 className="text-center text-3xl p-10">Signup Form</h2>
      <form className="m-40">
        <div className="mb-5">
          <label htmlFor="username" className="m-1">Username</label>
          <br />
          <input type="text" className={styles.inputtext} id="name" value={user.name} onChange={(e)=>{
            setUser({...user,name:e.target.value}) 
          }} />
        </div>
        <div className="mb-5">
        <label htmlFor="email" className="m-1">Email</label>
        <br />
          <input type="text" className={styles.inputtext} id="email" value={user.email} onChange={(e)=>{
            setUser({...user,email:e.target.value}) 
          }} />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="mr-4" >Password</label>
          <br />
        <input type="password" className={styles.inputtext} id="password" value={user.password} onChange={(e)=>{
          setUser({...user,password:e.target.value})
        }} />
        </div>
        <button type="submit" className="bg-red-100 text-black p-2 rounded mb-4">Submit</button>
        <br/>
        <Link href="/login" className="border text-xl p-1 rounded">Visit Login Page</Link>
      </form>

    </div>
        
    );
}
export default Signup
