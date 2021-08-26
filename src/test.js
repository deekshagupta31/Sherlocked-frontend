import React, { useContext } from 'react';
import {UserContext} from './UserContext';


function test(){
  const { firstName, lastName, email, avatar, updateUser,jsonwebtoken } = useContext(UserContext);

  const a=[];
  function x(){
    updateUser.jsonwebtoken=undefined;
    updateUser.useContext=undefined;
    

  }
  return(
   <div >
     Are you sure
     <button onCLick={x}>cc</button>
   </div>
   
    )
}
export default test;