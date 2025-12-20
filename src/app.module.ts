import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
// import { NewsModule } from './news/news.module';
// import { PromosModule } from './promos/promos.module';
// import { CancellationsModule } from './cancellations/cancellations.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    AuthModule,
    BookingsModule,
    TestModule,
    // NewsModule,
    // PromosModule,
    // CancellationsModule,
  ],
})
export class AppModule {}
