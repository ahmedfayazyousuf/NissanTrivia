import React from 'react';
import NissanLogo from '../Z_Images/nissanlogo.png'
import HowWell from '../Z_Images/howwell.png'
import GetReady from '../Z_Images/getreadytoexplorewhite.png'
import '../Z_Styles/Nissan.css'
import firebase from '../../firbase';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => { 

    const buttonRef = useRef(null);
    const navigate = useNavigate();

    function CheckData(){
        buttonRef.current.disabled = true;
        const Email = document.getElementById("email").value;
        const Loc = document.getElementById("loccode").value;
        const Users = firebase.firestore().collection("Users");
        const CarUsers = firebase.firestore().collection("CarUsers");

        

        CarUsers.add({Email:Email, Code:Loc});

        if (Loc === 'DXB-R18026'){

            var qn = [1,2,3,4,5,6];

            var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/InfinitiGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"QX55"}})
            }
        }


        // Users.where("Email", "==", Email).get().then((doc)=>{
            
        //     if(doc.empty){
        //         console.log("ayo u aint in here");
        //         return;
        //     }

        //     doc.forEach((doc)=>{

        //         var data = doc.data();
        //         console.log(data)
        //         var timeslot = data.Timeslot;
        //         var timeslot2 = data.Timeslot2;
        //         var timesloth = timeslot.slice(8,10)
        //         var timeslot2h = timeslot2.slice(8,10)

                
        //         console.log();

        //         console.log(timeslot2.slice(8,10));

        //         var current = new Date();

        //         console.log(current.getHours())

        //         console.log(current.getMinutes())

        //         if(parseInt(timesloth) === current.getHours()){
        //             alert("true")
        //         }
        //         else{
        //             if(current.getMinutes()>=30){
        //                 console.log("firsttrue")
        //                 if(current.getHours() === (timesloth-1)){
        //                     alert("secondtrue")
        //                 }
        //                 else{
        //                     alert("error")
        //                 }
        //             }else{
        //                 alert("error")
        //             }
        //         }

        //         console.log("ayo u in here ma boi");
        //         // navigate("/entercode",{state:{uid:doc.id}});
    
        //     })

            
        // })
    }

    return (
        <div>
            
            <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', justifyContent: 'center', alignItems:'center', textAlign: 'center'}}>
                <div style={{justifyContent: 'center', alignItems: 'center'}}>
                    <img id='head' style={{width: '130px', marginTop: '0px'}} src={NissanLogo} alt="Nissan Logo"/>
                </div>

                <div>
                    <img id='head' style={{width: '300px', marginTop: '18px', marginBottom: '100px'}} src={HowWell} alt="How Well"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', width: '350px', gap:'10px', alignItems: 'center'}}>
                        <input type="email" id='email' placeholder='ENTER YOUR EMAIL' style={{width:"220px", height: '25px', textAlign: 'center', fontSize: '8px'}} />
                        <input type="loccode" id="loccode" placeholder='ENTER LOCATION CODE' style={{width:"220px", height: '25px', textAlign: 'center', fontSize: '8px'}} /> 
                    <button ref={buttonRef} className="grab" style={{width:"200px", height: '35px', marginTop: '20px', margin: '10px', borderRadius: '10px', backgroundColor: 'white'}} onClick={CheckData}>LET'S PLAY</button>
                </div>

                <div className="form-check" id="checkthreewrap" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                    <input className="form-check-input" id="checkthree" type="checkbox" value="" style={{backgroundColor: '#061A1B', borderColor: 'white', Size: '8px'}} required/>
                    <label className="form-check-label" style={{fontSize: '8px', color:'white'}}>Agree to terms and conditions.</label>
                </div>

                <div>
                    <img id='head' style={{width: '150px', marginTop: '45px', marginBottom: '80px'}} src={GetReady} alt="How Well"/>
                </div>

            </div>
        </div>
    )
}

export default Home