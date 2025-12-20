import { Controller, Post, Get, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Body() data: any) {
    return this.bookingsService.create(data);
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }
}
