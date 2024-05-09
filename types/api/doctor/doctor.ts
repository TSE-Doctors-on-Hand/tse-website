/**
 * Matched Doctor Data Transfer Object
 *
 * Used to send a Matched Doctor from the backend
 *
 * @property {string} forename Doctor's forename
 * @property {string} surname Doctor's surname
 * @property {string} aboutMe Doctor's aboutMe
 * @property {string[]} specialties Doctor's specialty names
 * @property {string} practiceName Doctor's closest practice name
 * @property {string} practiceAddress Practice address
 * @property {string} email Doctor's email
 * @property {string} phone Doctor's phone
 * @property {number} similarity Similarity score (0.56 = 56%)
 * @property {number} distance Distance in km
 */
export interface MatchedDoctor {

    forename: string;
    surname: string;
    aboutMe: string;
    specialties: string[];
    practiceName: string;
    practiceAddress: string;
    email: string;
    phone: string;
    similarity: number;
    distance: number;

}