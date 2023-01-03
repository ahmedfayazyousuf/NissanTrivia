import React from 'react';
const QR = () => { 
    return (
        <div className="qrscan">
            <div className="scan">

            </div>
            <div className="scanframe">
            

            <img id='scantext' alt='scan the next qr code' src='/Assets/scantext.png' style={{zIndex:"10000", position:"absolute",color:"white", width:"55%",
            marginBottom:"20%", visibility: "hidden"
            }}></img>
            </div>
        </div>
    )
}

export default QR