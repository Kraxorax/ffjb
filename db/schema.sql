CREATE SCHEMA IF NOT EXISTS core;

CREATE TABLE IF NOT EXISTS core.playlist (
    id      SERIAL PRIMARY KEY NOT NULL,
    title   TEXT
);

CREATE TABLE IF NOT EXISTS core.song (
    id      SERIAL PRIMARY KEY NOT NULL,
    title   TEXT   NOT NULL,
    url     TEXT   NOT NULL
);

CREATE TABLE IF NOT EXISTS core.dj (
    id      SERIAL PRIMARY KEY NOT NULL,
    nick    TEXT   UNIQUE NOT NULL,
    email   TEXT   UNIQUE NOT NULL,
    pass    TEXT   NOT NULL
);

CREATE TABLE IF NOT EXISTS core.venue (
    id          SERIAL PRIMARY KEY NOT NULL,
    name        TEXT   NOT NULL,
    playlist    INT    REFERENCES core.playlist(id)
);

CREATE TABLE core.playlist_songs (
    playlist_id INT REFERENCES core.playlist(id) ON UPDATE CASCADE ON DELETE CASCADE,
    song_id     INT REFERENCES core.song(id)     ON UPDATE CASCADE,
    CONSTRAINT  playlist_song_pkey  PRIMARY KEY (playlist_id, song_id)
);
