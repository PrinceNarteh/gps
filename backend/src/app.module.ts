import { ConfigifyModule } from '@itgorillaz/configify';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DBConfig } from './config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigifyModule.forRootAsync(),
    MongooseModule.forRootAsync({
      inject: [DBConfig],
      useFactory: (dbConfig: DBConfig) => ({
        uri: dbConfig.uri,
        minPoolSize: 5,
        maxPoolSize: 10,
        socketTimeoutMS: 3000,
        serverSelectionTimeoutMS: 5000,
        writeConcern: {
          j: true,
          w: 'majority',
        },
        readPreference: 'primaryPreferred',
        retryReads: true,
        retryWrites: true,
      }),
    }),
    UsersModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
