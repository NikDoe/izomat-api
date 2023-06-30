import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGlassDto {
  @IsInt({ message: 'поле цены не должно содеражать буквы' })
  price = 0;

  @IsNotEmpty({ message: 'поле vendor_code обязательно для заполнения' })
  vendor_code: string;

  @IsNotEmpty({ message: 'поле name обязательно для заполнения' })
  name: string;

  @IsNotEmpty({ message: 'поле description обязательно для заполнения' })
  description: string;

  @IsString({ message: 'поле images должно быть строкой' })
  @IsOptional()
  images?: string | null;

  @IsInt({ message: 'поле in_stock не должно содеражать буквы' })
  in_stock = 0;

  @IsBoolean({ message: 'поле new должно быть типа BOOLEAN' })
  new = false;

  @IsInt({ message: 'поле popularity не должно содеражать буквы' })
  @IsNotEmpty({ message: 'поле popularity обязательно для заполнения' })
  popularity: number;
}
