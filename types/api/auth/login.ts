/**
 * Login Data Transfer Object
 *
 * Used to send login data
 *
 * @property {string} username
 * @property {string} password
 */
export interface LoginRequest {
    username: string;
    password: string;
}