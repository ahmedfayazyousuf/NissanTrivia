import React from 'react';
import NissanLogo from '../Z_Images/nissanlogo.png'
import HowWell from '../Z_Images/howwell.png'
import GetReady from '../Z_Images/getreadytoexplorewhite.png'
import '../Z_Styles/Nissan.css'
const Home = () => { 

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
                        <input type="email" id='email' placeholder='ENTER YOUR EMAIL' style={{width:"250px", height: '35px', textAlign: 'center', fontSize: '10px'}} />
                        <input type="loccode" id="loccode" placeholder='ENTER LOCATION CODE' style={{width:"250px", height: '35px', textAlign: 'center', fontSize: '10px'}} /> 
                    <button className="grab" style={{width:"200px", height: '35px', marginTop: '20px', margin: '10px', borderRadius: '10px', backgroundColor: 'white'}}>LET'S PLAY</button>
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