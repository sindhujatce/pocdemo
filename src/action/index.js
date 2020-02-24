

export const onUpload=(Data)=>{
    return {
        type:"UPLOAD",
        payload:Data
    };
};
export const Delete=(Data)=>{
    return {
        type:"DELETE",
        payload:Data
    };
};
export const Add=(Data)=>{
    return{
        type:"ADD",
        payload:Data
    };
};
export const Update=(Data)=>{
    return {
        type:"UPDATE",
        payload:Data
    };
};