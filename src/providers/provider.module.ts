import { Module } from "@nestjs/common";
import { MongoConnectionsModule } from "./mongo/mongo-connections.module";

@Module({
    imports: [
        MongoConnectionsModule
    ]
})
export class ProviderModule { }