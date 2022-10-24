import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (newCategory) =>{
            console.log(newCategory)
            // categories.push(newCategory)
            // console.log('Valorant')
            // if (categories.toUpperCase().includes(newCategory.toUpperCase())) return
            // console.log(categories.toUpperCase())
            if (categories.includes(newCategory)) return

            setCategories([newCategory, ...categories])
            // setCategories( cat=> [...cat, 'Valorant'])
            
        }
    // console.log(categories)
  return (
    <>
        {/* titulo  */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory  
            // setCategories ={setCategories}
            onNewCategory ={ (event) => onAddCategory(event)}
            currentCategories ={categories}
         />


        {/* Listado de Gif */}
        <button onClick={onAddCategory}>Agregar</button>

        <ol>
            {
                categories.map((category) => 
                     ( <GifGrid 
                            category={category}
                            key={category}
                            propiedad2='boris'
                        />
                        // <div key={categories}>
                        //     <h3> {categories } </h3>
                        //      <li>{categories}  </li>
                        // </div>
                        )
                        )
                
            }
            
            
            {/* <li>ABC</li>
            <li>123</li>
            <li>XYZ</li> */}
        </ol>
            {/* Gif Item */}
    </>
  )
}

