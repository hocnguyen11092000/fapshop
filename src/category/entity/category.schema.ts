import { ProductEntity } from 'src/product/entity/product.schema';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({ type: 'timestamp without time zone', select: false })
    created_at: Date;

    @OneToMany(() => ProductEntity, (product) => product.category_id)
    products: ProductEntity[];
}