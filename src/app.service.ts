import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache){}

  async getHello(name: string): Promise<any> {
    await this.cacheManager.set('name', name);
    return await this.cacheManager.get('name');
  }

  async delValue(key: string): Promise<void>{
    await this.cacheManager.del(key);
  }

  async resetCache(): Promise<void>{
    await this.cacheManager.reset();
  }
}
