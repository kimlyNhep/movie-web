import { ErrorResponse } from '../src/generated/graphql';

export const toErrorMap = (errors: ErrorResponse[]) => {
  let errorMap: { field: string; message: string } = { field: '', message: '' };
  errors.forEach(({ field, message }) => {
    errorMap = { field, message };
  });

  return errorMap;
};
