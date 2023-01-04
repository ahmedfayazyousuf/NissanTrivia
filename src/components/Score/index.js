

const Score = () => {

        function Handleclick(e){
            
        }
    
    return(
        <div style={{backgroundColor: 'white', height: '100vh', width: '100vw', overflowY: 'hidden'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fthankyou.png?alt=media&token=2f0527d1-3366-40bd-b88c-ed658aca7bda" alt="Logo" style={{width: '250px', marginTop: '60px', marginBottom: '20px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p className="sss" style={{fontSize: '20px', marginTop: '10px'}} >Your Score</p>
            </div>

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '300px',paddingLeft: '0px', paddingTop: '40px', paddingBottom: '40px', border: '2px solid black', borderRadius: '15px'}}>

                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}} id='slotparent'>
                        <p>CORRECT ANSWERS</p>
                        <p class="sss" style={{marginLeft: '15px'}}>X</p>
                    </div>

                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}} id='slotparent'>
                        <p>WRONG ANSWERS</p>
                        <p class="sss" style={{marginLeft: '15px'}}>X</p>
                    </div>
                </div>
                

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '90px', marginBottom: '10px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Score