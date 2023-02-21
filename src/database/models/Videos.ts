import { 
  Column, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn } from "typeorm";
  import { v4 as uuid } from "uuid";
  import Category from "./Category";

@Entity("videos")
export default class Videos {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;
  
  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({name: "category_id"})
  category : Category;

  @Column()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}