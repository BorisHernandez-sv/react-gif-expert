import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid =  ({ category}) => {
    const {images , isLoading } = useFetchGifs(category)
    // console.log({images, isLoading})

    // const [counter, setcounter] = useState(10)
    // const [images, setimages] = useState([])
    // const getImages = async()=>{
    //   const newImages = await getGifts(category)
    //   setimages(newImages)
    // }
    // useEffect( 
    //     ()=>{ getImages() },
    //     []
    // )

  return (
    <>
        <h3>{category}</h3>
        {
          // isLoading ?<h2>Cargando...</h2> : null
          isLoading && <h2>Cargando...</h2>
        }
        
        <div className="card-grid">
            { images.map( (image) =>(
                 <GifItem key={image.id}
                 {...image}
                //  title={image.title}
                //  url={image.url}
                 />
              ))
            }

        </div>
        {/* <h5> {counter}</h5>
        <button onClick={ ()=>{setcounter(counter+1)}}> +1 </button> */}
        {/* <p>HOla Mundo</p> */}
    </>
    )
}
