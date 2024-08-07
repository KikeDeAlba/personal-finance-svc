import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PersolFinanceConfigService {
    constructor(private readonly config: ConfigService) { }

    get host(): string {
        return this.config.get<string>('personal-finance.HOST');
    }

    get port(): number {
        return this.config.get<number>('personal-finance.PORT');
    }

    get username(): string {
        return this.config.get<string>('personal-finance.USERNAME');
    }

    get password(): string {
        return this.config.get<string>('personal-finance.PASSWORD');
    }

    get database(): string {
        return this.config.get<string>('personal-finance.DATABASE');
    }

    get authSource(): string {
        return this.config.get<string>('personal-finance.AUTH_SOURCE');
    }
}
