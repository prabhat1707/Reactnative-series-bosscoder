import axios from "axios"


export const endPoint = "https://69c926c968edf52c954e4688.mockapi.io/api/v1/users"

export const getUserData = async ({onSuccess,onError}) => {
    try {
         const userData = await axios.get(endPoint)
         onSuccess(userData.data)
    } catch (error:any) {
        onError(error.message)
    }
   
}

export const getUserByID = async () => {
    const userData = await axios.get(`${endPoint}/1`)
    console.log(JSON.stringify(userData.data))
}

export const deleteUser = async (id,{onSuccess,onError}) => {
    try {
        const userData = await axios.delete(`${endPoint}/${id}`)
        onSuccess()
    } catch (e:any) {
        console.log(e.message)
    }

}