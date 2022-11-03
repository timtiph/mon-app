import { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'

export default function Form() {

    const [dataArr, setDataArr] = useState([
        { txt: "Promener le chien", id: uuidv4() },
        { txt: "Sport", id: uuidv4() },
        { txt: "Coder avec réact", id: uuidv4() },
    ])
    const [stateInput, setStateInput] = useState();

    const deleteElement = id => {
        // console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    const addTodo = e => {
        e.preventDefault(); // empeche la mise à jour à chaque click sur envoyer
        const newArr = [...dataArr] // création copie du state (du tableau) pour travailler dessus

        const newTodo = {}; // création nouvel obj
        newTodo.txt = stateInput; // ajoute une propriété txt
        newTodo.id = uuidv4(); // on ajoute un id

        newArr.push(newTodo); // push le nouvel obj dans la copie du tableau 
        setDataArr(newArr);  // on change le state avec la copie du tableau 

        setStateInput('') // remet l'input à 0
    }

    const linkedInput = e => {
        // console.log(e);
        setStateInput(e);
    }

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire : </label>
                <input
                    value={stateInput}
                    onChange={e => linkedInput(e.target.value)}
                    type="text"
                    className="form-control"
                    id="todo" />

                <button className="mt-2 btn btn-primary d-block">Ajouter à la liste</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}

                        ></Item>
                    )
                })}


            </ul>
        </div>

    )
}