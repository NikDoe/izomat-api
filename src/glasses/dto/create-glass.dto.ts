import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGlassDto {
  @ApiProperty({ example: 0 })
  @IsInt({ message: 'поле цены не должно содеражать буквы' })
  price = 0;

  @ApiProperty({ example: '123124fdf' })
  @IsNotEmpty({ message: 'поле vendor_code обязательно для заполнения' })
  vendor_code: string;

  @ApiProperty({ example: 'Название объекта' })
  @IsNotEmpty({ message: 'поле name обязательно для заполнения' })
  name: string;

  @ApiProperty({ example: 'Текст с описанием' })
  @IsNotEmpty({ message: 'поле description обязательно для заполнения' })
  description: string;

  @ApiProperty({ examples: ['https://abskdb1jb4j1.jpg', '781324gbjh1.jpg'] })
  @IsString({ message: 'поле images должно быть строкой' })
  @IsOptional()
  images?: string | null;

  @ApiProperty({ example: 0 })
  @IsInt({ message: 'поле in_stock не должно содеражать буквы' })
  in_stock = 0;

  @ApiProperty({ example: false })
  @IsBoolean({ message: 'поле new должно быть типа BOOLEAN' })
  new = false;

  @ApiProperty({ example: 0 })
  @IsInt({ message: 'поле popularity не должно содеражать буквы' })
  @IsNotEmpty({ message: 'поле popularity обязательно для заполнения' })
  popularity: number;
}
