

import { apiFetch } from './api';
import type {MatchRequest} from "~/types/api/doctor/matchrequest";
import type {MatchDoctor} from "~/types/api/doctor/matchdoctor";

const DOCTOR_URL = "/api/doctor/"
const MATCH_URL = `${DOCTOR_URL}/match/`

export const doctor = () => {

    const match = async (matchRequest: MatchRequest) => {

        return await apiFetch(MATCH_URL, {
            method: 'GET',
            body: matchRequest,
        })

    }

    return {
        match
    }

}