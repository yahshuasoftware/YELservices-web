// const backendDomain=process.env.REACT_APP;
const backendDomain= process.env.REACT_APP_LOCALHOST_URI

// const backendDomain=process.env.REACT_APP_API_URL

const SummaryApi = {

    signUp: {
        url: `${backendDomain}/app/api/signup`,
        method: "post"
    },
    signIn: {
        url: `${backendDomain}/app/api/login`,
        method: "post"
    },
    profile: {
        url: `${backendDomain}/app/api/profile`,
        method: "Get"
    },
    addDepartment: {
        url: `${backendDomain}/app/api/departments`,
        
    },
    addCertificates: {
        url: `${backendDomain}/app/api/departments/add-certificates`,
        
    },
    users: {
        url: `${backendDomain}/app/api/users`,
        method: "Get"
    },
    documents: {
        url: `${backendDomain}/app/api/documents`,
        method: "Get"
    },
    payment:{
        url:`${backendDomain}/app/api/payment/checkout`
    }

}
export default SummaryApi;