import { useGlobal } from "../Context.jsx";
import "./CategoryCards.css";
import CatCards from "./CatCards.jsx";

function CategoryCards() {
  const {products} = useGlobal();

  const uniqueCategories = products.filter((item,index,arr)=>{
    return arr.findIndex(obj=> obj.category === item.category) === index
  });

  

  return (
    <>
    <div className="category-container">
  {uniqueCategories.map((item) => (
    <CatCards 
      key={item.category}
      catname={item.category}
      thumbnail={item.thumbnail}
    />
  ))}
</div>
    </>
  );
}

export default CategoryCards;
