import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('corp')
export class CorpEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ default: '' })
    name: string;

    @Column({ default: '' })
    companyName: string;

    @Column({ default: true })
    enabled: boolean;

    @Column({ default: '' })
    cif: string;

    @Column({ default: '' })
    adress: string;

    @Column({ default: '' })
    fiscalAdress: string;

    @Column({ default: '' })
    iban: string;

    @Column({ default: '' })
    email: string;

    @Column({ default: '' })
    contactPerson: string;

    @Column({ default: '' })
    phone: string;

}
