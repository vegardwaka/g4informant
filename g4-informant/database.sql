--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.22
-- Dumped by pg_dump version 9.6.22

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
-- Name: trigger_function(); Type: FUNCTION; Schema: public; Owner: g4infzsz
--

CREATE FUNCTION public.trigger_function() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    UPDATE api_foresporsel
    SET API_id = MAX(API_id) + 1
    WHERE API_id = 0;
END;
$$;


ALTER FUNCTION public.trigger_function() OWNER TO g4infzsz;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: api_request; Type: TABLE; Schema: public; Owner: g4infzsz
--

CREATE TABLE public.api_request (
    apiid integer NOT NULL,
    title character varying(30),
    category character varying(30),
    username character varying(30),
    text character varying(200)
);


ALTER TABLE public.api_request OWNER TO g4infzsz;

--
-- Name: api_foresporsel_apiid_seq; Type: SEQUENCE; Schema: public; Owner: g4infzsz
--

CREATE SEQUENCE public.api_foresporsel_apiid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_foresporsel_apiid_seq OWNER TO g4infzsz;

--
-- Name: api_foresporsel_apiid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: g4infzsz
--

ALTER SEQUENCE public.api_foresporsel_apiid_seq OWNED BY public.api_request.apiid;


--
-- Name: user; Type: TABLE; Schema: public; Owner: g4infzsz
--

CREATE TABLE public."user" (
    user_id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    username text NOT NULL
);


ALTER TABLE public."user" OWNER TO g4infzsz;

--
-- Name: brukerView; Type: VIEW; Schema: public; Owner: g4infzsz
--

CREATE VIEW public."brukerView" AS
 SELECT "user".user_id AS bruker_id,
    "user".email AS epost,
    "user".password AS passord,
    "user".username AS brukernavn
   FROM public."user";


ALTER TABLE public."brukerView" OWNER TO g4infzsz;

--
-- Name: bruker_bruker_id_seq; Type: SEQUENCE; Schema: public; Owner: g4infzsz
--

CREATE SEQUENCE public.bruker_bruker_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bruker_bruker_id_seq OWNER TO g4infzsz;

--
-- Name: bruker_bruker_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: g4infzsz
--

ALTER SEQUENCE public.bruker_bruker_id_seq OWNED BY public."user".user_id;


--
-- Name: infoscreen; Type: TABLE; Schema: public; Owner: g4infzsz
--

CREATE TABLE public.infoscreen (
    infoscreen_id integer NOT NULL,
    title text NOT NULL,
    username character varying(50) NOT NULL
);


ALTER TABLE public.infoscreen OWNER TO g4infzsz;

--
-- Name: infoskjerm_infoskjerm_id_seq; Type: SEQUENCE; Schema: public; Owner: g4infzsz
--

CREATE SEQUENCE public.infoskjerm_infoskjerm_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.infoskjerm_infoskjerm_id_seq OWNER TO g4infzsz;

--
-- Name: infoskjerm_infoskjerm_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: g4infzsz
--

ALTER SEQUENCE public.infoskjerm_infoskjerm_id_seq OWNED BY public.infoscreen.infoscreen_id;


--
-- Name: api_request apiid; Type: DEFAULT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public.api_request ALTER COLUMN apiid SET DEFAULT nextval('public.api_foresporsel_apiid_seq'::regclass);


--
-- Name: user user_id; Type: DEFAULT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public."user" ALTER COLUMN user_id SET DEFAULT nextval('public.bruker_bruker_id_seq'::regclass);


--
-- Name: api_foresporsel_apiid_seq; Type: SEQUENCE SET; Schema: public; Owner: g4infzsz
--

SELECT pg_catalog.setval('public.api_foresporsel_apiid_seq', 1, false);


--
-- Data for Name: api_request; Type: TABLE DATA; Schema: public; Owner: g4infzsz
--



--
-- Name: bruker_bruker_id_seq; Type: SEQUENCE SET; Schema: public; Owner: g4infzsz
--

SELECT pg_catalog.setval('public.bruker_bruker_id_seq', 2, true);


--
-- Data for Name: infoscreen; Type: TABLE DATA; Schema: public; Owner: g4infzsz
--

INSERT INTO public.infoscreen VALUES (0, 'adm', 'adm');


--
-- Name: infoskjerm_infoskjerm_id_seq; Type: SEQUENCE SET; Schema: public; Owner: g4infzsz
--

SELECT pg_catalog.setval('public.infoskjerm_infoskjerm_id_seq', 1, false);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: g4infzsz
--

INSERT INTO public."user" VALUES (0, 'admin@admin.com', '$2a$10$OhVW9nw0bq6F7S.WA8rOJ.dw1zNEqai.BeofuCpeDJARLDEltaMA6', 'admin');


--
-- Name: api_request api_foresporsel_pkey; Type: CONSTRAINT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public.api_request
    ADD CONSTRAINT api_foresporsel_pkey PRIMARY KEY (apiid);


--
-- Name: user bruker_brukernavn_key; Type: CONSTRAINT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT bruker_brukernavn_key UNIQUE (username);


--
-- Name: user bruker_epost_key; Type: CONSTRAINT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT bruker_epost_key UNIQUE (email);


--
-- Name: user bruker_pkey; Type: CONSTRAINT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT bruker_pkey PRIMARY KEY (user_id);


--
-- Name: infoscreen infoskjerm_pkey; Type: CONSTRAINT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public.infoscreen
    ADD CONSTRAINT infoskjerm_pkey PRIMARY KEY (infoscreen_id);


--
-- Name: infoscreen infoskjerm_tittel_key; Type: CONSTRAINT; Schema: public; Owner: g4infzsz
--

ALTER TABLE ONLY public.infoscreen
    ADD CONSTRAINT infoskjerm_tittel_key UNIQUE (title);


--
-- Name: TABLE api_request; Type: ACL; Schema: public; Owner: g4infzsz
--

GRANT ALL ON TABLE public.api_request TO g4infzsz_g4informantdb;


--
-- Name: TABLE "user"; Type: ACL; Schema: public; Owner: g4infzsz
--

GRANT ALL ON TABLE public."user" TO g4infzsz_g4informantdb;


--
-- Name: TABLE infoscreen; Type: ACL; Schema: public; Owner: g4infzsz
--

GRANT ALL ON TABLE public.infoscreen TO g4infzsz_g4informantdb;


--
-- PostgreSQL database dump complete
--
