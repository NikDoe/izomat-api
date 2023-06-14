import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

class ErrorRequestType {
  @ApiProperty({ example: 'текст ошибки' })
  message: string;

  @ApiProperty({ example: 'описание ошибки' })
  error: string;
}

export class BadRequestErrorType extends ErrorRequestType {
  @ApiProperty({ example: HttpStatus.BAD_REQUEST })
  statusCode: number;
}

export class ConflictErrorType extends ErrorRequestType {
  @ApiProperty({ example: HttpStatus.CONFLICT })
  statusCode: number;
}
