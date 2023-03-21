import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'user',
        password: 'password',
        database: 'postgres',
        autoLoadEntities: true,
        migrations: ['  src/migrations/*{.ts,.js}'],
        migrationsTableName: 'migrations_history',
        migrationsRun: true,
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
