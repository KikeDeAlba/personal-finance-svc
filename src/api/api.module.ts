import { ConfigurationModule } from '@/config/config.module';
import { ProviderModule } from '@/providers/provider.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ConfigurationModule,
        ProviderModule
    ]
})
export class ApiModule { }
