import {authStore} from "~/store/auth";
import {navigateTo} from "#app";

/**
 * Check if a user is authenticated on a user-only page
 *
 * If the user is not authenticated, it will redirect the user to the index page
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
    if(process.client) {
        if(!authStore().getToken()) {
            return navigateTo({ name: 'index' })
        }
    }
})