export const errors = {
  401: {
    statusCode: 401,
    message: 'User UnAuthorized',
  },
  403: {
    statusCode: 403,
    message: 'Unknown Error',
  },
  404: {
    statusCode: 404,
    message: 'Not Found',
  },
} as const

export class ApiError extends Error {
  status: number

  message: string

  constructor(status: number, message: string) {
    super()
    this.name = 'Api-Error'
    this.status = status
    this.message = message
  }
}
