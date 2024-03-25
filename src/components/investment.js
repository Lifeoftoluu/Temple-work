import Lottie from 'lottie-react';
import animationData from '../assets/investment.json';
import './investment.css';



function Investment() {
    
    return (
        <div>
            <Lottie animationData={animationData} />
        
            <div className='text-center space-y-4'>
                <h1 className='text-2x1 font-bold'>
                    with Tennod returns, you get the chance to take your finances next level
                </h1>
            </div>
        </div>
        
       
    )
};
export default Investment