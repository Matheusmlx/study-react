
import PropsTypes from 'prop-types'
import { useInput } from '../hooks/useInput';
function Form({onNewColor = f => f}) {
    const [titleProps, resetTitle] = useInput("");
    const [hexColorProps, resetColor] = useInput("#000000");
    const submit = (e) => {
        e.preventDefault();
        onNewColor(titleProps.value,hexColorProps.value);
        resetTitle();
        resetColor();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    {...titleProps}
                    type="text"
                    placeholder='color Title'/>
                <input
                    {...hexColorProps}
                    type="color"/>
                <button>Salvar</button>
            </form>
        </div>
    )
}

Form.propTypes = {
    onNewColor: PropsTypes.func
}

export default Form