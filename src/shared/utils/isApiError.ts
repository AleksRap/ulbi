interface ApiError {
  response: {
    data: {
      message: string;
    };
  };
}

export function isApiError(error: unknown): error is ApiError {
  if (
    error &&
    typeof error === 'object' &&
    'response' in error &&
    typeof error.response === 'object' &&
    error.response !== null &&
    'data' in error.response &&
    typeof error.response.data === 'object' &&
    error.response.data !== null &&
    'message' in error.response.data
  )
    return true;

  return false;
}
