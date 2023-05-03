import React from 'react';
import {useParams} from "react-router-dom"


function About() {

    const {id} = useParams();

    return (
        <div className="App">
            <p>About {id}</p>
        </div>
    );
}

export default About;
