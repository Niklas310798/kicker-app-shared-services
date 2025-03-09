import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role";
import { Permission } from "./Permission";

@Entity("role_permissions")
export class RolePermission {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Role)
  @JoinColumn()
  role: Role;

  @ManyToOne(() => Permission)
  @JoinColumn()
  permission: Permission;
}
