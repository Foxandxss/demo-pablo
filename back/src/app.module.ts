import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats/cat.schema';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

console.log('process.env.MONGODB', process.env.MONGODB);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB),
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
