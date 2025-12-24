import { useGlobal } from "./Context"

function Home(){
    const {products}=useGlobal();
    return(
        <>
        {
            products.map((item)=>{
                return <h1>
                    {item.title}<br/>
                    {item.description}<br/>
                   price: {item.price}<hr/>
                </h1>
            })
        }
        </>
    )
}

export default Home