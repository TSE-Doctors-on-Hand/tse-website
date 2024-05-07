export interface MatchRequest {
    symptoms: number[];
    postcode: string | null;
    distance: number;
}