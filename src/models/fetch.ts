export interface FetchFunc {
    (input: RequestInfo, init?: RequestInit): Promise<Response>;
}
