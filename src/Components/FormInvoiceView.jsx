import { useState } from "react";
import PropTypes from 'prop-types';

export const FormInvoiceView = ({handler}) => {

    //state
    const [values, setValues] = useState({
        product: '',
        price: '',
        quantify: ''
    });
    const { product, price, quantify } = values;

    //Functions
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product.trim().length <= 1 || price.trim().length <= 0 || quantify.trim().length < 0) return;
        handler(values);
        setValues({
            product: '',
            price: 0,
            quantify: 0
        })
    }

    return (
        <>
            <form className="w-50" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product..."
                    name="product"
                    value={product}
                    className="form-control m-3"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    value={price}
                    placeholder="Price$$$"
                    className="form-control m-3"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="quantify"
                    value={quantify}
                    placeholder="How much..."
                    className="form-control m-3"
                    onChange={handleInputChange}
                />
            </form>
            <button
                type="submit"
                className="btn btn-primary m-3"
                onClick={handleSubmit}
            >Add item</button>
        </>
    );
}

FormInvoiceView.propTypes = {
    handler: PropTypes.func.isRequired
}