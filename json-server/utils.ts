import { ApiError } from './types';

export function isApiError(error: unknown): error is ApiError {
  if (error && typeof error === 'object' && 'message' in error) return true;
  return false;
}
