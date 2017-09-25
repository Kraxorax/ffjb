
CREATE TABLE playlist_songs (
    playlist_id int REFERENCES playlist(playlist_id)    ON UPDATE CASCADE ON DELETE CASCADE,
    song_id     int REFERENCES song(song_id)            ON UPDATE CASCADE,
    CONSTRAINT  playlist_song_pkey  PRIMARY KEY (playlist_id, song_id)
);

ALTER TABLE playlist DROP COLUMN songs;

