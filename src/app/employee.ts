export interface Employee {
    id: number;
    name: string;
    email: string;
    jobTitle: string;
    phone: string;
    imageUrl: string;
    employeeCode: string;
    employees: string;
}
export interface Cabinet {
    id: number;
    number: number;
    cabinetCode: string;
}

export interface GroupInfo {
    id: number;
    languageId: number;
    GroupInfoCode: string;
}
export interface GroupUser {
    id: number;
    group_Id: number;
    userId: number;
    groupUserCode: string;
}

export interface Language {
    id: number;
    name: string;
    languageCode: string;
}
export interface Role {
    id: number;
    name: string;
    roleCode: string;
}
export interface timeTable {
    id: number;
    groupId: number;
    data: string;
    timeTableCode: string;
}
