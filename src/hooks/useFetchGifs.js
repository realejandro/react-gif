import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState( true);

    useEffect( () => {
      getGifs(category)
        .then( newImages => setImages(newImages) )

      setIsloading(false)
    }, [ ])
  
    //estoy poniendo solo los nombres sin valores pq js ahora toma por defecto el nombre de la variable inicial
    //sin necesidad de hacer images:images o isLoading:isLoading
    return {
        images,
        isLoading, 
    }
}
