import { invoice } from "../Data/invoice"

export const getInvoice = () => {
    // let total = 0;
    // invoice.items.forEach(item => {
    //     total = total + item.price * item.quantify;
    // });

    const total = invoice.items
        .map(item => item.price * item.quantify)
        .reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
    return {...invoice, total};
}