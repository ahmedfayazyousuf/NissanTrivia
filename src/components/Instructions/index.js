import NissanLogo from '../Z_Images/nissanlogo.png';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const Instructions = () => {

    const buttonRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    function Handleclick(e){
        if(e === 'option1'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "black";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
        }

        if(e === 'option2'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option3').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
        }

        if(e === 'option3'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
        }

        if(e === 'option4'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "black";
        }
    }

    function handleSubmit(){

        var Loc = location.state.Loc;
        var id = location.state.id;
        var time = new Date();
        if (Loc === '1'){

            var qn = [1,2,3,4,5,6];

            var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/InfinitiGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"Q50",id:id,time:time}})
            }
        }

        if (Loc === '2'){

            var qn = [1,2,3,4,5,6];

            var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/InfinitiGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"Q60",id:id,time:time}})
            }
        }

        if (Loc === '3'){

            var qn = [1,2,3,4,5,6];

            var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/InfinitiGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"QX50",id:id,time:time}})
            }
        }

        if (Loc === '4'){

            var qn = [1,2,3,4,5,6];

            var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/InfinitiGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"QX55",id:id,time:time}})
            }
        }

        if (Loc === '5'){

            var qn = [1,2,3,4,5,6];

            var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/InfinitiGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"QX60",id:id,time:time}})
            }
        }

        if (Loc === '6'){

            var qn = [1,2,3,4,5,6];

            var no = Math.floor(Math.random() * ((5-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/InfinitiGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"QX80",id:id,time:time}})
            }
        }

        if(Loc === '7'){
            var qn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/NissanGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"Altima",id:id,time:time}})
            }
        }

        if(Loc === '8'){
            var qn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/NissanGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"Patrol",id:id,time:time}})
            }
        }

        if(Loc === '9'){
            var qn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/NissanGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"Pathfinder",id:id,time:time}})
            }
        }

        if(Loc === '10'){
            var qn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/NissanGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"Kicks",id:id,time:time}})
            }
        }

        if(Loc === '11'){
            var qn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/NissanGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"NissanZ",id:id,time:time}})
            }
        }

        if(Loc === '12'){
            var qn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            var no = Math.floor(Math.random() * ((9-0) - 0 + 1)) + 0;

            if (no !== -1) {
                qn.splice(no, 1);

                console.log(no);

                console.log(qn);

                
                navigate(`/NissanGenericQ${no+1}`,{state:{count:1,qns:qn,score:0,car:"XTrail",id:id,time:time}})
            }
        }


        
    }

return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', textAlign: 'center',backgroundColor: 'white', height: '100vh', width: '100vw', overflowY: 'hidden'}}>
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <img id='head' style={{width: '150px', marginTop: '0px'}} src={NissanLogo} alt="Nissan Logo"/>
        </div>

        <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '100px',}}>

            <button className="grab" style={{width:"220px", marginTop: '40px', marginBottom: '110px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} onClick={handleSubmit}>START</button>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>

        </div>
    </div>
)
}

export default Instructions