import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { PlacesService } from './places.service';
import { UpdatePlaceDTO } from './DTOs/update-place.dto';
import { CreatePlaceDTO } from './DTOs/create-place.dto';
import { Place } from './entities/place.entity';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<Place> {
    return this.placesService.findOne(id);
  }

  @Get()
  findAll() : Promise<Place[]> {
    return this.placesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdatePlaceDTO) : Promise<Place> {
    return this.placesService.update(id, updateData);
  }

  @Post()
  create(@Body() createData: CreatePlaceDTO) : Promise<Place> {
    return this.placesService.create(createData);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) : Promise<void> {
    return this.placesService.remove(id);
  }
}
