import { ErrorResponse } from '../src/generated/graphql';

export const toErrorMap = (errors: ErrorResponse[]) => {
  let errorMap: any;
  errors.forEach(({ field, message }) => {
    errorMap = { field, message };
  });

  return errorMap;
};
