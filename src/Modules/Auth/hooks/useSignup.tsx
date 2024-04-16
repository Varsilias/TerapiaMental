import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import {useHttp} from '../../../General/hooks/useHttp';

export function useSignup(
  options?: UseMutationOptions<any, unknown, any, unknown>,
): UseMutationResult<unknown, unknown, any, unknown> {
  const api = useHttp();

  return useMutation(
    requestBody =>
      api.post('/auth/sign-up', requestBody).catch(error => {
        throw error;
      }),
    options,
  );
}
