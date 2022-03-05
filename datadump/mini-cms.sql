--
-- PostgreSQL database dump
--

-- Dumped from database version 11.15 (Ubuntu 11.15-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.2 (Ubuntu 14.2-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

--
-- Name: valid_rooms; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.valid_rooms (
    room character varying(3),
    id integer NOT NULL,
    videoid uuid
);


ALTER TABLE public.valid_rooms OWNER TO dev;

--
-- Name: valid_rooms_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.valid_rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.valid_rooms_id_seq OWNER TO dev;

--
-- Name: valid_rooms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.valid_rooms_id_seq OWNED BY public.valid_rooms.id;


--
-- Name: videos; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.videos (
    title text NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4()
);


ALTER TABLE public.videos OWNER TO dev;

--
-- Name: valid_rooms id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.valid_rooms ALTER COLUMN id SET DEFAULT nextval('public.valid_rooms_id_seq'::regclass);


--
-- Data for Name: valid_rooms; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.valid_rooms (room, id, videoid) FROM stdin;
KVL	2	\N
MVO	3	\N
ADA	4	\N
ECE	1	\N
\.


--
-- Data for Name: videos; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.videos (title, id) FROM stdin;
Cat Vid	d0438c4b-21f0-4944-8e1a-46c32876c913
\.


--
-- Name: valid_rooms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.valid_rooms_id_seq', 4, true);


--
-- Name: valid_rooms uniqueID; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.valid_rooms
    ADD CONSTRAINT "uniqueID" UNIQUE (id);


--
-- Name: videos uniqueid; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT uniqueid UNIQUE (id);


--
-- Name: videos uniquename; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT uniquename UNIQUE (title);


--
-- Name: valid_rooms openRooms; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.valid_rooms
    ADD CONSTRAINT "openRooms" FOREIGN KEY (videoid) REFERENCES public.videos(id) ON DELETE SET DEFAULT;


--
-- PostgreSQL database dump complete
--

