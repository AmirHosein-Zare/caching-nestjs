import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache){}

  async getHello(): Promise<any> {
    await this.cacheManager.set('key', 'value');
    return await this.cacheManager.get('key');
  }
}
