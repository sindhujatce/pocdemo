
const Upload=(state=[],action)=>{
    switch(action.type)
    {
        case "UPLOAD":
            return {
                ...state,
                data:action.payload};
        case "ADD":
            return{
                data:[...state.data,action.payload]
            };
        case "DELETE":
            const patientToRemove = action.payload;
             state = state.data.filter(patient => patientToRemove.key !== patient.key);
             return {
                data:state
            };
        case "UPDATE":
            const updatedPatient = action.payload;
            state=state.data.map(patient => patient.key === updatedPatient.key ? updatedPatient : patient );
            return {
                data:state
            };
        default:
            return state;
    }
};
export default Upload;