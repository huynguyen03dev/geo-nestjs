import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaceDTO } from './create-place.dto';

export class UpdatePlaceDTO extends PartialType(CreatePlaceDTO) {}
