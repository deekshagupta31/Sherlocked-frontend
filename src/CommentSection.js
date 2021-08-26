import { useState } from 'react';
import React, { useContext } from 'react';
import {UserContext} from './UserContext';

function CommentSection(){
    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);
    const [state, setState] = useState("nocomment");
    const [errorsState, setErrorsState] = useState([]);
    const formData = new FormData();
    let selectedSeasonField;
    let commentField;   
    const onClickForComment=()=>{
        const errors=[];
        if(selectedSeasonField.value.length===0){
            errors.push("Please select season and episode");
        }
        if(commentField.value.length===0){
            errors.push("Please write a comment");
        }
        if(errors.length>0){
            setState("validationFailed");
            setErrorsState(errors);
        }
        else{
            setState("submitting");
            setErrorsState([]);
            formData.append('seasonDetail', selectedSeasonField.value);
            formData.append('comment', commentField.value.trim);
            formData.append('email', email);
            fetch(
                `${process.env.REACT_APP_BACKEND}/userscomment/create`,
                {
                    method: 'POST',
                    body: formData
                }
                )
                .then(
                    (backendResponse) => backendResponse.json()
                )
                .then(
                (backendResponse) => {
                    console.log(backendResponse);
                    if(backendResponse.status === "successful") {
                    setState("successful");
                    }
                    else{
                        setState("unsuccessful");
                    }
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                    setState("unsuccessful");
                }
            )
            // 2.2 If the submission is successful, set state to "unsucessful"
        }       
    };    
    return(
        <div className="px-10 py-10 mx-10 my-10"  style={{"padding": "10px", "font-size": "16px"}}>
            <div className="row g-2 ">
            <div className="col-md">
                <div className="form-floating">
                <select ref={(element)=>{ selectedSeasonField =  element}} className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                    <option selected value="Season 1- Episode 1">Season 1- Episode 1</option>
                    <option value="Season 1- Episode 2">Season 1- Episode 2</option>
                    <option value="Season 1- Episode 3">Season 1- Episode 3</option>
                    <option value="Season 2- Episode 1">Season 2- Episode 1</option>
                    <option value="Season 2- Episode 2">Season 2- Episode 2</option>
                    <option value="Season 2- Episode 3">Season 2- Episode 3</option>
                    <option value="Season 3- Episode 1">Season 3- Episode 1</option>
                    <option value="Season 3- Episode 2">Season 3- Episode 2</option>
                    <option value="Season 3- Episode 3">Season 3- Episode 3</option>
                    <option value="Special- Many Happy Returns">Special- Many Happy Returns</option>
                    <option value="Special-  The Abominable Bride">Special-  The Abominable Bride</option>
                </select>
                <label for="floatingSelectGrid">Select Season- Episode *</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating">
                <textArea ref={(element)=>{ commentField =  element}} className="form-control" placeHolder="Leave a comment here" id="floatingTextarea2" style={{"height": "58px"}}></textArea>
                 <label for="floatingTextarea2">Comments</label>
                </div>
            </div>  
            </div>
            <br/>
            <div>
            {
                state !== "submitting" &&
                <div>
                    <button 
                    onClick={onClickForComment}
                    className="btn btn-outline-danger"
                    style={{"padding": "10px", "font-size": "16px"}}><img style ={{"width":"50px", "height":"50px"}} src="./icons8-comments-50.png"/>
                        Submit
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
                  state === "unsuccessful" &&
                  <div className="alert alert-success">An error occured. Please try again.</div>
            }
            {
                state === "successful"  &&
                <div className="alert alert-success">Thanks ! Hope Sherlock Likes The Comments</div>
            }

            {
                state === "submitting" &&
                <p>Submitting...</p>
            }
            </div>
        </div>
    );
}
export default CommentSection;