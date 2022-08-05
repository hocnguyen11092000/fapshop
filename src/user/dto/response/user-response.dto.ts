import { UserRole } from "src/utils/constant/enum/user-role.enum";

export interface UserResponse {
  id: number;
  username: string;
  role: UserRole;
  isAvailable: boolean;
  email: string;
  password?: string
}
