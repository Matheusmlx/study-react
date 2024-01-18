import PropsTypes from 'prop-types'
import Color from './Color'
import './ColorList.css'
function ColorList({colors = [], onRemove = f => f, onRate = f => f}) {
    if(!colors.length) return <div>No Colors Listed</div>
    return (
        <div className='container-list'>
            {
                colors.map(color => <Color key={color.id} {...color} onRemove={onRemove} onRate={onRate}/>)
            }
        </div>
    )
}


ColorList.propTypes = {
    colors: PropsTypes.array,
    onRemove: PropsTypes.func,
    onRate: PropsTypes.func
}

export default ColorList