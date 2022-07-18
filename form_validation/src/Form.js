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

    const submitHandler = () => {
        // let temp = 0;
        // let fname = document.getElementById('fname').value;
        // let lname = document.getElementById('lname').value;

        // let dob = document.getElementById('dob').value;

      

        // let siblings = document.getElementById('siblings').value;

        // let f_fname = document.getElementsByClassName('f_fname').value;
        // let f_lname = document.getElementsByClassName('f_lname').value;
        // let f_quali = document.getElementsByClassName('f_quali').value;
        // let f_num = document.getElementById('f_num').value;
        // let f_email = document.getElementsByClassName('f_email').value;
        // let f_occupation = document.getElementsByClassName('f_occupation').value;

        // let m_fname = document.getElementsByClassName('m_fname').value;
        // let m_lname = document.getElementsByClassName('m_lname').value;
        // let m_quali = document.getElementsByClassName('m_quali').value;
        // let m_num = document.getElementById('m_num').value;
        // let m_email = document.getElementsByClassName('m_email').value;
        // let m_occupation = document.getElementsByClassName('m_occupation').value;

        // let address = document.getElementById('address').value;
        // let gender = '';
        // if(document.getElementById('male').checked) gender = 'male';
        // else if(document.getElementById('female').checked)  gender = 'female';

        // console.log(gender);
        
        // if(
        //     fname === '' ||
        //     lname === '' ||
        //     dob === '' ||
        //     gender === '' ||
        //     siblings === '' ||
        //     f_fname === '' ||
        //     f_lname === '' ||
        //     f_quali === '' ||
        //     f_occupation === '' ||
        //     f_num === '' ||
        //     f_email === '' ||
        //     m_quali === '' ||
        //     m_email === '' ||
        //     m_fname === '' ||
        //     m_lname === '' ||
        //     m_num === '' ||
        //     m_occupation === '' ||
        //     address === ''
        // )   temp = 0;
        // else temp =1;
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
          <form action='#'>
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

                <button onInvalid={notValid} required type='submit' onClick={submitHandler}>Submit</button>
            </form>
            

      </div>
    )
  
}

export default Form