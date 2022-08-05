import { QuantityEntity } from 'src/quantity/entity/quantity.schema';
import { SizeEntity } from 'src/size/entity/size.schema';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ColorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({ type: 'timestamp without time zone', select: false })
    created_at: Date;

    // @ManyToMany(() => SizeEntity, { nullable: true, cascade: true })
    // @JoinTable({ name: 'color_size' })
    // sizes?: SizeEntity[];

    @OneToMany(() => QuantityEntity, (quantity) => quantity.color)
    quantitys: QuantityEntity[];

    // @OneToMany(() => Product_Color_Entity, (pc) => pc.color)
    // colors: ProductEntity[];


    // @ManyToOne(() => ProductEntity, (product) => product.colors, {
    //     nullable: true,
    //     cascade: true,
    // })
    // @JoinColumn({ name: 'product_id' })
    // product_id?: ProductEntity;

    // @ManyToMany(() => ProductEntity, { nullable: true, cascade: true })
    // @JoinTable({ name: 'product_color' })
    // products?: ProductEntity[];
}