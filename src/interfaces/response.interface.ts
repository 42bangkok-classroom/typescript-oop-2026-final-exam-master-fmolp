// ใช้เป็น response มาตรฐานทุก endpoint
export interface ApiResponse<T> {
  data: T | null;
  message: string;
  success: boolean;
}