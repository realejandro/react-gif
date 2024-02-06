import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);


    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory)  ) return;
        //categories.push(newCategory);
        setCategories( categories => [ ...categories, newCategory ] )
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories = { setCategories } {/*Aqui es donde hacemos la conexion del componente padre con el hijo */}
            onNewCategory = { value => onAddCategory(value)} //Aqui hicimos la conexion de el hijo con el componente padre
        /> 
        {/*Se comunican pasandole una funcion como parametro al otro */}
        
        
        { 
            categories.map( (category) => {
                return (
                    <GifGrid 
                        key={category} 
                        category = { category }
                    />)
            })
        }

    
    </>
  )
}
