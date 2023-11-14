import { useState, useEffect } from "react";
//import { getInvoice } from "./Services/getInvoice";
import { ClientView } from "./Components/ClientView";
import { CompanyView } from "./Components/CompanyView";
import { Header } from "./Components/Header";
import { InvoiceView } from "./Components/InvoiceView";
import { ProductsView } from "./Components/ProductsView";
import { TotalView } from "./Components/TotalView";
import { calculateTotal } from "./Services/getInvoice";
import { FormInvoiceView } from "./Components/FormInvoiceView";

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
    const [totalInvoice, setTotalInvoice] = useState(0)
    const { id, name, client, company } = invoice;

    useEffect(() => {
        const data = invoice;
        setInvoice(data);
        setItemsList(data.items);
    }, []);

    useEffect(() => {
        setTotalInvoice(calculateTotal(itemsList));
    }, [itemsList]);

    const handleAddItems = ({product, price, quantify}) => {
        setItemsList([...itemsList, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantify: parseInt(quantify.trim(), 10)
        }]);
        setCounter(counter + 1);
    }

    const handleDeleteItem = (id) => {
        setItemsList(itemsList.filter(item => item.id !== id));
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
                            handlerDelete={handleDeleteItem}
                        />
                        <TotalView
                            total={totalInvoice}
                        />
                        <FormInvoiceView
                            handler={handleAddItems}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
