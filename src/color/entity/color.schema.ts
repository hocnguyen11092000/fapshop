import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ColorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({ type: 'timestamp without time zone', select: false })
    created_at: Date;

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