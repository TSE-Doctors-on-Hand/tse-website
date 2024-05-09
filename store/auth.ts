import {defineStore} from "pinia";

/**
 * Authentication Store
 *
 * This store handles authorisation tokens with the user's local storage
 */
export const authStore = defineStore({
    id: 'auth', // Auth identifier

    /**
     * Initialises the state of authStore
     * @return {string} Token
     */
    state: () => ({
        token: JSON.parse(localStorage.getItem('token') as string)
    }),

    actions: {

        /**
         * Sets the authentication token in the user's local storage
         * @param token
         */
        setToken(token: string) {
            this.token = token
            localStorage.setItem('token', JSON.stringify(token))
        },

        /**
         * Retrieves the authentication from the user's local storage, if set
         *
         * @return {string} Token
         * @return {null} if the token is not present
         */
        getToken(): string | null {
            return this.token
        },

        /**
         * Checks if the user has a token
         */
        hasToken(): boolean {
            return !!this.token
        },

        /**
         * Removes the token from the user's local storage
         */
        logout() {
            this.token = null
            localStorage.removeItem('token')
        }
    }
})