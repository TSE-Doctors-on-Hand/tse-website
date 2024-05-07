import {authStore} from "~/store/auth";

const USER_URL = '/api/user/'

import {apiFetch} from "./api";

export const user = () => {

    const get = async () => {

        return await apiFetch(USER_URL, {
            method: 'GET',
            headers: {
                Token: authStore().hasToken() ? authStore().getToken()!! : ""
            }
        })

    }

    return {
        get
    }

}
