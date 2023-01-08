export interface TimeTable{
    id: number;
    data: Date;
    groupId: number;
    cabinetId: number;
    timeTableCode: string;
}

export interface VTimeTable{
    id: number;
    data: Date;
    groupname: string;
    cabinet: number;
    fullname: string;
    timeTableCode: string;
}