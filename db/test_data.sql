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
