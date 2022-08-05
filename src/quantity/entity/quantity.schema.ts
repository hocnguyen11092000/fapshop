import { ColorEntity } from 'src/color/entity/color.schema';
import { ProductEntity } from 'src/product/entity/product.schema';
import { SizeEntity } from 'src/size/entity/size.schema';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuantityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    quantity_size: number;

    @Column({ nullable: true })
    quantity_color: number;

    @ManyToOne(() => ProductEntity, (product) => product.quantitys, {
        nullable: true,
        cascade: true,
    })
    @JoinColumn({ name: 'product_id' })
    product_id?: ProductEntity;

    @ManyToOne(() => SizeEntity, (size) => size.quantitys, {
        nullable: true,
        cascade: true,
    })
    @JoinColumn({ name: 'size_id' })
    size?: SizeEntity;

    @ManyToOne(() => ColorEntity, (color) => color.quantitys, {
        nullable: true,
        cascade: true,
    })
    @JoinColumn({ name: 'color_id' })
    color?: ColorEntity;

}