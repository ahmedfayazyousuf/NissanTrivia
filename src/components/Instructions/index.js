import NissanLogo from '../Z_Images/nissanlogo.png';
const Instructions = () => {

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

return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', textAlign: 'center',backgroundColor: 'white', height: '100vh', width: '100vw', overflowY: 'hidden'}}>
        <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <img id='head' style={{width: '130px', marginTop: '0px'}} src={NissanLogo} alt="Nissan Logo"/>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', marginTop: '10px'}} >
            <p className="sss" style={{fontSize: '25px', marginTop: '20px'}} >Instructions</p>
        </div>

        <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '300px',paddingLeft: '0px', paddingTop: '20px', paddingBottom: '20px', border: '2px solid black', borderRadius: '15px'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                    <p>INSTRUCTION INSTRUCTION 1</p>
                    <p>INSTRUCTION INSTRUCTION 1</p>
                    <p>INSTRUCTION INSTRUCTION 1</p>
                    <p>INSTRUCTION INSTRUCTION 1</p>
                </div>
            </div>
            

            <button className="grab" style={{width:"220px", marginTop: '40px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}}>START</button>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>
        </div>
    </div>
)
}

export default Instructions