// const backendDomain=process.env.REACT_APP;
const backendDomain= process.env.REACT_APP_LOCALHOST_URI


const SummaryApi = {

    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    signIn: {
        url: `${backendDomain}/api/login`,
        method: "post"
    },
    profile: {
        url: `${backendDomain}/api/profile`,
        method: "Get"
    },
    department: {
        url: `${backendDomain}/api/departments`,
        
    },
    addCertificates: {
        url: `${backendDomain}/api/departments/add-certificates`,
        
    },
    users: {
        url: `${backendDomain}/api/users`,
        method: "Get"
    },


}
export default SummaryApi;