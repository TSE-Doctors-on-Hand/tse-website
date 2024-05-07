
// const apiFetch = $fetch.create({ baseURL: process.env.API_URL })

import {authStore} from "~/store/auth";

export const apiFetch = $fetch.create({
    baseURL: "http://localhost:8080"
})
