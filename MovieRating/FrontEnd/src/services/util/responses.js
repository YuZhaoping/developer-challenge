import ApiError from '../api/error';
import { apiData, apiError } from '../api/entity';


export function checkStatus(resp) {
  if (resp.ok ||
     (resp.status > 399 && resp.status < 600)) {
    return resp;
  }

  throw new ApiError({
    message: resp.statusText,
    statusCode: resp.status
  });
}

export function parseJSON(resp) {
  if (resp.status == 204) {// No Content
    return new Promise(function(resolve) {
      resolve({});
    });
  } else {
    return resp.json();
  }
}

export function parseApiData(jsonBody) {
  const error = apiError(jsonBody);
  if (error) {
    throw new ApiError(error);
  }
  return apiData(jsonBody);
}
