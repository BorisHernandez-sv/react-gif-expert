import { useState } from "react"

export const AddCategory = ( {onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        // console.log(target.value)
        setInputValue(target.value.toUpperCase())
    }

    const onSubmit = (event) => {
        // console.log(event)
        event.preventDefault()
        // console.log(inputValue)
        // console.log(setCategories)
        if (inputValue.trim().length <=1) return;
        //  setCategories( cat=> [ ...cat, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gif"
            value ={inputValue}
            onChange={onInputChange}

        />
    </form>

)}
