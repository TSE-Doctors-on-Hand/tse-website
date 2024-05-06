import type {LoginRequest} from "~/types/api/auth/login";

import {authStore} from "~/store/auth";

import {apiFetch} from "./api";
import type {RegisterRequest} from "~/types/api/auth/register";

const LOGIN_URL = '/api/auth/login'
const LOGOUT_URL = '/api/auth/logout'
const REGISTER_URL = '/api/auth/register'

export const auth = () => {

    const login = async (loginData: LoginRequest) => {

        let fail = null

        await apiFetch(LOGIN_URL, {
            method: 'POST',
            body: loginData
        }).then((response => {
            authStore().setToken(response as string)

            console.log(response)
            fail = false
        })).catch((error) => {
            console.log(error)
            fail = true
        })

        return fail
    }

    const register = async (registerData: RegisterRequest) => {

        let fail = null
        await apiFetch(REGISTER_URL, {
            method: 'POST',
            body: registerData
        }).then((response) => {
            authStore().setToken(response as string)

            console.log(response)
            fail = false
        }).catch((error) => {
            console.log(error)
            fail = true
        })

    }

    return {
        login,
        register
    }

}