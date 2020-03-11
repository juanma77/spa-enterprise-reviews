export interface Review {
    id?: number; // ? because this field is created at the DB level
    puntuaction: number;
    title: string;
    resume: string;
    ip: string;
    date: string;
    enterpriseName: string; 
    userName: string;
    created_At?: string; // ? because this field is created at the DB level
    update_at?: string; // ? because this field is created at the DB level  

}