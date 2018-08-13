import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  WeatherController,
  WeatherGroupController,
} from './controllers/weather/weather.controller';

@Module({
  imports: [],
  controllers: [AppController, WeatherController, WeatherGroupController],
  providers: [AppService],
})
export class AppModule {}
