import { Capability } from 'src/capability/capability';
export declare class Category {
    id: number;
    name: string;
    capability: Capability[];
    logEvent(): void;
    logUpdate(): void;
    logRemove(): void;
}
