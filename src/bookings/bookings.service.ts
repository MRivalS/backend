import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingsService {
  create(data: any) {
    return {
      message: 'Booking berhasil dibuat',
      data,
    };
  }

  findAll() {
    return [];
  }
}
