import {authStore} from "~/store/auth";
import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if(process.client) {
        if(authStore().getToken()) {
            return navigateTo({ name: 'index' })
        }
    }
})