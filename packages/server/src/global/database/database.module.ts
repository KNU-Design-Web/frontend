import { Module } from '@nestjs/common';
import { DynamoDBDataSource } from './dynamodb.datasource';

@Module({
    providers: [DynamoDBDataSource],
    exports: [DynamoDBDataSource],
})
export class DatabaseModule {}
