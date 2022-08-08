import { Connection, createConnection, getConnectionOptions } from "typeorm";
// require("dotenv").config();

const config: any = {
  type: "postgres",
  // url: process.env.DATABASE_URL,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  logging: true,
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
  cli: {
    migrationsDir: "./src/shared/infra/typeorm/migrations",
  },
};
export default async (
  host = config.host || "localhost"
): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(config, {
      host,
      database:
        process.env.NODE_ENV === "test"
          ? "disciplinas_test"
          : defaultOptions.database,
    })
  );
};
