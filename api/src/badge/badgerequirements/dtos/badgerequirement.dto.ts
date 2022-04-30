import { Expose } from "class-transformer";
import { BadgeDto } from '../../dtos/badge.dto';

export class BadgeRequirementDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    description: string;

    @Expose()
    badge: BadgeDto;
}