export interface MatchRequest {
    symptoms: number[];
    postcode: string | null;
    limit: number | null;
    range: number;
}