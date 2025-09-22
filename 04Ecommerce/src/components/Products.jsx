import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Products = () => {
const data = useLoaderData()


  return (
    <div className="p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">All Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className='bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300'>
                        {/* Product Image with a placeholder fallback */}
                        <img 
                            src={product.images[0] || 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'} 
                            alt={product.title} 
                            className="w-full h-48 object-cover" 
                            // This handles cases where the image URL is broken
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Error'; }} 
                        />
                        <div className="p-4">
                            {/* Product Title */}
                            <h3 className="text-lg font-semibold text-gray-800 truncate" title={product.title}>{product.title}</h3>
                            {/* Product Price */}
                            <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}



export default Products

// --- Data Loader for Products ---
// This function is exported so the router can call it before rendering the component.
export const products = async () => {
    try {
        // Fetching 100 products to display a more complete list
        const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=100');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch products:", error);
        // This provides a user-friendly error page if the fetch fails by throwing a response
        throw new Response("Products Not Found", { status: 404 });
    }
};
