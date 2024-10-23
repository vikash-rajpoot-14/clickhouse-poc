import { ClickhouseOrm } from "clickhouse-orm";
import 'dotenv/config';

const {CLICKHOUSE_USERNAME,CLICKHOUSE_HOST,CLICKHOUSE_PORT,CLICKHOUSE_DATABASE,CLICKHOUSE_PASSWORD} = process.env;

export const clickhouse = ClickhouseOrm({
  db: {
    name: CLICKHOUSE_DATABASE,
  },
  debug: true,
  client: {
    url: CLICKHOUSE_HOST,
    port: CLICKHOUSE_PORT,
    basicAuth: {
      username: CLICKHOUSE_USERNAME,
      password: CLICKHOUSE_PASSWORD,
    },
    debug: false,
    isUseGzip: true,
    format: "json", 
  },
});

async function checkConnection() {
    try {
        // await clickhouse.createDatabase();
       const result = await clickhouse.client.query(`SELECT 1`).toPromise();
       if (result) {
          console.log('Connection to ClickHouse is successful.');
       }
    } catch (error) {
       console.error('Error connecting to ClickHouse:', error.message);
    }
 }
 
 checkConnection();