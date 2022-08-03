import { CategoryEntity } from 'src/category/entity/category.schema';
import { ColorEntity } from 'src/color/entity/color.schema';
import { ImageEntity } from 'src/image/entity/image.schema';
import { SizeEntity } from 'src/size/entity/size.schema';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    description: string;

    @Column()
    discount: number;



    @ManyToOne(() => CategoryEntity, (category) => category.products, {
        nullable: true,
        cascade: true,
    })
    @JoinColumn({ name: 'category_id' })
    category_id?: CategoryEntity;

    @ManyToMany(() => ColorEntity, { nullable: true, cascade: true })
    @JoinTable({ name: 'product_color' })
    colors?: ColorEntity[];

    @ManyToMany(() => SizeEntity, { nullable: true, cascade: true })
    @JoinTable({ name: 'product_size' })
    sizes?: SizeEntity[];

    // @OneToMany(() => Product_Size_Entity, (ps) => ps.product)
    // sizes: SizeEntity[];

    // @OneToMany(() => Product_Color_Entity, (pc) => pc.product)
    // colors: ColorEntity[];

    @OneToMany(() => ImageEntity, (image) => image.product_id)
    images: ImageEntity[];

}