import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { UserRole } from "src/utils/constant/enum/user-role.enum";

@Entity('user')
export class UserEntity extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({ select: false })
    password?: string;

    @Column({ default: UserRole.User })
    role: UserRole;

    @Column({ default: true })
    isAvailable: boolean;

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}