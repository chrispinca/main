import ProductCard from "./ProductCard";
import React, {useState, useEffect} from "react";
import cushyCouch from "../assets/cushyCouch.jpg"

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const currentProducts = [
            { id: 1, name: "Cushy Chair", price: 10.99, image: "https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Chairs_Filter?wid=520&qlt=75" },
            { id: 2, name: "Bouncy Bed", price: 12.99, image: "https://www.ikea.com/ca/en/images/products/hauga-bedroom-furniture-set-of-3-lofallet-beige-white__1101338_pe866602_s5.jpg?f=s" },
            { id: 3, name: "Tall Table", price: 9.99, image: "https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_CoffeeTables_Filter?wid=520&qlt=75" },
            { id: 4, name: "Cool Chair", price: 12.99, image: "https://specials-images.forbesimg.com/imageserve/63ee96ebff0dadf0a54144a5/Erik-Leather-Wing-Chair---best-furniture-store-online/960x0.jpg?cropX1=0&cropX2=1060&cropY1=0&cropY2=961" },
            { id: 5, name: "Crazy Couch", price: 12.99, image: cushyCouch },
            { id: 6, name: "Product 6", price: 12.99, image: "https://img.freepik.com/premium-photo/discover-beautiful-elegant-wood-furniture-stunning-furniture-images-included_629704-1400.jpg" },
            { id: 7, name: "Product 7", price: 12.99, image: "https://img.freepik.com/premium-photo/discover-beautiful-elegant-wood-furniture-stunning-furniture-images-included_629704-1400.jpg" },
            { id: 8, name: "Product 8", price: 12.99, image: "https://img.freepik.com/premium-photo/discover-beautiful-elegant-wood-furniture-stunning-furniture-images-included_629704-1400.jpg" },
            { id: 9, name: "Product 9", price: 12.99, image: "https://img.freepik.com/premium-photo/discover-beautiful-elegant-wood-furniture-stunning-furniture-images-included_629704-1400.jpg" },
            { id: 10, name: "Product 10", price: 12.99, image: "https://img.freepik.com/premium-photo/discover-beautiful-elegant-wood-furniture-stunning-furniture-images-included_629704-1400.jpg" },
        ];
        setProducts(currentProducts);
    }, []);

    return (
        <div className="product-list-container">
            <h2 className = "product-list-title">Featured Products</h2>
            <div className = "product-list">
                {products.map(product => (
                    <ProductCard 
                        key = {product.id}
                        image = {product.image}
                        productName = {product.name}
                        price = {product.price}
                    />
                ))}
            </div>
        </div>
    )

}

export default ProductList;