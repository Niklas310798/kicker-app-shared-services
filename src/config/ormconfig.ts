import { DataSource } from "typeorm";
import { User } from "../entitites/User";
import { UserRole } from "../entitites/UserRole";
import { Role } from "../entitites/Role";
import { RolePermission } from "../entitites/RolePermission";
import { Permission } from "../entitites/Permission";
import { AuthToken } from "../entitites/AuthToken";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "postgres",
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME || "admin",
  password: process.env.DATABASE_PASSWORD || "admin-dev", // Ersetze durch dein Passwort
  database: process.env.DATABASE_NAME || "user-db",
  synchronize: true, // Setze auf false in Produktion
  logging: true,
  entities: [Role, RolePermission, User, UserRole, Permission, AuthToken],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;
