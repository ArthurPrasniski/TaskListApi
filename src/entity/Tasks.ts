import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity()

export class Tasks {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tittle: string
 
    @Column()
    description: string
    
    @Column({
        default: false
    })
    finished: boolean

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date


}