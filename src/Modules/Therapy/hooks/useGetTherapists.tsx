import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import axios from 'axios';

export const useGetTherapists = (
  options?: UseMutationOptions<any, unknown, any, unknown>,
): UseMutationResult<unknown, unknown, any, unknown> => {
  return useMutation(
    () =>
      axios.get('http://localhost:3000/therapists').catch(error => {
        throw error;
      }),
    options,
  );
};
