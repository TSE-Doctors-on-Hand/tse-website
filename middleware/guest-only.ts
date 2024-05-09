import {authStore} from "~/store/auth";
import {navigateTo} from "#app";

/**
 * Check if a user is authenticated on a guest-only page
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
    if(process.client) {
        if(authStore().getToken()) {
            return navigateTo({ name: 'index' })
        }
    }
})