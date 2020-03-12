export interface Administrator {
    id?: number; // ? because this field is created at the DB level
    administratorName: string;
    password: string; 
    created_At?: string; // ? because this field is created at the DB level
    update_at?: string; // ? because this field is created at the DB level  

}