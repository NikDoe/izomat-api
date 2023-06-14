import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  Type,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

type FunctionType = Type<any> | undefined;

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      const errorsMessage = errors
        .map((item) => {
          if (item.constraints) return Object.values(item.constraints);
        })
        .join(', ');

      throw new BadRequestException(`${errorsMessage}`);
    }
    return value;
  }

  private toValidate(metatype: FunctionType): boolean {
    const types: FunctionType[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
