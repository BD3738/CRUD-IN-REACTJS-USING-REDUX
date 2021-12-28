
export const addUser = (data) => {
    return ({
        type: "ADD_USER",
        payload: data,
    })
}
export const editUser = () => {
    return {
      type: "EDIT_USER",
    
    };
}
export const deleteUser = (i) => {
  return {
    type: "DELETE_USER",
    payload: i,
    };
   
    
};
export const updateUser = (data,i) => {
    return {
        type: "UPDATE_USER",
        payload: {
            dt: data,
            id:i
        }
     }
 };