export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  admin: "admin",
  editor: "editor",
  guest: "guest",
};
const admin = RoleDescription.admin;
console.log(admin);
