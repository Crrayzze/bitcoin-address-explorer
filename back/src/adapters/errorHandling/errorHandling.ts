import { GenericError } from "domain/generic.error.entity";

export class ErrorHandling {
  static createApplicationError (applicationError: Error, errorMessage: string = "Error: an unknown error occured"): Error {
    let message: string
    let errorCode: number = 400
    if (applicationError instanceof GenericError) {
      message = applicationError.message
      errorCode = applicationError.statusCode
    }
    else {
      console.log(applicationError.message)
      message = errorMessage
    }
    const error: GenericError = new GenericError(message, errorCode)
    return error
  }
}