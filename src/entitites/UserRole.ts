import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Role } from "./Role";

@Entity("user_roles")
export class UserRole {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Role)
  @JoinColumn()
  role: Role;
}
