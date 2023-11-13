import { useState } from "react";
import { getInvoice } from "./Services/getInvoice";
import { ClientView } from "./Components/ClientView";
import { CompanyView } from "./Components/CompanyView";
import { Header } from "./Components/Header";
import { InvoiceView } from "./Components/InvoiceView";
import { ProductsView } from "./Components/ProductsView";
import { TotalView } from "./Components/TotalView";

export default function InvoiceApp() {
    const { id, name, client, company, items, total } = getInvoice();

    //Form input por input
    // const [productValue, setProductValue] = useState('');
    // const [priceValue, setPriceValue] = useState(0);
    // const [quantifyValue, setQuantify] = useState(0);
    // const onProductChange = ({target}) => {
    //     setProductValue(target.value);
    // }
    // const onPriceChange = ({target}) => {
    //     setPriceValue(target.value);
    // }
    // const onQuantifyChange = ({target}) => {
    //     setQuantify(target.value);
    // }

    const [values, setValues] = useState({
        product: '',
        price: 0,
        quantify: 0
    });

    const { product, price, quantify } = values;

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    };

    const [counter, setCounter] = useState(4);

    const [itemsList, setItemsList] = useState(items);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(values);
        if (product.trim().length <= 1 || price.trim().length <= 0 || quantify.trim().length < 0) return;
        setItemsList([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantify: parseInt(quantify.trim(), 10)
        }]);
        setValues({
            product: '',
            price: 0,
            quantify: 0
        })
        setCounter(counter + 1);
    }



    return (
        <>
            <div className="container">
                <div className="card my-5">
                    <Header title={"Invoice App"} />
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <InvoiceView
                                    id={id}
                                    name={name}
                                    title={"Info"}
                                />
                            </div>
                            <div className="col">
                                <ClientView
                                    client={client}
                                    title={"Client"}
                                />
                            </div>
                            <div className="col">
                                <CompanyView
                                    company={company}
                                    title={"Company"}
                                />
                            </div>
                        </div>
                        <br />
                        <ProductsView
                            title={"Products"}
                            items={itemsList}
                        />
                        <TotalView total={total} />
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
                                placeholder="$$$..."
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
                    </div>
                </div>
            </div>
        </>
    );
}
