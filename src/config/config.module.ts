import { Global, Module } from "@nestjs/common";
import { DatabaseConfigModule } from "./databases/database-config.module";
import { ConfigModule } from "@nestjs/config";
import { databaseConfigs } from "./databases";

const modules = [
    DatabaseConfigModule
]

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [...databaseConfigs]
        }),
        ...modules
    ],
    exports: modules
})
export class ConfigurationModule { }