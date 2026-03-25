// ใช้เป็น response มาตรฐานทุก endpoint
export interface ApiResponse<T> {
  "success": true,
  "data": {
    "service": "purchase-api",
    "version": "1.0.0"
  },
  "message": "Hello NestJS"
}