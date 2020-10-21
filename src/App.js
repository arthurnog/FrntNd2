import React, { useState } from 'react';

import Header from './components/Header';

function App(){

    const [projects, setProject] = useState(['seja feliz', 'não se odeie', 'não se cobre'])

    //useState  retorna um array com duas posições
    //1. variavel com valor inicial
    //2. função pra atualizar o valor

    function handleAddProject() {

        setProject([...projects, `Amor ${Date.now()}`]);
        //projects.push(`Amor ${Date.now()}`);

        console.log(projects);
    }

    return (
        <>
            <Header title="tuts" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>venha para somar</button>
        </>
    );
}

export default App;