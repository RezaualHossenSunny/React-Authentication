import React, { useState } from "react";
import { Link } from "react-router-dom";

const Singup = () => {

  const [name,Setname]=useState('')
  const [email,Setemail]=useState('')
  const [password,Setpassword]=useState('')
  const [err,Seterr]=useState('')

  const handlesubmit =()=>{
    if(!name && !email  && !password){
      Seterr('plase Fii The From')
    
    }else{
      Seterr('')
    }
  }
  return (
    <div className="mt-36">
      <div className="w-[450px]  border-4  mx-auto  p-2">
        <h1 className=" text-center py-2  text-2xl font-semibold font-mono">
          Create Account
        </h1>
        <input 
          onChange={(e)=> Setname(e.target.value)}
          className="w-full outline-none border-2 border-gray  p-2 "
          type="text"
          placeholder="enter  your name"
        />
        <input
          className="w-full outline-none border-2 border-gray  p-2 mt-2"
          type="email"
          placeholder="enter  your email"
        />
        <input
          className="w-full outline-none border-2 border-gray  p-2 mt-2"
          type="passwword"
          placeholder="enter  your password"
        />
        <p className="mt-2 p-2 font-bold text-red-700  ">{err}</p>
        <button onClick={handlesubmit} className="mt-2 w-full  py-4 px-4 text-center border-2 text-xl font-bold font-mono  text-black bg-gray-400">
          Submit
        </button>

        <div className="mt-2">
        <Link className=" w-full font-bold text-sm text-orange-400 " to='/login'> You Have Alredy Account  ? Singin</Link>
        </div>
      </div>
    </div>
  );
};

export default Singup;
