import './App.css'
import { useState } from 'react'
import colorData from "./data/color-data.json"
import ColorList from './components/ColorList';
import Form from './components/Form';
function App() {
  const [colors, setColors] = useState(colorData);

  const onRemoveItem = (id) => {
    const newArray = colors.filter(color => color.id !== id)

    setColors(newArray);
  }

  const onRate = (id, rating) => {
    const newArray = colors.map(color => color.id === id ? {...color, rating} : color)
    setColors(newArray)
  }

  const onNewColor = (txtColor, colorHex) => {
    const newColor = {
      id: '13213213213',
      title:txtColor,
      color:colorHex,
      rating: 0
    }

    setColors([...colors,newColor]);
  }

  return (
    <>
        <h1>Color Organizer</h1>
        <ColorList colors={colors} onRemove={onRemoveItem} onRate={onRate}/>
        <Form onNewColor={onNewColor}/>
    </>
  )
}

export default App
