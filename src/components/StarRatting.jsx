
import Star  from "./Star"
import PropTypes from "prop-types"
const createArray = length => [...Array(length)]

function StarRatting({style, totalStars = 5, selectedStars, onRate = f => f, ...props}) {

    return (
        <div style={{padding: "5px", ...style}} {...props}>
        {createArray(totalStars).map((item,i) => <Star key={i} selected={selectedStars > i} onSelect={()=>onRate(i+1)}/>)}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
        </div>
    )
}

StarRatting.propTypes = {
    style: PropTypes.object,
    totalStars: PropTypes.number,
    selectedStars: PropTypes.number,
    onRate: PropTypes.func
}


export default StarRatting