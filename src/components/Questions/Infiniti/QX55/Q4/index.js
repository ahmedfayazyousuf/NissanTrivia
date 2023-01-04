import React from "react";
import { useState } from "react"
const QX55Q4 = () => {

    const [bool, setBool] = useState(false); 

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
            setBool(true);
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
            setBool(false);
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
            setBool(false);
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
            setBool(false);
        }
    }

    function handleSubmit(){
        if(bool === false){

        }

        else{

        }
    }

        return(
            <div style={{backgroundColor: 'white', height: '100vh', width: '100vw', overflowY: 'hidden'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Ftrivia.png?alt=media&token=a5975b8d-fd68-46ae-a90d-9acc6322df7f" alt="Logo" style={{width: '250px', marginTop: '60px', marginBottom: '20px'}}/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                    <p style={{fontSize: '15px', marginTop: '10px'}} >Which features are newly available on the QX60 vs. previous generation?</p>
                </div>

                <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', overflowX:'hidden'}}>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '70%', overflowX:'hidden'}} id='slotparent'>
                    <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"260px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Within the centre of the rear brand logo badge</button>
                    <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"260px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Within the left tail light</button>
                    <button className="grab" id="option3" onClick={() => {Handleclick("option3")}} value="option3" style={{width:"260px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Within the right tail light</button>
                    <button className="grab" id="option4" onClick={() => {Handleclick("option4")}} value="option4" style={{width:"260px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>Within the rear bumper</button>
                </div>

                <button className="grab" style={{width:"220px", borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab', marginTop: '15px'}}>NEXT</button>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '30px', marginBottom: '10px'}}/>
                </div>
            </div>
            </div>
        )
}

export default QX55Q4