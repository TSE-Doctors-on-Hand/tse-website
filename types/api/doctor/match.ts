/**
 * Match Request Data Transfer Object
 *
 * Used to send Match Requests to the backend
 *
 * @property {number[]} symptoms List of Symptom IDs
 * @property {string | null} postcode Postcode if not user's own
 * @property {number | null} limit Limit of results to show
 * @property {number} range Range in km
 */
export interface MatchRequest {
    symptoms: number[];
    postcode: string | null;
    limit: number | null;
    range: number;
}