import { ColorEntity } from 'src/color/entity/color.schema';
import { QuantityEntity } from 'src/quantity/entity/quantity.schema';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SizeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({ type: 'timestamp without time zone', select: false })
    created_at: Date;

    @OneToMany(() => QuantityEntity, (quantity) => quantity.size)
    quantitys: QuantityEntity[];

    // @ManyToMany(() => ColorEntity, { nullable: true, cascade: true })
    // @JoinTable({ name: 'color_size' })
    // colors?: ColorEntity[];


    // @ManyToOne(() => ProductEntity, (product) => product.sizes, {
    //     nullable: true,
    //     cascade: true,
    // })
    // @JoinColumn({ name: 'product_id' })
    // product_id?: ProductEntity;
}