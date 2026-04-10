import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePlaceDTO } from './DTOs/update-place.dto';
import { CreatePlaceDTO } from './DTOs/create-place.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placeRepository: Repository<Place>, 
  ) {}
  async findOne(id: string) : Promise<Place> {
    const place = await this.placeRepository.findOneBy({ id });
    if (!place) {
      throw new NotFoundException(`Place with id ${id} not found`);
    }

    return place;
  }
  
  async findAll() : Promise<Place[]> {
    return this.placeRepository.find();
  }

  async update(id: string, updateData: UpdatePlaceDTO) : Promise<Place> {
    const partial: Partial<Place> = {
      id,
      name: updateData.name,
      category: updateData.category,
      address: updateData.address,
    };
  
    if (updateData.lat !== undefined || updateData.lng !== undefined) {
      if (updateData.lat === undefined || updateData.lng === undefined) {
        throw new BadRequestException('Both latitude and longitude must be provided together');
      }

      partial.location = {
        type: 'Point',
        coordinates: [updateData.lng, updateData.lat],
      }
    }

    const place = await this.placeRepository.preload(partial);
    if (!place) {
      throw new NotFoundException(`Place with id ${id} not found`);
    }

    await this.placeRepository.save(place);
    return place;
  }

  async create(createData: CreatePlaceDTO) : Promise<Place> {
    const place = this.placeRepository.create({
      name: createData.name,
      category: createData.category,
      address: createData.address,
      location: {
        type: 'Point',
        coordinates: [createData.lng, createData.lat],
      },
    });

    await this.placeRepository.save(place);
    return place;
  }

  async remove(id: string) : Promise<void> {
    const result = await this.placeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Place with id ${id} not found`);
    }
  }
}
