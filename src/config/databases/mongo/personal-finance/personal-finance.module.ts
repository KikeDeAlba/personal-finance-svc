import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import personalFinanceConfig from "./personal-finance.config";
import { PersolFinanceConfigService } from "./personal-finance.service";

const modules = [
    ConfigService,
    PersolFinanceConfigService
]

@Module({
    imports: [
        ConfigModule.forFeature(personalFinanceConfig)
    ],
    providers: modules,
    exports: modules
})
export class PersonalFinanceConfigModule { }