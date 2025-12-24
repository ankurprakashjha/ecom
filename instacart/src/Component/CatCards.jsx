import { Link } from "react-router-dom";
function CatCards({catname,thumbnail}) {


  return (
     <div className="category-card">
      <img src={thumbnail} alt={catname} />
      <p>{catname}</p>
      <Link to={`/category/${catname}`}>View Products</Link>
    </div>
  );
}

export default CatCards;
