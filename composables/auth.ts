/**
 * Imports needed for Authentication
 */
import {authStore} from "~/store/auth";
import {apiFetch} from "./api";
import type {RegisterRequest} from "~/types/api/auth/register";
import type {LoginRequest} from "~/types/api/auth/login";

/**
 * API Addresses needed for Authentication
 */
const LOGIN_URL = '/api/auth/login'
const REGISTER_URL = '/api/auth/register'

/**
 * Export block as a Nuxt Composable - to allow for access across the entire project
 */
export const auth = () => {

    /**
     * Handles login request from login box
     * @param loginData The username and password of the user
     */
    const login = async (loginData: LoginRequest) => {

        let fail = null

        // Calls the REST API
        await apiFetch(LOGIN_URL, {
            method: 'POST',
            body: loginData
        }).then((response => {
            // Sets the Token in local storage
            authStore().setToken(response as string)
            fail = false
        })).catch((error) => {
            console.log(error)
            fail = true
        })

        // Return whether the request has failed or not
        return fail
    }

    /**
     * Handles registration requests from the register screen
     * @param registerData The registration details of the user
     */
    const register = async (registerData: RegisterRequest) => {

        let fail = null
        // Calls the REST API
        await apiFetch(REGISTER_URL, {
            method: 'POST',
            body: registerData
        }).then((response) => {
            // Sets the returned Token in local storage
            authStore().setToken(response as string)
            fail = false
        }).catch((error) => {
            console.log(error)
            fail = true
        })

        // Return whether the request has failed or not
        return fail

    }

    // Handles logging out of the service by removing all data from local storage
    const logout = async () => {
        authStore().logout()
    }

    // Allows the methods to be accessible via the composable
    return {
        login,
        register,
        logout
    }

}