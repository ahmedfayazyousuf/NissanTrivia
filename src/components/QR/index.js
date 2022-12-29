import React from 'react';
import {QrReader} from "react-qr-reader";
import './qr.css'
const QR = () => { 
    return (
        <div className="qrscan">
            <div className="scan">

            </div>
            <div className="scanframe">
            <QrReader
                constraints = {{facingMode: 'environment'} }
                scanDelay={5000}
                //style={previewStyle}
                // onError={handleError}
                // onResult={handleScan}
                videoStyle={{height:'100%',width:'97%',padding:0,left:4,top:0,alignSelf:'center'}}
                videoContainerStyle={{height:'100%', width:'100%',left:0,padding:0}}
                containerStyle={{height:'80%',left:'15%',width:'70%',top:0}}

            />

            <img id='scantext' alt='scan the next qr code' src='/Assets/scantext.png' style={{zIndex:"10000", position:"absolute",color:"white", width:"55%",
            marginBottom:"20%", visibility: "hidden"
            }}></img>
            </div>
        </div>
    )
}

export default QR