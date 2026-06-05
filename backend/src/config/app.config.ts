import { Configuration, Value } from "@itgorillaz/configify";

@Configuration()
export class AppConfig {
  @Value("APP_PORT", { parse: (value: string) => parseInt(value) })
  port: number
}
