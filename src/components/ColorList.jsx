import Color from './Color'
import './ColorList.css'
import { useColors } from '../ColorProvider'
function ColorList() {
    const { colors } = useColors()
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