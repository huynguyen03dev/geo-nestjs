import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlacesService } from './places.service';
import { UpdatePlaceDTO } from './DTOs/update-place.dto';
import { CreatePlaceDTO } from './DTOs/create-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdatePlaceDTO) {
    return this.placesService.update(id, updateData);
  }

  @Post()
  create(@Body() createData: CreatePlaceDTO) {
    return this.placesService.create(createData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(id);
  }
}
