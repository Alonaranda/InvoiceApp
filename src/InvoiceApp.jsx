import { getInvoice } from "./Services/getInvoice";
import { ClientView } from "./Components/ClientView";
import { CompanyView } from "./Components/CompanyView";
import { Header } from "./Components/Header";
import { InvoiceView } from "./Components/InvoiceView";
import { ProductsView } from "./Components/ProductsView";
import { TotalView } from "./Components/TotalView";

export default function InvoiceApp() {

    const {id, name, client, company, items, total} = getInvoice();

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
                            items={items}
                        />
                        <TotalView total={total}/>
                    </div>
                </div>
            </div>
        </>
    );
}
