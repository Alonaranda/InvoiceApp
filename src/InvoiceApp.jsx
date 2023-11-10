import { useState } from "react";
import { getInvoice } from "./Services/getInvoice";
import { ClientView } from "./Components/ClientView";
import { CompanyView } from "./Components/CompanyView";
import { Header } from "./Components/Header";
import { InvoiceView } from "./Components/InvoiceView";
import { ProductsView } from "./Components/ProductsView";
import { TotalView } from "./Components/TotalView";

export default function InvoiceApp() {
    const {id, name, client, company, items, total} = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [quantifyValue, setQuantify] = useState(0);

    // const initialState = {};

    //const [values, setValues] = useState(initialState);

    // const reset = () => {
    //     setValues(initialState);
    // };

    const [itemsList, setItemsList] = useState(items);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(values);
        setItemsList([...items, {
            id: 5,
            product: productValue,
            price: +priceValue,
            quantify: parseInt(quantifyValue, 10)
        }]);
        setProductValue('');
        setPriceValue('');
        setQuantify('');
    }

    // const handleInputChange = ({target}) => {
        // setValues({
        //     ...values,
        //     [target.name]: target.value
        // })
        // return values;
    // };


    return (
        <>
            <div className="container">
                <div className="card my-5">
                    <Header title={"Invoice App"}/>
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
                        <br/>
                        <ProductsView
                            title={"Products"}
                            items={itemsList}
                        />
                        <TotalView total={total}/>
                        <form className="w-50" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Product..."
                                name="product"
                                value={productValue}
                                className="form-control m-3"
                                onChange={event => {
                                    setProductValue(event.target.value)
                                }}
                            />
                            <input
                                type="text"
                                name="price"
                                value={priceValue}
                                placeholder="$$$..."
                                className="form-control m-3"
                                onChange={event => {
                                    setPriceValue(event.target.value)
                                }}
                            />
                            <input
                                type="text"
                                name="quantify"
                                value={quantifyValue}
                                placeholder="How much..."
                                className="form-control m-3"
                                onChange={event => {
                                    setQuantify(event.target.value)
                                }}
                            />
                        </form>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >Add item</button>
                    </div>
                </div>
            </div>
        </>
    );
}
