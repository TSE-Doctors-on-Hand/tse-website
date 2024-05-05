
import type { LoginRequest } from "~/types/api/auth/login";

import { authStore } from "~/store/auth";

import {apiFetch} from "./api";

const LOGIN_URL = '/api/auth/login'
const LOGOUT_URL = '/api/auth/logout'
const REGISTER_URL = '/api/auth/register'

export const auth = () => {

    const login = async (loginData: LoginRequest) => {

        try {

            await apiFetch(LOGIN_URL, {
                method: 'POST',
                body: loginData
            }).then((response => {
                authStore().setToken(response as string)

                console.log(response)
            }))
        } catch (err) {
            console.error(err)
            return null
        }
    }
    return {
        login
    }

}