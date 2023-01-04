import React from "react";
import { useState } from "react"

const QX60Q4 = () => {
    const [bool, setBool] = useState(false); 
    function Handleclick(e){
        if(e === 'option1'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            setBool(true);
        }

        if(e === 'option2'){
            document.getElementById(e).style.background = "black";
            document.getElementById(e).style.color = "white";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
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
            <p style={{fontSize: '15px', marginTop: '10px'}}>Manual sliding seats can increase cargo space or increase legroom for 2nd row occupants?</p>
        </div>

        <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
            <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '80%'}} id='slotparent'>
                <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"170px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>True</button>
                <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"170px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>False</button>
            </div>

            <button className="grab" style={{width:"220px", marginTop: '40px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}}>NEXT</button>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>
        </div>
    </div>
)
}

export default QX60Q4