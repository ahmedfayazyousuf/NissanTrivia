import React from 'react';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import firebase from '../../firbase';

const EnterCode = () => { 

    const navigate = useNavigate();
    const location = useLocation(); 


    async function PostData(){
        var code = document.getElementById('code').value;
        const User = firebase.firestore().collection("Users").doc(`${location.state.uid}`);
        await User.update({Code:code,Enteredtime: firebase.firestore.FieldValue.serverTimestamp()});
    }


    return (
        <>
            <div className="main">
                <div className="form-items">
                    {/* <div style={{justifyContent: 'center', alignItems: 'center'}}>
                        <img id='head' style={{width: '150px'}} src={nislogo} alt="Nissan Laptop Cover"/>
                    </div> */}
                    {/* <h1 className='thankk' style={{fontWeight:'1000', marginTop: '15px'}}>THANK YOU!</h1>
                    <h4 style={{fontSize:'16px'}}>Your response has been recorded.</h4>
                    <h4 style={{fontSize:'16px'}}>You will receive a confirmation email shortly.</h4> */}
                    <label> Enter Code: </label>
                    <input id='code' type="text" />
                    <button onClick={PostData}>Submit</button>

                </div>
            </div>
        </>
    )
}

export default EnterCode