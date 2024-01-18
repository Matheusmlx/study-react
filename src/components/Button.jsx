import PropsTypes from 'prop-types'

function Button({label}){
    return <button>{label}</button>
}

Button.propTypes = {
    label: PropsTypes.string
}

export default Button