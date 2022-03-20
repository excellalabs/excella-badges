import { Skill } from 'src/skill/skill';
export declare class Capability {
    id: number;
    name: string;
    skill: Skill[];
    logEvent(): void;
    logUpdate(): void;
    logRemove(): void;
}
