/**
 * Register Data Transfer Object
 *
 * Used to send registration data
 *
 * @property {string} username
 * @property {string} password
 * @property {string} forename
 * @property {string} surname
 * @property {string} dateOfBirth Date of birth in DD/MM/YYYY format
 * @property {number} sex Sex Enum ( 0 for Male, 1 for Female)
 * @property {string[]} pronouns
 * @property {string} email
 * @property {string} phone
 * @property {string} postcode
 * @property {string} nextOfKin
 */
export interface RegisterRequest {
    username: string;
    password: string;
    forename: string;
    surname: string;
    dateOfBirth: string;
    sex: number;
    pronouns: string[];
    email: string;
    phone: string;
    postcode: string;
    nextOfKin: string;
}