import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

class ErrorResponseType {
  @ApiProperty({ example: 'текст ошибки' })
  message: string;

  @ApiProperty({ example: 'описание ошибки' })
  error: string;
}

export class BadRequestErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.BAD_REQUEST })
  statusCode: number;
}

export class ConflictErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.CONFLICT })
  statusCode: number;
}

export class UnauthorizedErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  statusCode: number;
}

export class ForbiddenErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.FORBIDDEN })
  statusCode: number;
}
