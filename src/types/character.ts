export interface Character {
    id: number;
    name: string;
    breed_group?: string; 
    temperament?: string;  
    life_span: string;    
    image?: {
        url: string;      
    };
}
