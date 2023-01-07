export interface User{
    id: number;
    name: string;
    lastname: string;
    patronymic: string;
    roleID: number;
    isHeadman: boolean;
    userCode: string;
}

export interface VUser{
    id: number;
    name: string;
    lastname: string;
    patronymic: string;
    rolename: string;
    headman: boolean;
    userCode: string;
}