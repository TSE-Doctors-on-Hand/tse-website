

import { apiFetch } from './api';
import type {MatchRequest} from "~/types/api/doctor/match";

const DOCTOR_URL = "/api/doctor/"
const MATCH_URL = `${DOCTOR_URL}/match/`

export const doctor = () => {

    const match = async (matchRequest: MatchRequest) => {

        await apiFetch(MATCH_URL, {
            method: 'GET',
            body: matchRequest,
        }).then((response) => {



        })

    }

}