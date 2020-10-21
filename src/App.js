import React from 'react';

import Header from './components/Header';

function App(){
    return (
        <>
            <Header title="tuts">
                <ul>
                    <li>seja feliz</li>
                    <li>não se odeie</li>
                    <li>não se cobre</li>
                </ul>
            </Header>
            <Header title="projects" />
        </>
    );
}

export default App;