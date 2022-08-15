import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypeBun() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='me-1 col-md-5'>
                        <img style={{ borderRadius: '50%' }} className='image-fluid mt-1 ms-5 b_pic' width='100%' src='./bun1.jpg' alt='no bun :(' />
                    </div>
                    <div style={{ marginLeft: '150px' }} className='col'>
                        <h1 className='display-1 nameText csep'>Welcome!</h1>
                        <div className='fs-2 siteText'>
                            <Typewriter
                                options={{
                                    strings: [
                                        'My name is Adrian Dorado, avid doer of things.',
                                        'Contact me @ doradocoding@gmail.com',
                                        'I hope you enjoy your stay <3'
                                    ],
                                    autoStart: true,
                                    pauseFor: 1500,
                                    loop: true
                                }}
                            />
                        </div>
                        <hr />
                        <div className='mt-3'>
                            <h2 className='nameText text-decoration-underline'>What's the hops?</h2>
                            <p className='siteText'>
                                Hey, hey, everyone! Welcome to my site! 💖 <br />
                                Here you'll find my finished projects along with some links to my <br />
                                my github, gitlab, and some peeks at future projects✨<br />
                            </p>
                            <h2 className='nameText text-decoration-underline'>A bit about Bun.</h2>
                            <p className='siteText'>
                                I am a full-stack software engineer with a keen eye for design and determination that is unmatched.<br/>
                                A few facts about myself: <br />
                                &emsp; - a ton of people call me Bunny and it works because I love bunnies! <br />
                                &emsp; - I slept in a hammock for four years, I miss it a ton.<br />
                                &emsp; - I really want to live in a bus and code around the states.<br />
                                &emsp; - Cycling is one of my favorite things ever!<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
