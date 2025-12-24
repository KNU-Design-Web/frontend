import axios from "axios";
import retry, { exponentialDelay, isNetworkOrIdempotentRequestError } from "axios-retry";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

retry(api, {
    retries: 3,
    retryDelay: exponentialDelay,
    retryCondition: (error) => isNetworkOrIdempotentRequestError(error),
});
