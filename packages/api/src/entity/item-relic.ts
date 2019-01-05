import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { Item } from "./item";
import { Relic } from "./relic";

@Entity()
export class ItemRelic {
  @PrimaryGeneratedColumn()
  id: number;
}
