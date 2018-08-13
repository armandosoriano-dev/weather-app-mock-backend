import { Controller, Get, Query } from '@nestjs/common';
import { CITIES_DATA } from './weather.mock';

@Controller('weather')
export class WeatherController {
  @Get()
  getData(@Query() query: any) {
    return CITIES_DATA.find(city => city.id.toString() === query.id);
  }
}

@Controller('group')
export class WeatherGroupController {
  @Get()
  getData(@Query() query: any) {
    return {
      cnt: 4,
      list: CITIES_DATA,
    };
  }
}
