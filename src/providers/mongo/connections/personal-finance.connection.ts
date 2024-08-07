import { PersolFinanceConfigService } from "@/config/databases/mongo/personal-finance/personal-finance.service";
import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class PersonalFinanceConnection implements MongooseOptionsFactory {
    constructor(private readonly configService: PersolFinanceConfigService) { }

    createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
        const host = this.configService.host;
        const port = this.configService.port;
        const username = this.configService.username;
        const password = this.configService.password;
        const database = this.configService.database;

        return {
            uri: `mongodb://${username}:${password}@${host}:${port}/${database}`,
        }
    }
}
