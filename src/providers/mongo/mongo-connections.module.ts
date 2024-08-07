import { PersonalFinanceConfigModule } from "@/config/databases/mongo/personal-finance/personal-finance.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PersonalFinanceConnection } from "./connections/personal-finance.connection";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [PersonalFinanceConfigModule],
            useClass: PersonalFinanceConnection,
            inject: [PersonalFinanceConnection],
            connectionName: 'personal-finance'
        })
    ],
    providers: [
        PersonalFinanceConnection
    ]
})
export class MongoConnectionsModule { }