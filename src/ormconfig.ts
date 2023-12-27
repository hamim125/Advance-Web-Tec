import { document } from "./document/entity/document.entity";
import { notice } from "./document/entity/notice.entity";
import { Subscription } from "./subscription/subscription.entity";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import { file } from "./document/entity/file.entity";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "prd",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: 'jannatul54',
    entities: [Subscription, document, file,notice],
    synchronize: true
}

export default config;