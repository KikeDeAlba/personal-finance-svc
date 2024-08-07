import { Module } from "@nestjs/common";
import { PersonalFinanceConfigModule } from "./personal-finance/personal-finance.module";


const modules = [
    PersonalFinanceConfigModule
]

@Module({
    imports: modules,
    exports: modules
})
export class MongoConfigModule { }