export class UserDto {
  id: number;
  identifier: string;
  status: "admin" | "user";
  lastModified?: Date;
}
