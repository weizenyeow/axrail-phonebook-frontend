export const API = {
    contact:{
        list:"/api/contacts/",
        create:"/api/contacts/",
        retrieve: (_, v) => `/api/contacts/${v}/`,
        update: (_, v) => `/api/contacts/${v}/`,
        delete: (_, v) => `/api/contacts/${v}/`,
    }
}

export const Paths = {
    contact:{
        viewContacts:"/",
        viewContactParams:"/contacts/:id",
        viewContact: (_, v) => `/contacts/${v}`,
        createContact:"/create",
    }
}