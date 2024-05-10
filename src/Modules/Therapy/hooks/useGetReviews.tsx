import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import axios from 'axios';

export const useGetReviews = (
  options?: UseMutationOptions<any, unknown, any, unknown>,
): UseMutationResult<unknown, unknown, any, unknown> => {
  return useMutation(
    () =>
      axios.get('http://localhost:3000/reviews').catch(error => {
        throw error;
      }),
    options,
  );
};
