import { ProductEntity } from 'src/product/entity/product.schema';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    public_id: string;

    @CreateDateColumn({ type: 'timestamp without time zone', select: false })
    created_at: Date;


    @ManyToOne(() => ProductEntity, (product) => product.images, {
        nullable: true,
        cascade: true,
    })
    @JoinColumn({ name: 'product_id' })
    product_id?: ProductEntity;
}