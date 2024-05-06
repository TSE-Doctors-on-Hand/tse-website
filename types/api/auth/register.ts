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