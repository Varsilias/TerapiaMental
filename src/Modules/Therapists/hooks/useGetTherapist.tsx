import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query';
import axios from 'axios';

export const useGetTherapist = (
  options?: UseMutationOptions<any, unknown, any, unknown>,
): UseMutationResult<unknown, unknown, any, unknown> => {
  return useMutation(
    requestBody =>
      axios
        .get(`http://localhost:3000/reviews/${requestBody.id}`)
        .catch(error => {
          throw error;
        }),
    options,
  );
};
