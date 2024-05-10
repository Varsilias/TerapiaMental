import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import axios from 'axios';

export const useGetFeaturedReviews = (
  options?: UseMutationOptions<any, unknown, any, unknown>,
): UseMutationResult<unknown, unknown, any, unknown> => {
  return useMutation(
    () =>
      axios.get('http://localhost:3000/reviews?_limit=3').catch(error => {
        throw error;
      }),
    options,
  );
};
