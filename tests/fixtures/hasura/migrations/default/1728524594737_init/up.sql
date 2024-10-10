SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
CREATE TABLE public.org (
    id bigint NOT NULL,
    name character varying(256) NOT NULL,
    url text,
    smallint_col smallint,
    integer_col integer,
    bigint_col bigint,
    decimal_col numeric(10,5),
    numeric_col numeric(10,5),
    real_col real,
    double_precision_col double precision,
    smallserial_col smallint NOT NULL,
    serial_col integer NOT NULL,
    bigserial_col bigint NOT NULL,
    money_col money,
    char_col character(10),
    varchar_col character varying(50),
    text_col text,
    bytea_col bytea,
    timestamp_col timestamp without time zone,
    timestamptz_col timestamp with time zone,
    timestampwtz_col timestamp with time zone,
    date_col date,
    time_col time without time zone,
    interval_col interval,
    boolean_col boolean,
    point_col point,
    line_col line,
    lseg_col lseg,
    box_col box,
    path_col path,
    polygon_col polygon,
    circle_col circle,
    cidr_col cidr,
    inet_col inet,
    macaddr_col macaddr,
    macaddr8_col macaddr8,
    bit_col bit(8),
    varbit_col bit varying(8),
    uuid_col uuid,
    json_col json,
    jsonb_col jsonb,
    xml_col xml,
    tsquery_col tsquery,
    tsvector_col tsvector,
    int4range_col int4range,
    int8range_col int8range,
    numrange_col numrange,
    tsrange_col tsrange,
    tstzrange_col tstzrange,
    daterange_col daterange
);
CREATE SEQUENCE public.org_bigserial_col_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.org_bigserial_col_seq OWNED BY public.org.bigserial_col;
CREATE SEQUENCE public.org_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.org_id_seq OWNED BY public.org.id;
CREATE SEQUENCE public.org_serial_col_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.org_serial_col_seq OWNED BY public.org.serial_col;
CREATE SEQUENCE public.org_smallserial_col_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.org_smallserial_col_seq OWNED BY public.org.smallserial_col;
CREATE TABLE public.part (
    id bigint NOT NULL,
    name text NOT NULL,
    description text,
    widget_id bigint NOT NULL,
    org_id bigint NOT NULL
);
CREATE TABLE public.part_component (
    id bigint NOT NULL,
    name text NOT NULL,
    description text,
    org_id bigint NOT NULL,
    part_id bigint NOT NULL
);
CREATE SEQUENCE public.part_component_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.part_component_id_seq OWNED BY public.part_component.id;
CREATE SEQUENCE public.part_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.part_id_seq OWNED BY public.part.id;
CREATE TABLE public."user" (
    id bigint NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    org_id bigint
);
CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
CREATE TABLE public.widget (
    id bigint NOT NULL,
    name text NOT NULL,
    description text,
    num1 numeric(10,2),
    num2 numeric,
    num3 real,
    num4 double precision,
    org_id bigint
);
CREATE SEQUENCE public.widget_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.widget_id_seq OWNED BY public.widget.id;
ALTER TABLE ONLY public.org ALTER COLUMN id SET DEFAULT nextval('public.org_id_seq'::regclass);
ALTER TABLE ONLY public.org ALTER COLUMN smallserial_col SET DEFAULT nextval('public.org_smallserial_col_seq'::regclass);
ALTER TABLE ONLY public.org ALTER COLUMN serial_col SET DEFAULT nextval('public.org_serial_col_seq'::regclass);
ALTER TABLE ONLY public.org ALTER COLUMN bigserial_col SET DEFAULT nextval('public.org_bigserial_col_seq'::regclass);
ALTER TABLE ONLY public.part ALTER COLUMN id SET DEFAULT nextval('public.part_id_seq'::regclass);
ALTER TABLE ONLY public.part_component ALTER COLUMN id SET DEFAULT nextval('public.part_component_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.widget ALTER COLUMN id SET DEFAULT nextval('public.widget_id_seq'::regclass);
ALTER TABLE ONLY public.org
    ADD CONSTRAINT org_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.part_component
    ADD CONSTRAINT part_component_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.part
    ADD CONSTRAINT part_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.widget
    ADD CONSTRAINT widget_id_org_id_key UNIQUE (id, org_id);
ALTER TABLE ONLY public.widget
    ADD CONSTRAINT widget_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.part
    ADD CONSTRAINT part_widget_id_org_id_fkey FOREIGN KEY (widget_id, org_id) REFERENCES public.widget(id, org_id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_org_id_fkey FOREIGN KEY (org_id) REFERENCES public.org(id);
ALTER TABLE ONLY public.widget
    ADD CONSTRAINT widget_org_id_fkey FOREIGN KEY (org_id) REFERENCES public.org(id);
