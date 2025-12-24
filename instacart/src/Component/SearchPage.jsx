
import { useGlobal } from "../Context";
import { Link } from "react-router-dom";

function SearchPage(){
    const { searchTerm, products } =useGlobal();

    const results = products.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className="mt-4">
            <h4>Search results for : <strong>{searchTerm}</strong></h4>
            <div className="row-mt-3">
                {results.map(product =>(
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="crad h-100">
                            <Link to={`/product/${product.id}`} style={{textDecoration:"none", color:"inherit"}}>
                            <img src={product.thumbnail} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h6>{product.title}</h6>
                                <p>{product.price}</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default SearchPage