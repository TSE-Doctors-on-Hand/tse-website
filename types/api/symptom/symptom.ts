/**
 * Symptom Data Transfer Object
 *
 * Used to receive Symptom information from the backend
 *
 * @property {number} id Symptom ID
 * @property {string} name
 */
export interface Symptom {
    id: number;
    name: string;
}