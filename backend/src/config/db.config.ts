import { Value } from '@itgorillaz/configify';

export class DBConfig {
  @Value('MONGODB_HOST')
  host: string;

  @Value('MONGODB_PORT', { parse: parseInt })
  port: number;

  @Value('MONGODB_USERNAME')
  username: string;

  @Value('MONGODB_PASSWORD')
  password: string;

  @Value('MONGODB_NAME')
  name: string;

  @Value('MONGODB_URI')
  uri: string;
}
