
import './Color.css'
import PropsType from 'prop-types'
import StartRatting from './StarRatting'
import { useColors } from '../ColorProvider'
function Color({ id, title, color, rating, ...props }) {
    const { rateColor, removeColor } = useColors()

    return (
        <div className='color-container' {...props}>
            <button onClick={() => removeColor(id)}>X</button>
            <h3>{ title }</h3>
            <div style={{ height:50, backgroundColor:color }}/>
            <StartRatting selectedStars={rating} onRate={(rating) => rateColor(id, rating)}/>            
        </div>
    )
}

Color.propTypes = {
    id: PropsType.string,
    title: PropsType.string,
    color: PropsType.string,
    rating: PropsType.number,
    onRemove: PropsType.func,
}

export default Color