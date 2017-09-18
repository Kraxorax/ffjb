create table if not exists song (
	id	serial	primary key	not null,
	title	text			not null,
	url	text			not null
);

insert into song (title, url)
values
(	'The Knife - Pass This On (Shaken-Up Version)',
 	'https://www.youtube.com/watch?v=1W4NykndmBU'	
),
(	'Jims Big Ego - Stress',
 	'https://www.youtube.com/watch?v=BGQmmDEDYiI'
),
(	'Robyn - Fembot',
 	'https://www.youtube.com/watch?v=Q6HI37GLPu8'	
)