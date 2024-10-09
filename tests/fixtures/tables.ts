import postgres from "npm:postgres";
import { isTableExists } from "../../src/pg.ts";

export const createOrgTable = async (sql: postgres.Sql) =>
  (await isTableExists(sql, "org")) ||
  (await sql`
    CREATE TABLE IF NOT EXISTS org
    (
        id                   BIGSERIAL PRIMARY KEY,
        name                 VARCHAR(256) NOT NULL,
        url                  TEXT,
        smallint_col         SMALLINT,
        integer_col          INTEGER,
        bigint_col           BIGINT,
        decimal_col          DECIMAL(10, 5),
        numeric_col          NUMERIC(10, 5),
        real_col             REAL,
        double_precision_col DOUBLE PRECISION,
        smallserial_col      SMALLSERIAL,
        serial_col           SERIAL,
        bigserial_col        BIGSERIAL,
        money_col            MONEY,
        char_col             CHAR(10),
        varchar_col          VARCHAR(50),
        text_col             TEXT,
        bytea_col            BYTEA,
        timestamp_col        TIMESTAMP,
        timestamptz_col      TIMESTAMPTZ,
        timestampwtz_col     TIMESTAMP WITH TIME ZONE,
        date_col             DATE,
        time_col             TIME,
        interval_col         INTERVAL,
        boolean_col          BOOLEAN,
        point_col            POINT,
        line_col             LINE,
        lseg_col             LSEG,
        box_col              BOX,
        path_col             PATH,
        polygon_col          POLYGON,
        circle_col           CIRCLE,
        cidr_col             CIDR,
        inet_col             INET,
        macaddr_col          MACADDR,
        macaddr8_col         MACADDR8,
        bit_col              BIT(8),
        varbit_col           VARBIT(8),
        uuid_col             UUID,
        json_col             JSON,
        jsonb_col            JSONB,
        xml_col              XML,
        tsquery_col          TSQUERY,
        tsvector_col         TSVECTOR,
        int4range_col        INT4RANGE,
        int8range_col        INT8RANGE,
        numrange_col         NUMRANGE,
        tsrange_col          TSRANGE,
        tstzrange_col        TSTZRANGE,
        daterange_col        DATERANGE
    )`);

export const createUserTable = async (sql: postgres.Sql) =>
  (await isTableExists(sql, "user")) ||
  (await sql`
    CREATE TABLE IF NOT EXISTS "user"
    (
        id     BIGSERIAL PRIMARY KEY,
        name   TEXT        NOT NULL,
        email  TEXT UNIQUE NOT NULL,
        org_id BIGINT REFERENCES org (id)
    )`);

export const createWidgetTable = async (sql: postgres.Sql) =>
  (await isTableExists(sql, "widget")) ||
  (await sql`
    CREATE TABLE IF NOT EXISTS widget
    (
        id          BIGSERIAL PRIMARY KEY,
        name        TEXT NOT NULL,
        description TEXT,
        num1        NUMERIC(10, 2),
        num2        NUMERIC,
        num3        real,
        num4        double precision,
        org_id      BIGINT REFERENCES org (id),
        UNIQUE (id, org_id)
    )`);

export const createPartTable = async (sql: postgres.Sql) =>
  (await isTableExists(sql, "part")) ||
  (await sql`
      CREATE TABLE IF NOT EXISTS part
      (
          id          BIGSERIAL PRIMARY KEY,
          name        TEXT   NOT NULL,
          description TEXT,
          widget_id   BIGINT NOT NULL,
          org_id      BIGINT NOT NULL,
          FOREIGN KEY (widget_id, org_id) REFERENCES widget (id, org_id)
      )`);

export const createPartComponentTable = async (sql: postgres.Sql) =>
  (await isTableExists(sql, "part_component")) ||
  (await sql`
    CREATE TABLE IF NOT EXISTS part_component
    (
        id          BIGSERIAL PRIMARY KEY,
        name        TEXT   NOT NULL,
        description TEXT,
        org_id      BIGINT NOT NULL,
        part_id     BIGINT NOT NULL
    )`);

export const createTables = async (sql: postgres.Sql) => {
  await createOrgTable(sql);
  await createUserTable(sql);
  await createWidgetTable(sql);
  await createPartTable(sql);
  await createPartComponentTable(sql);
};
