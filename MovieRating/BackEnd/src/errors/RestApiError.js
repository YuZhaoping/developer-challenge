
export default class RestApiError extends Error {
  constructor(message, cause) {
    super(message);

    this.name = 'RestApiError';

    this.errorCode = null;
    this.errors = null;

    this.statusCode = 500;

    if (cause) {
      this.addError(cause);
    }
  }

  setErrorCode(errorCode) {
    this.errorCode = errorCode;
    return this;
  }

  getErrorCode() {
    return this.errorCode;
  }

  addError(error) {
    if (error === this) {
      return this;
    } else if (error instanceof Error) {
      if (!this.errors) {
        this.errors = [];
      }
      this.errors.push(error);

      if (!this.errorCode) {
        this.errorCode = error.code;
      }
    }
    return this;
  }

  getErrors() {
    return this.errors;
  }

  setStatusCode(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  getStatusCode() {
    return this.statusCode || 500;
  }

  simplify(includesStack) {
    const simplified = {
      code: this.errorCode,
      statusCode: this.statusCode,
      message: this.message
    };

    if (this.errors) {
      const simplifiedErrs = this.errors.map(err => doSimplify(err, includesStack));

      simplified.errors = simplifiedErrs;
    }

    return simplified;
  }

}

function doSimplify(error, includesStack) {
  if (error instanceof RestApiError) {
    return error.simplify(includesStack);
  } else {
    const simplified = {
      code: error.code,
      message: error.message
    };

    if (includesStack) {
      simplified.stack = error.stack;
    }

    return simplified;
  }
}
