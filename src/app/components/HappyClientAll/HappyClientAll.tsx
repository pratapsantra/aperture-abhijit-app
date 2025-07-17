"use client";
import React, { useEffect, useState } from "react";
// import "./HappyClientAll.css"
import allHappyClient from '../../JsonData/allHappyClient.json'

interface ClientReviewData {
    id: number;
    imageUrl: string;
    description: string;
    background: string;  // Background color (hex or any CSS color)
    clientName?: string;
    
}

// ✅ Define Props interface for your component
interface HappyClientAllProps {
    onLoaded: () => void;
}


function HappyClientAll({onLoaded}:HappyClientAllProps ) {
    const [clientReview, setClientReview] = useState<ClientReviewData[]>(allHappyClient)



    useEffect(() => {
        const updatedClients = allHappyClient.map(client => ({
            ...client,
            background: getRandomColor()
        }));

        setClientReview(updatedClients);

        onLoaded();
        // Optional: return cleanup function if necessary
        return () => {

        };
    }, []);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <section className='happy-client-all-section'>
            <div className='inner-container'>
                <div className='heading-container'>
                    <div className='heading-text-container'>
                        <h3>Our Client Speech</h3>
                    </div>
                </div>
            </div>
            <div className="happy-client-all-container">

                {clientReview && clientReview.map((client, index) => (
                    <div className="happy-container" key={client.id}>

                        <div className="card" style={{ ['--card-bg' as any]: client.background}}>
                            <div className="imgBx">
                                <img src={client.imageUrl} />
                            </div>
                            <div className="contentBx">
                                <h2>{client.clientName}</h2>
                                <div className="size">
                                    <p>{client.description}</p>
                                </div>

                            </div>
                        </div>


                    </div>
                ))}

            </div>
        </section>

    );
}

export default HappyClientAll;
