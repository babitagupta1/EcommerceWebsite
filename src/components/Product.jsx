
import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useParams } from 'react-router';
import ProductCardshimmer from "./ProductCardshimmer";

export default function Product() {
    const { id } = useParams();
    const [ProductData, setProductData] = useState(null);

    useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await result.json();
      setProductData(json);
    };
    fetchProducts();
  }, [id]);



    if (!ProductData)
        return (
            <div className='flex justify-center items-center min-h-[60vh]'>
                <ProductCardshimmer />
            </div>
        )

    return (
        <div>
            <div className='flex justify-center items-center min-h-[60vh] bg-gray-50 py-8'>
                <div className='relative flex flex-col gap-4 px-6 pt-6 pb-8 border-2 border-slate-200 w-full max-w-md bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden'>
                    <div className='absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md z-10'>
                        ${ProductData.price}
                    </div>
                    <div className='absolute top-4 left-4 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full z-10'>
                        {ProductData.category}
                    </div>
                    <div className='w-full h-64 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50'>
                        <img
                            src={ProductData.image}
                            alt={ProductData.title}
                            className='object-contain w-full h-full transition-transform duration-300 group-hover:scale-105'
                        />
                    </div>
                    <h2 className='text-2xl font-semibold text-gray-900 mt-2 truncate' title={ProductData.title}>
                        {ProductData.title}
                    </h2>
                    <p className='text-gray-600 text-base line-clamp-4 min-h-[4em]'>{ProductData.description}</p>
                    <div className='flex items-center gap-3 mt-2'>
                        <span className='flex items-center gap-1 text-yellow-500 font-semibold'>
                            <FaStar className='inline' /> {ProductData.rating?.rate}
                        </span>
                        <span className='text-gray-500 text-sm'>({ProductData.rating?.count} reviews)</span>
                    </div>
                    <button className='mt-4 flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-lg font-medium text-base hover:bg-blue-600 transition-colors'>
                        <FaCartPlus /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
