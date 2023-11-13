import { useState, useEffect } from "react";
//import { getInvoice } from "./Services/getInvoice";
import { ClientView } from "./Components/ClientView";
import { CompanyView } from "./Components/CompanyView";
import { Header } from "./Components/Header";
import { InvoiceView } from "./Components/InvoiceView";
import { ProductsView } from "./Components/ProductsView";
import { TotalView } from "./Components/TotalView";
import { calculateTotal } from "./Services/getInvoice";

const initialState = {
    id: 1,
    name: 'PC',
    client: {
        name: 'Chris',
        lastName: 'Alonso',
        address: {
            country: 'Mexico',
            city: "CDMX",
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'InvoiceAC',
        fiscalNumber: 123456,
    },
    items: []
}

export default function InvoiceApp() {
    
    const [invoice, setInvoice] = useState(initialState);
    const [counter, setCounter] = useState(4);
    const [itemsList, setItemsList] = useState([]);
    const [values, setValues] = useState({
        product: '',
        price: '',
        quantify: ''
    });
    const [totalInvoice, setTotalInvoice] = useState(0)

    const { id, name, client, company } = invoice;
    const { product, price, quantify } = values;

    useEffect(() => {
        const data = invoice;
        setInvoice(data);
        setItemsList(data.items);
    }, []);

    useEffect(() => {
        setTotalInvoice(calculateTotal(itemsList));
    }, [itemsList]);


    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product.trim().length <= 1 || price.trim().length <= 0 || quantify.trim().length < 0) return;
        setItemsList([...itemsList, {
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
                        <TotalView total={totalInvoice} />
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
