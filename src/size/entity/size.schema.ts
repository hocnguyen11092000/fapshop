import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SizeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({ type: 'timestamp without time zone', select: false })
    created_at: Date;


    // @ManyToOne(() => ProductEntity, (product) => product.sizes, {
    //     nullable: true,
    //     cascade: true,
    // })
    // @JoinColumn({ name: 'product_id' })
    // product_id?: ProductEntity;
}