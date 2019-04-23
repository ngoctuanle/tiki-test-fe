import { REQUEST_FAIL } from '../constants/Actions';

export const requestFail = (payload) => ({
    type: REQUEST_FAIL,
    payload
});