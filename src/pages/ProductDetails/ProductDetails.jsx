import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>Details</h2>
        </div>
    );
};

export default ProductDetails;