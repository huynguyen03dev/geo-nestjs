import { Injectable } from '@nestjs/common';
import { UpdatePlaceDTO } from './DTOs/update-place.dto';
import { CreatePlaceDTO } from './DTOs/create-place.dto';

@Injectable()
export class PlacesService {
  findOne(id: string) {
    return `Place with id ${id}`;
  }
  
  findAll() {
    return 'All places';
  }

  update(id: string, updateData: UpdatePlaceDTO) {
    return `Place with id ${id} updated with data ${JSON.stringify(updateData)}`;
  }

  create(createData: CreatePlaceDTO) {
    return `Place created with data ${JSON.stringify(createData)}`;
  }

  remove(id: string) {
    return `Place with id ${id} removed`;
  }
}
