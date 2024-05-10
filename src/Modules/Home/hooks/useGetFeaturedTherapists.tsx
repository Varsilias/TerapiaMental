import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import axios from 'axios';

export const useGetFeaturedTherapists = (
  options?: UseMutationOptions<any, unknown, any, unknown>,
): UseMutationResult<unknown, unknown, any, unknown> => {
  return useMutation(
    () =>
      axios.get('http://localhost:3000/therapists?_limit=3').catch(error => {
        throw error;
      }),
    options,
  );
};
