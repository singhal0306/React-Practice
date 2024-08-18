import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
// import CartItem from "../components/Cart/CartItem";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://redux-cart-e92d7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error("Could not Fetch card Data!");
            }

            const data = await response.json();
            return data
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending Cart Data Failed!'
            }))
        }
    }
}

export const sendCardData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending Cart Data!'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://redux-cart-e92d7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: "PUT",
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
            })
            if (!response.ok) {
                throw new Error('Sending Cart Data Failed!');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent Cart Data Successfully!'
            }))
            
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending Cart Data Failed!'
            }))
        }
    };
};