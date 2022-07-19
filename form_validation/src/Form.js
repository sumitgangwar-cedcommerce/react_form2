import React, { Component } from 'react'
import './App.css'
import { useState } from 'react';

function Form(){

    const [counter , setCounter] = useState(1);
    if(counter===0) {
        document.getElementById('res').innerHTML = "";
        setCounter(1);
    }

    const notValid = ()=>{
        setCounter(0);  
    }

    const submitHandler = (e) => {
        e.preventDefault();
      
        
        if(counter) document.getElementById('res').innerHTML = '<h1 style="color:green">Successful</h1>'
        
    }
    const number_handler = (e) =>{
      
        let val = e.target.value;
        let c = e.target.id;
        if(val.length === 3) document.getElementById(c).value+=' '; 
        if(val.length === 7) document.getElementById(c).value+=' ';
        
        console.log( document.getElementById(c).value)
    }



    return (
      <div id="main">
          <div id='res'></div>
          <form action='#' onSubmit={submitHandler}>
                <h1>Student Registration form</h1>

                <p>Name of the Applicant</p>
                <p className='two-inp'>
                    <input type='text' placeholder='First' id='fname' onInvalid={notValid} required></input>
                    <input type='text' placeholder='Last' id='lname' onInvalid={notValid} required></input>
                </p>

                <p>Date of Birth</p>
                <p>
                    <input type="date" placeholder='' id='dob' max='2005-01-01' min='1960-01-01' onInvalid={notValid} required></input>
                </p>

                <p>Gender</p>
                <p><input type="radio" name='gender' id='male' onInvalid={notValid} required></input> Male</p>
                <p><input type="radio" name='gender' id='female' onInvalid={notValid} required></input> Female</p>

                <p>Details of Siblings</p>
                <p><textarea id='siblings' onInvalid={notValid} required></textarea></p>
                
                <h2>Parent's Information</h2>

                <p>Father's name</p>
                <p className='two-inp'>
                    <input required type='text' placeholder='First' className='f_fname' onInvalid={notValid}></input>
                    <input required type='text' placeholder='Last' className='f_lname' onInvalid={notValid}></input>
                </p>

                <p>Father's Qualification</p>
                <p><input required type='text' className='f_quali' onInvalid={notValid}></input></p>

                <p className='email_phone flex-class'>
                    <p>Phone</p>
                    <p>Email</p>
                </p>
                <p className='two-inp'>
                    <input required type="tel" onChange = {number_handler} id='f_num' placeholder='### ### ####' pattern="[0-9]{3} [0-9]{3} [0-9]{4}"></input>
                    <input required type='email' className='f_email' onInvalid={notValid}></input>
                </p>

                <p>Father's Occupation</p>
                <p><input required type='text' className='f_occupation'></input></p>

                <p>Mother's name</p>
                <p className='two-inp'>
                    <input onInvalid={notValid} required type='text' placeholder='First' className='m_fname'></input>
                    <input required type='text' placeholder='Last' className='m_lname'></input>
                </p>

                <p>Mother's Qualification</p>
                <p><input onInvalid={notValid} required type='text' className='m_quali'></input></p>

                <p className='email_phone flex-class'>
                    <p>Phone</p>
                    <p>Email</p>
                </p>
                <p className='two-inp'>
                    <input onInvalid={notValid} required type="tel" onChange={number_handler} id='m_num' placeholder='### ### ####' pattern="[0-9]{3} [0-9]{3} [0-9]{4}"></input>
                    <input onInvalid={notValid} required type='email' className='m_email'></input>
                </p>

                <p>Mother's Occupation</p>
                <p><input onInvalid={notValid} required type='text' className='m_occupation'></input></p>

                <p>Address</p>
                <p><input onInvalid={notValid} required type='text' id='address' placeholder='Street Address'></input></p>

                <button onInvalid={notValid} required type='submit'>Submit</button>
            </form>
            

      </div>
    )
  
}

export default Form
