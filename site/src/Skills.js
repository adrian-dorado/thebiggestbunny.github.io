import React from 'react'
import NavRoute from './NavRoute.js'

const Skills = () => {
    return (
        <>
            <div style={{ marginTop: '160px' }} className='container'>
                <h1 className='nameText'>Skills, Skills, Skills!</h1>
                <hr />
                <div className='row pt-3'>
                    <div className='col card skills mx-2 siteText'>
                        <p>
                            Programming Languages: <br />
                            &emsp; &emsp; &emsp; &emsp; - JavaScript <br />
                            &emsp; &emsp; &emsp; &emsp; - Python <br />
                            &emsp; &emsp; &emsp; &emsp; - HTML5 <br />
                            &emsp; &emsp; &emsp; &emsp; - CSS3 <br />
                            &emsp; &emsp; &emsp; &emsp; - Rust <br />
                        </p>
                    </div>
                    <div className='col card skills mx-2 siteText'>
                        <p>
                            Backend Technologies: <br />
                            &emsp; &emsp; &emsp; &emsp; - Django <br />
                            &emsp; &emsp; &emsp; &emsp; - Node.js <br />
                            &emsp; &emsp; &emsp; &emsp; - PostgresSQL <br />
                            &emsp; &emsp; &emsp; &emsp; - RabbitMQ <br />
                            &emsp; &emsp; &emsp; &emsp; - Monolithic App Structures <br />
                            &emsp; &emsp; &emsp; &emsp; - Microservice App Structures <br />
                        </p>
                    </div>
                    <div className='col card skills mx-2 siteText'>
                        <p>
                            Frontend Technologies: <br />
                            &emsp; &emsp; &emsp; &emsp; - React <br />
                            &emsp; &emsp; &emsp; &emsp; - Static HTML Templates <br />
                            &emsp; &emsp; &emsp; &emsp; - WebSockets <br />
                            &emsp; &emsp; &emsp; &emsp; - Dom Manipulation <br />
                            &emsp; &emsp; &emsp; &emsp; - BootstrapCSS <br />
                            &emsp; &emsp; &emsp; &emsp; - TailwindCSS <br />
                        </p>
                    </div>
                </div>
                <div className='mt-4 siteText'>
                    Soft Skills: <br />
                    &emsp; &emsp; There are plenty of soft skills I've developed over the course of my professional endevours.
                    I tend to thrive in spaces where teamwork is encouraged as I absolutely love the mind-melding of developers solving a problem,
                    which leads me to one of my favorite things to do: Problem Solve. There isn't much I enjoy more than adapting to
                    solve a problem creatively and in a timely manner. Building on those skills, I was a photographer for over 12 years and learned how to
                    interact with people in both tense and calm situations. Photography also help me train my attention to detail as I had to make sure
                    every photo I gave the client was perfect for them; the same idealogy applies to my software engineering endevours.
                </div>
            </div>
            <div className='mt-3'>
                <NavRoute />
            </div>
            <hr/>
        </>
    )
}

export default Skills;