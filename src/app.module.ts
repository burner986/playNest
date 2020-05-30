import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PxModule } from './px/px.module';

@Module({
  imports: [
    PxModule,
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'client/dist'), // New
    }), // New
    GraphQLModule.forRoot({
      // debug: false,
      // playground: false,
      path: '/api',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/playNest')
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
