import { createContext } from "react";
import colorData from "./data/color-data.json"


const ColorContext = createContext();

export default function ColorProvider ({ children }) {
    const [colors, setColors] = useState(colorData);

    return (
        <ColorContext.Provider value={{colors, setColors}}>
            {children}
        </ColorContext.Provider>
    )
}