
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ShimmerProductCard from "./ShimmerProductCard";


const Hero = () => {

  let [topRatedProducts, setTopRatedProducts] = useState([]);
  const [allProducts,setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState("")
  const changeText = (event) => {
    setSearchText(event.target.value);
  };

  

  const searchProducts = () => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setTopRatedProducts(filteredProducts);
  };

 

  const fetchproduct = async () => {
  const result = await fetch("https://fakestoreapi.com/products");
  const json = await result.json();
  setTopRatedProducts(json);
  setAllProducts(json);
};

useEffect(() => {
  fetchproduct();
}, []);

  const topRatedProductsData = () => {
    setTopRatedProducts(productData.filter((product) => product.rating.rate >= 4));
    console.log(topRatedProducts);
  };

 if(topRatedProducts.length === 0){
    return (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length:14 }).map((_,index)=>(<ShimmerProductCard key={index}/>
      ))}     
      </div>
        );
    }

  return (
    <>

      <section className='flex flex-col gap-4 py-2'>
        <div className='flex gap-3 items-center'>
          <div className="flex items-center gap-2">
            <input
              type='text'
              className='w-80  px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
              placeholder='Search...'
              value={searchText}
              onChange={changeText}
            />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={searchProducts}>
              Search
            </button>

          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={topRatedProductsData}>
            Top Rated Products
          </button>
        </div>
        <div className='flex flex-wrap justify-center gap-4 product-items'>


          {topRatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}

            />
          ))}

        </div>
      </section>

    </>
  )
}

export default Hero;