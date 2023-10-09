import { StateSchema } from 'app/providers';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading ?? false;
