
import { useInput } from '../hooks/useInput';
import { useColors } from '../ColorProvider'
function Form() {
    const { addColor } = useColors();
    const [titleProps, resetTitle] = useInput("");
    const [hexColorProps, resetColor] = useInput("#000000");
    const submit = (e) => {
        e.preventDefault();
        addColor(titleProps.value,hexColorProps.value);
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

export default Form