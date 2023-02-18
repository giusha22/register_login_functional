import decode from "jwt-decode"


export const checkTokenValidity = (token)=>{
    const expirationDate = decode(token).exp;
    // console.log("expirationDate",expirationDate,"Token",token);
    const isExpired = expirationDate *1000 < new Date().getTime();
    return isExpired
};




export const getUserInitials = (firstName,LastName)=>{
    if(!firstName || !LastName){
        return "";
    };
        const initial =  `${firstName.charAt(0)} ${LastName.charAt(0)}`
    return initial.toUpperCase()
};

export const isUserAdmin = (userData)=>{
    return userData?.role?.includes("admin");
}