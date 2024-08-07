import { Module } from "@nestjs/common";
import { MongoConfigModule } from "./mongo/mongo-config.module";

const modules = [
    MongoConfigModule
]

@Module({
    imports: modules,
    exports: modules
})
export class DatabaseConfigModule { }