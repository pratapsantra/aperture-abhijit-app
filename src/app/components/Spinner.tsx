import React from 'react';
// import styles from './Spinner.module.css';

const Spinner: React.FC = () => (
    <div className='spinner'>
        <div className='doubleBounce1'></div>
        <div className='doubleBounce2'></div>
        {/* <div className='spinne'></div> */}
        <style jsx>{`
                .spinner {
        width: 30px;
        height: 30px;
        position: relative;
        margin: 0 auto;
        }

        .doubleBounce1, .doubleBounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #F47B20;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: bounce 2.0s infinite ease-in-out;
        }

        .doubleBounce2 {
        animation-delay: -1.0s;
        background-color: #fff;
        }

        @keyframes bounce {
        0%, 100% {
            transform: scale(0.0);
        } 50% {
            transform: scale(1.0);
        }
        }
      `}</style>

        {/* <style jsx>{`
                .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #e3e3e3;
        border-top: 4px solid;
        border-radius: 50%;
        animation: spin 1s linear infinite, colorChange 3s ease-in-out infinite;
        margin: 0 auto;
        }

        @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }

        @keyframes colorChange {
        0% {
            border-top-color: #ff0000; 
        }
        33% {
            border-top-color: #00ff00; 
        }
        66% {
            border-top-color: #0000ff; 
        }
        100% {
            border-top-color: #ff0000; 
        }
        }
      `}</style> */}
    </div>
);

export default Spinner;