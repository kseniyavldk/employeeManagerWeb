export interface User{
    id: number;
    name: string;
    lastname: string;
    patronymic: string;
    roleID: number;
    groupId: number;
    isHeadman: boolean;
    userCode: string;
}

export interface VUser{
    id: number;
    name: string;
    lastname: string;
    patronymic: string;
    rolename: string;
    groupname: string;
    headman: boolean;
    userCode: string;
}