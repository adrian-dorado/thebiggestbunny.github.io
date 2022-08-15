import React, { useState, useEffect } from 'react';

export default function Bored() {

    const [bored, setBored] = useState([])
    const fetchBored = async () => {
        fetch('https://www.boredapi.com/api/activity')
            .then(res => res.json())
            .then(res => setBored(res))
        console.log(bored)
    };
    useEffect(() => {
        fetchBored()
    }, []);



    return (
        <>
            <div style={{ marginTop: '60px' }} className='container card p-5 skills'>
                <div className='text-center siteText text-decoration-underline mb-5'>Do a thing?</div>
                <div className='siteText row'>
                    <div className='col-md-4'>
                        As an avid doer of things, I am an advocate for doing things!
                        Here's a fun little button to help you get started on your next, new thing!
                    </div>
                    <div className='col-md-4'>
                        <button className='btn btn-lg nameText col-md-12 btt link-dark' onClick={fetchBored}>Your new thing awaits!</button>
                        <div className='mt-3 text-center col-md-12 card'>
                            <p className=''>Activity: {bored.activity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
