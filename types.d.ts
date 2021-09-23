export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    userId?: number;
    fullName: string;
    email: string;
    passwordHash: string;
}

export interface Schedule {
    scheduleId?: number;
    companyName: string;
    datetime: string;
    userId: number;
}