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

  @ApiProperty({ example: 'неверные данные' })
  message: string;
}

export class ConflictErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.CONFLICT })
  statusCode: number;

  @ApiProperty({ example: 'Введенные данные уже существуют' })
  message: string;
}

export class UnauthorizedErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  statusCode: number;

  @ApiProperty({ example: 'Вы не авторизованы' })
  message: string;
}

export class ForbiddenErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.FORBIDDEN })
  statusCode: number;

  @ApiProperty({ example: 'Доступ запрещен' })
  message: string;
}

export class NotFoundErrorType extends ErrorResponseType {
  @ApiProperty({ example: HttpStatus.NOT_FOUND })
  statusCode: number;

  @ApiProperty({ example: 'Объект не найден' })
  message: string;
}
