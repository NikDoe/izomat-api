import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Glass extends Model {
  @Column({ defaultValue: 0, type: DataType.INTEGER })
  price: number;

  @Column({ type: DataType.STRING, allowNull: false })
  vendor_code: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING })
  images: string;

  @Column({ defaultValue: 0, type: DataType.INTEGER })
  in_stock: number;

  @Column({ defaultValue: false, type: DataType.BOOLEAN })
  new: boolean;

  @Column({ type: DataType.INTEGER })
  popularity: number;
}
