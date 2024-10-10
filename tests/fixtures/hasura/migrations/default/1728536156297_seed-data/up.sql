-- Seed data for public.org
INSERT INTO public.org (id, name, url, smallint_col, integer_col, bigint_col, decimal_col, numeric_col, real_col, double_precision_col, smallserial_col, serial_col, bigserial_col, money_col, char_col, varchar_col, text_col, bytea_col, timestamp_col, timestamptz_col, timestampwtz_col, date_col, time_col, interval_col, boolean_col, point_col, line_col, lseg_col, box_col, path_col, polygon_col, circle_col, cidr_col, inet_col, macaddr_col, macaddr8_col, bit_col, varbit_col, uuid_col, json_col, jsonb_col, xml_col, tsquery_col, tsvector_col, int4range_col, int8range_col, numrange_col, tsrange_col, tstzrange_col, daterange_col) VALUES 
(1, 'Main Org', 'https://main-org.example.com', 32767, 2147483647, 900719925474099, 31072.16383, 31072.16383, 3.1415927, 3.14159265358979, 1, 1, 1, '$9,007,199,254,740.99', 'abcdefghij', 'abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij', 'abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij', '\x48656c6c6f20576f726c64', '2024-10-09 08:30:00', '2024-10-10 01:00:00+00', '2024-10-10 01:00:00+00', '2024-10-10', '10:01:02', '12 days 03:52:11', true, '(2.5,3.7)', '{2,-1,-3}', '[(40.7061,-73.9969),(40.7054,-73.9937)]', '(500,300),(100,100)', '((0,0),(10,10),(20,0),(30,10),(40,0),(30,-10),(20,0),(10,-10),(0,0))', '((0,0),(2,0),(2,1),(3,1),(3,3),(5,3),(5,5),(3,5),(3,7),(1,7),(1,5),(0,5),(0,0))', '<(-5,2),7.5>', '2001:db8:3c4d:15::/64', '10.0.0.1', '08:00:2b:01:02:03', '08:00:2b:01:02:03:04:05', B'10110101', B'101101', '4ecb739e-5540-47ea-badc-81cb13e8aad7', '{"name": "Jane", "age": 25}', '{"age": 26, "name": "Janet"}', '<person><name>Jane</name><age>25</age></person>', '''postgr'' & ''databas''', '''databas'':10 ''object'':8 ''object-rel'':7 ''open'':5 ''postgresql'':1 ''power'':4 ''relat'':9 ''sourc'':6 ''system'':11', '[-2147483647,2147483647)', '[-900719925474099,900719925474099)', '[1.5,10.5]', '["2023-02-01 09:00:00","2023-02-01 11:00:00")', '["2023-01-01 01:00:00+00","2023-01-01 03:00:00+00"]', '[2023-06-01,2023-06-30)');
INSERT INTO public.org (id, name, url, smallint_col, integer_col, bigint_col, decimal_col, numeric_col, real_col, double_precision_col, smallserial_col, serial_col, bigserial_col, money_col, char_col, varchar_col, text_col, bytea_col, timestamp_col, timestamptz_col, timestampwtz_col, date_col, time_col, interval_col, boolean_col, point_col, line_col, lseg_col, box_col, path_col, polygon_col, circle_col, cidr_col, inet_col, macaddr_col, macaddr8_col, bit_col, varbit_col, uuid_col, json_col, jsonb_col, xml_col, tsquery_col, tsvector_col, int4range_col, int8range_col, numrange_col, tsrange_col, tstzrange_col, daterange_col) VALUES 
(2, 'Other Org 1', 'https://other-org1.example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.org (id, name, url, smallint_col, integer_col, bigint_col, decimal_col, numeric_col, real_col, double_precision_col, smallserial_col, serial_col, bigserial_col, money_col, char_col, varchar_col, text_col, bytea_col, timestamp_col, timestamptz_col, timestampwtz_col, date_col, time_col, interval_col, boolean_col, point_col, line_col, lseg_col, box_col, path_col, polygon_col, circle_col, cidr_col, inet_col, macaddr_col, macaddr8_col, bit_col, varbit_col, uuid_col, json_col, jsonb_col, xml_col, tsquery_col, tsvector_col, int4range_col, int8range_col, numrange_col, tsrange_col, tstzrange_col, daterange_col) VALUES 
(3, 'Other Org 2', 'https://other-org2.example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3, 3, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- Seed data for public.widget
INSERT INTO public.widget (id, name, description, num1, num2, num3, num4, org_id) VALUES 
(1, 'Widget 1', 'Description for Widget 1', 10.00, 20.00, 30.00, 40.00, 1),
(2, 'Widget 2', 'Description for Widget 2', 15.00, 25.00, 35.00, 45.00, 2),
(3, 'Widget 3', 'Description for Widget 3', 20.00, 30.00, 40.00, 50.00, 3);

-- Seed data for public.part
INSERT INTO public.part (id, name, description, widget_id, org_id) VALUES 
(1, 'Part 1', 'Description for Part 1', 1, 1),
(2, 'Part 2', 'Description for Part 2', 2, 2),
(3, 'Part 3', 'Description for Part 3', 3, 3);

-- Seed data for public.part_component
INSERT INTO public.part_component (id, name, description, org_id, part_id) VALUES 
(1, 'Component 1', 'Description for Component 1', 1, 1),
(2, 'Component 2', 'Description for Component 2', 2, 2),
(3, 'Component 3', 'Description for Component 3', 3, 3);

-- Seed data for public."user"
INSERT INTO public."user" (id, name, email, org_id) VALUES 
(1, 'User 1', 'user1@example.com', 1),
(2, 'User 2', 'user2@example.com', 2),
(3, 'User 3', 'user3@example.com', 3);

-- Set sequence values
SELECT pg_catalog.setval('public.org_bigserial_col_seq', 3, true);
SELECT pg_catalog.setval('public.org_id_seq', 3, true);
SELECT pg_catalog.setval('public.org_serial_col_seq', 3, true);
SELECT pg_catalog.setval('public.org_smallserial_col_seq', 3, true);
SELECT pg_catalog.setval('public.part_id_seq', 3, true);
SELECT pg_catalog.setval('public.part_component_id_seq', 3, true);
SELECT pg_catalog.setval('public.user_id_seq', 3, true);
SELECT pg_catalog.setval('public.widget_id_seq', 3, true);