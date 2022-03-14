import { Category } from 'src/category/category';
export declare class Capability {
    id: number;
    name: string;
    category: Category;
    logEvent(): void;
    logUpdate(): void;
    logRemove(): void;
}
