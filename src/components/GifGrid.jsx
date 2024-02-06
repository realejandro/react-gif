import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    
    //const api_key = "eshNwCouImRq9feecgBSHgGy9sclFl69";
    //El useEffect lo usamos para hacer efectos secundarios en nuestro programa
    //ejm: si el state cambia, este puede hacer un segundo efecto despues de que el componente se renderise

    const { images, isLoading } = useFetchGifs( category ); //Aqui reducimos el codigo con la funcion useFetchGifs y nos quedo asi

    return (
    <>
        <h3>{ category }</h3>
        {
          //tambien podemos hacer: isLoding && (<h2>Cargando...</h2> )
          isLoading 
          ? ( <h2>Cargando...</h2> ) 
          : null
        }
        <div className="container">
          <div className="row p-0">
          {
            images.map( ( image ) => (
              <GifItem 
                key={ image.id }
                { ...image }
              />
            ))
          }
          </div>
        </div>
    </>
  )
}
