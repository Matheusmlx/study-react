import Title from "./Title"
import {useState} from 'react'


function IngredienteList({item}) {

    const [listItem, setListItem] = useState(item)

    return (
        <>
        <ul>
            <Title>
                <h1>Teste</h1>
            </Title>
            {listItem.map(({name,id}) => (<li key={id}>{name}</li>))}
        </ul>        
        </>
    )
}

export default IngredienteList