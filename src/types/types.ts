 export enum UserRole {
    admin = "admin",
    teamMember = "teamMember"
 }

 export interface UserType {
    firstName: string
    lastName: string
    email: string
    id: string
    imageUrl?: string
    company?: {
        name: string
        position: string
    } | null;
    role: UserRole
}
