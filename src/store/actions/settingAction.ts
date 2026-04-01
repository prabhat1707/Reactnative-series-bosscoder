export const changeUserType = (role:string) => {
    return {
        type: 'CHANGE_USER_TYPE',
        payload : role
    }
}
