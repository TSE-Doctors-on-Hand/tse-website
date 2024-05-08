/**
 * Imports needed for accessing users
 */
import {authStore} from "~/store/auth";
import {apiFetch} from "./api";

/**
 * API Addresses needed for accessing users
 */
const USER_URL = '/api/user/'

/**
 * Export block as a Nuxt Composable - to allow for access across the entire project
 */
export const user = () => {

    /**
     * Gets the Users' data if they are authenticated
     * No parameters are needed as the users' token is pulled from storage.
     */
    const get = async () => {

        // Makes an API call and waits for the Users' data to be returned
        return await apiFetch(USER_URL, {
            method: 'GET',
            headers: {
                Token: authStore().hasToken() ? authStore().getToken()!! : ""
            }
        })

    }

    // Allows the methods to be accessible via the composable
    return {
        get
    }

}
