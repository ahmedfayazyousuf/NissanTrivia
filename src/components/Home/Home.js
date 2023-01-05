import React from 'react';
import NissanLogo from '../Z_Images/nissanlogo.png'
import HowWell from '../Z_Images/howwell.png'
import GetReady from '../Z_Images/getreadytoexplorewhite.png'
import '../Z_Styles/Nissan.css'
import firebase from '../../firbase';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => { 

    const buttonRef = useRef(null);
    const navigate = useNavigate();
    const [emailB, setEmailB] = useState(false);    
    
    const [agree, setAgree] = useState(false)

    function CheckData(){

        const Email = document.getElementById("email").value;
        const Loc = document.getElementById("loccode").value;
        const Users = firebase.firestore().collection("Users");
        const CarUsers = firebase.firestore().collection("CarUsers");

        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (Email === "" || !Email.match(validRegex))
        {
            if(emailB === false){
                const el = document.createElement("p");
                const name = document.getElementById('loccode')
                el.id = "emailerr"
                el.style.color = "red";
                el.style.fontSize = "10px";
                el.innerHTML = "Invalid Email"
                name.appendChild(el);
                setEmailB(true)
            }
            console.log("lessgooo")
            return;
        }

        if (Loc === "" ){
            return;
        }

        if(agree === false){
            return;
        }
        

        

        CarUsers.add({Email:Email, Code:Loc}).then((doc)=>{
            var id = doc.id;
            var time = new Date();
            let Loc2 = Loc.slice(0,-1);

            var last = Loc.slice(-1);

            if(last !== "J"){
                console.log("lol",last)
                if(last !== "j"){
                    console.log("lol",last)
                        
                    if(last !== "N"){
                        console.log("lol",last)
                        if(last !== "n"){

                            console.log("lol",last)

                            if(last !== "P"){
                                if(last !== "p"){
                                    return;
                                }
                            }
                            
                        }
                    }
               
                }

            }



            
            if (Loc2 === '84229'){

                var qn = [2,3,4,5,6];
    
                var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/InfinitiGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Q50",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if (Loc2 === '84232'){
    
                var qn = [2,3,4,5,6];
    
                var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/InfinitiGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Q60",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if (Loc2 === '70913' || Loc2 === '84922' || Loc2 === '80592' || Loc2 === '39512' || Loc2 === '17834'){
    
                var qn = [2,3,4,5,6];
    
                var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/InfinitiGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"QX50",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if (Loc2 === '18026' || Loc2 === '16798'){
    
                var qn = [2,3,4,5,6];
    
                var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/InfinitiGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"QX55",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if (Loc2 === '488451' || Loc2 === '84819'){
    
                var qn = [2,3,4,5,6];
    
                var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/InfinitiGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"QX60",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if (Loc2 === '20164' || Loc2 === '81037'){
    
                var qn = [2,3,4,5,6];
    
                var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/InfinitiGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"QX80",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if(Loc2 === '92079' || Loc2 === '75321' || Loc2 === '75319' ){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Altima",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if(Loc2 === '57721' || Loc2 === '27802' || Loc2 === '74529'){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Patrol",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if(Loc2 === '61170'){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Pathfinder",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if(Loc2 === '96430'){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Kicks",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if(Loc2 === '97035'){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"NissanZ",id:id}})
                }
                buttonRef.current.disabled = true;
            }
    
            if(Loc2 === '74925'){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"XTrail",id:id}})
                }

                buttonRef.current.disabled = true;
            }

            if(Loc2 === '75297' || Loc2 === '75291'){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Maxima",id:id}})
                }

                buttonRef.current.disabled = true;
            }

            if(Loc2 === '84418'){
                var qn = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
                var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
    
                if (no !== -1) {
                    // qn.splice(no, 1);
    
                    console.log(no);
    
                    console.log(qn);
    
                    
                    navigate(`/NissanGenericQ${1}`,{state:{count:1,qns:qn,score:0,car:"Nismo370Z",id:id}})
                }

                buttonRef.current.disabled = true;
            }


            // navigate(`/Instructions`,{state:{id:id,Loc:Loc2}});
        });

       

        


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

    function handleChange(){
        setAgree(!agree)
        console.log(agree)
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
                        <input type="email" id='email' placeholder='ENTER YOUR COMPANY REGISTERED EMAIL' style={{width:"280px", height: '30px', textAlign: 'center', fontSize: '10px'}} />
                        <input type="loccode" id="loccode" placeholder='ENTER LOCATION CODE (ENTERED BY MARSHAL)' style={{width:"280px", height: '30px', textAlign: 'center', fontSize: '10px'}} /> 
                        <button ref={buttonRef} className="grab" style={{width:"200px", height: '35px', marginTop: '20px', margin: '10px', borderRadius: '10px', backgroundColor: 'white'}} onClick={CheckData}>LET'S PLAY</button>
                </div>

                <div className="form-check" id="checkthreewrap" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                    <input className="form-check-input" id="checkthree" type="checkbox" value="" style={{backgroundColor: '#061A1B', borderColor: 'white', Size: '8px'}} onChange={handleChange} required/>
                    <label className="form-check-label" style={{fontSize: '8px', color:'white'}}>Signed the Disclaimer Forms.</label>
                </div>

                <div>
                    <img id='head' style={{width: '150px', marginTop: '45px', marginBottom: '80px'}} src={GetReady} alt="How Well"/>
                </div>

            </div>
        </div>
    )
}

export default Home