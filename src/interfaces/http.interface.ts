export interface BodyResponse {
    statusCode?: number,
    data: Object,
}
  
export interface BodyError {
    statusCode?: number,
    message?: string,
}

export interface Response {
    statusCode: number,
    body: string,
    headers: Record<string,unknown>
  }
