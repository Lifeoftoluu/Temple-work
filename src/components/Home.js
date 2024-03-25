import React from "react";  
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Lottie from "lottie-react";
import animationData from '../assets/investment.json'

function Home () {
    return (
        <div className="user-impression">
            <br />
            <br />
       <h1 className="opener">welcome to <span>Tennod returns</span> </h1>
       <h2 className="opener2">Build on your finaces with a single<br /> step from anywhere you are!</h2>
       <div className="anime">
       <Lottie animationData={animationData} />
       </div>
       <img className="wallet-portfolio" src="./images/crypto.png" alt=""></img>
       </div>
      
    )
}

export default Home;