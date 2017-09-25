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



INSERT INTO core.dj (nick, email, pass)
VALUES
    ('prvi',  'prvi@emails.com',  '1'),
    ('drugi', 'drugi@emails.com', '2'),
    ('treci', 'treci@emails.com', '3');

INSERT INTO core.playlist (title)
VALUES
    ('prvijenci');

INSERT INTO core.venue (name, playlist)
VALUES
    ('kod kurte', 1),
    ('kod murte', 1),
    ('kod burte', 1);

INSERT INTO core.song (title, url)
VALUES
    ('The Knife - Pass This On (Shaken-Up Version)',
     'https://www.youtube.com/watch?v=1W4NykndmBU'
    ),
    ('Jims Big Ego - Stress',
     'https://www.youtube.com/watch?v=BGQmmDEDYiI'
    ),
    ('Robyn - Fembot',
     'https://www.youtube.com/watch?v=Q6HI37GLPu8'
    );

INSERT INTO core.playlist_songs (playlist_id, song_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3);
