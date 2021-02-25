import { fetchSinToken } from "../helpers/fetch"


export const startLogin = async (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth', { email, password}, 'POST');
        const body = await resp.json();

        console.log(body);
    }
}