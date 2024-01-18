
import './Color.css'
import PropsType from 'prop-types'
import StartRatting from './StarRatting'

function Color({ id, title, color, rating, onRemove = f => f, onRate= f => f,  ...props }) {
    return (
        <div className='color-container' {...props}>
            <button onClick={() => onRemove(id)}>X</button>
            <h3>{ title }</h3>
            <div style={{ height:50, backgroundColor:color }}/>
            <StartRatting selectedStars={rating} onRate={(rating) => onRate(id, rating)}/>            
        </div>
    )
}

Color.propTypes = {
    id: PropsType.string,
    title: PropsType.string,
    color: PropsType.string,
    rating: PropsType.number,
    onRemove: PropsType.func,
    onRate: PropsType.func,
}

export default Color