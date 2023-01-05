import React from "react";
import { useState } from "react"
import '../../../../Z_Styles/Nissan.css'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const NissanGenericQ14 = () => {
        const location = useLocation();
        const navigate = useNavigate();
        const [bool, setBool] = useState(false); 
        function Handleclick(e){

            

            if(e === 'option1'){
                document.getElementById(e).style.background = "black";
                document.getElementById(e).style.color = "white";
                document.getElementById('option2').style.background = "transparent";
                document.getElementById('option2').style.color = "black";
                setBool(false);
            }

            if(e === 'option2'){
                document.getElementById(e).style.background = "black";
                document.getElementById(e).style.color = "white";
                document.getElementById('option1').style.background = "transparent";
                document.getElementById('option1').style.color = "black";
                setBool(true);
            }
        }

        function handleSubmit(){



            if(bool === false){
                if(location.state.count === 3){

                    var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
                    var qn = [1,2,3,4,5,6,7,8,9,10];
                    var n = qn[no]
                    if (no !== -1) {
                        qn.splice(no, 1);

                        console.log(no)
                        console.log(qn)

                        navigate(`/${location.state.car}Q${n}`,{state:{count:1,qns:qn,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
                    }        
                
            }

            else{
                var no = Math.floor(Math.random() * (((14- location.state.count)-0) - 0 + 1)) + 0;
                var qn = location.state.qns;
                var n = qn[no]
                if (no !== -1) {
                    qn.splice(no, 1);
                }

                console.log(no)
                console.log(qn)

                navigate(`/NissanGenericQ${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
            }
            }

            else{

                if(location.state.count === 3){

                    var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;
                    var qn = [1,2,3,4,5,6,7,8,9,10];
                    var n = qn[no]
                    if (no !== -1) {
                        qn.splice(no, 1);

                        console.log(no)
                        console.log(qn)

                        navigate(`/${location.state.car}Q${n}`,{state:{count:1,qns:qn,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
                    }        
                
            }

            else{
                var no = Math.floor(Math.random() * (((14- location.state.count)-0) - 0 + 1)) + 0;
                var qn = location.state.qns;
                var n = qn[no]
                if (no !== -1) {
                    qn.splice(no, 1);
                }

                console.log(no)
                console.log(qn)

                navigate(`/NissanGenericQ${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
            }

            }
            
        }
    
    return(
        <div style={{backgroundColor: 'white', height: '100vh', width: '100vw', overflowY: 'hidden'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Ftrivia.png?alt=media&token=a5975b8d-fd68-46ae-a90d-9acc6322df7f" alt="Logo" style={{width: '250px', marginTop: '60px', marginBottom: '20px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                <p style={{fontSize: '15px', marginTop: '5px'}}>Mr Smit, a manager in the Marketing department usually avoids bad news or criticism since he only wants to show & discuss positive about Nissan. Does this behaviour demonstrate principles of Nissan Way?</p>
            </div>

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', overflowX: 'hidden'}}>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '70%', overflowX: 'hidden'}} id='slotparent'>
                    <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"260px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Yes</button>
                    <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"260px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>No</button>
                </div>

                <button className="grab" style={{width:"220px", marginTop: '10px', marginBottom: '5px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} onClick={handleSubmit}>NEXT</button>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '5px', marginBottom: '10px'}}/>
                </div>
            </div>
        </div>
    )
}

export default NissanGenericQ14