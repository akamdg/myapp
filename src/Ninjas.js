import React from 'react';
import './Ninjas.css'

const Ninjas = ({ninjas, deleteNinja}) => {
    return (
        <div className="ninja-list">
            {
                ninjas.map(ninja => {
                    return (
                        <div className="ninja" key={ninja.key}>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Belt: { ninja.belt }</div>
                        <div>Training: {ninja.training } </div>
                        <button onClick={() => {deleteNinja(ninja.key)}}>Delete ninja</button>
                        <hr />
                        </div>
                    )
                })
            }
            </div>
    );
}

export default Ninjas
