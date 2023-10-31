export const invoice = {
    id: 10,
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
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 100,
            quantify: 1
        },
        {
            id: 2,
            product: 'Keyboard Mechanic',
            price: 200,
            quantify: 2
        },
        {
            id: 3,
            product: 'Mouse',
            price: 20,
            quantify: 5
        }
    ]
}