import {defineStore} from "pinia";

export const authStore = defineStore({
    id: 'auth',
    state: () => ({
        token: JSON.parse(localStorage.getItem('token') as string)
    }),
    actions: {
        setToken(token: string) {
            this.token = token
            localStorage.setItem('token', JSON.stringify(token))
        },
        getToken(): string | null {
            return this.token
        },
        hasToken(): boolean {
            return !!this.token
        },
        logout() {
            this.token = null
            localStorage.removeItem('token')
        }
    }
})