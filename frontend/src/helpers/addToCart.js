import  SummaryApi from "../common";
import { toast } from 'react-toastify';

const addToCart = async (e,id) => {
    e?.stopPropagation();
    e.preventDefault();

    try {
        const response = await fetch(SummaryApi.addToCartProduct.url, {
            method: SummaryApi.addToCartProduct.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ productId: id })
        });

        const responseData = await response.json();

        if (responseData.success) {
            toast.success(responseData.message);
        } if(responseData.error) {
            toast.error(responseData.message);
        }

        return responseData

        console.log("Response Data:", responseData);

    } catch (error) {
        console.error("Error adding to cart:", error);
        toast.error("An error occurred. Please try again.");
    }
};

export default addToCart;
