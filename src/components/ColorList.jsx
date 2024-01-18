import { useContext } from 'react'
import Color from './Color'
import { ColorContext } from '../main'
import './ColorList.css'
function ColorList() {
    const { colors } = useContext(ColorContext)
    if(!colors.length) return <div>No Colors Listed</div>
    return (
        <div className='container-list'>
            {
                colors.map(color => <Color key={color.id} {...color}/>)
            }
        </div>
    )
}
export default ColorList

// Forma não utilizando o hook useContext
// <ColorContext.Consumer>
//            {context => {
//                if(!context.colors.length) return <div>No Colors Listed</div>
//                return (
//                  <div className='container-list'>
//                     {
//                     context.colors.map(color => <Color key={color.id} {...color}/>)
//                     }
//                 </div>
//                )
//            }}
//         </ColorContext.Consumer>