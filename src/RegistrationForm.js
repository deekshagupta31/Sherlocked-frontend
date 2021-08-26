
import { Redirect } from 'react-router';
import React, { useState, useContext } from 'react';
// Connect to the context (i.e, global state)

const RegistrationForm = () => {

    // RegistrationForm can go through 5 states
    // states: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsucessful
    const [state, setState] = useState("initial");
    // errorsState is for tracking the validation errors
    const [errorsState, setErrorsState] = useState([]);
    // RegEx (Regular Expressions)
    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const validatePassword = (password) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
        return re.test(password);
    }    
    // Declare undefined variables for the ref props
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let avatarInput;
    let termsAndConditionsCheckbox;   

    const formData = new FormData();
    const attachFile=(evt)=>{
        //create array to attach multiple files
        const files=Array.from(evt.target.files);
        //for each attachment, append the file to formData
        files.forEach((fileAttachment,index)=>{
            formData.append(index,fileAttachment);
        });
    }

    const register = () => {


        const errors = [];
        
        // 1. Validate all of the required fields
        if( firstNameField.value.length === 0 ) {
            errors.push("Please enter your first name");
        }
        if( lastNameField.value.length === 0 ) {
            errors.push("Please enter your last name");
        }
        if(validateEmail(emailField.value)=== false) {
            errors.push("Please enter valid email");
        }
        if(passwordField.value.length === 0 ) {
            errors.push("Please enter valid password");        
        }
        if( termsAndConditionsCheckbox.checked === false ) {
            errors.push("Please accept the terms & conditions");
        }
        
        

        // 1.1 If there are errors, set the state to "validationFailed"
        if(errors.length > 0) {
            setState("validationFailed");
            setErrorsState(errors);
        }

        // 1.2 If there are no errors, set the state to "loading"
        else {
            setState("loading");
            setErrorsState([]);
            // 2.1 If the submission is successful, set state to "successful"
            
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            console.log(formData);
            fetch(
                `${process.env.REACT_APP_BACKEND}/users/create`,
                {
                    method: 'POST',
                    body: formData
                }
            )


                .then(
                    (backendResponse) => backendResponse.json())


                .then(
                (theJson) => {
                    console.log(theJson);
                    if(theJson.status === "successful") {
                    setState("successful");
                    }
                    else{
                        setState("unsuccessful");
                    }
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    setState("unsuccessful");
                }
            );
            // 2.2 If the submission is successful, set state to "unsucessful"
        }

    }

    return (
        <div className="container" style={{"marginTop": "5em", "maxWidth": "40em","fontFamily":"cursive"}}>
            <img style ={{"width":"100px", "height":"100px"}} src="./CaptureLogo.png"/>
            <br/><br/>
            <h1>READY TO BE SHERLOCKED !</h1>
            <br/>

            <label>First Name *</label>
            <input ref={(element)=>{ firstNameField =  element}} className="field form-control" name="firstName" type="text" />
            <br/>
            <label>Last Name *</label>
            <input ref={(element)=>{ lastNameField =  element}} className="field form-control" name="lastName" type="text" />
            <br/>
            <label>Email Id *</label>
            <input ref={(element)=>{ emailField =  element}} className="field form-control" name="email" type="text" />
            <br/>
            <label>Password *</label>
            <input ref={(element)=>{ passwordField =  element}} className="field form-control" name="password" autocomplete="off" type="password" />
            <br/>
          

            <label>Upload Profile Picture</label>
            <input ref={(element)=>{ avatarInput = element}}  onChange={attachFile} className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/>

            <label>Do You Agree To Terms &amp; Conditions? * </label>
            <input ref={(element)=>termsAndConditionsCheckbox = element} className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            {
                state !== "loading" &&
                <div>
                    <button 
                    onClick={register}
                    className="btn btn-primary"
                    style={{"padding": "10px", "font-size": "16px"}}><img style ={{"width":"50px", "height":"50px" ,"paddingRight":"20","paddingLeft":"20"}} src="./icons8-save-64.png"/>Register
                    </button><br/><br/>
                </div>
            }

            {
                state === "validationFailed" &&
                <div className="alert alert-danger">

                    <ul>
                        {
                            errorsState.map(
                                (error) => {
                                    return <li>{error}</li>
                                }
                            )
                        }
                    </ul>

                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success">You have a successfully created an account</div>&&
                <Redirect to='/login' />
                
            }

            {
                  state === "unsuccessful" &&
                  <div className="alert alert-success">An error occured. Please try again.</div>
            }

            {
                state === "loading" &&
                <p>Loading...</p>
            }
        </div>
    )
};

export default RegistrationForm;