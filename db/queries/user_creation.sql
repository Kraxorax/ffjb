create table if not exists dj (
	id	serial	primary key	not null,
	nick	text	unique		not null,
	email	citext	unique		not null,
	pass	text			not null
);

insert into dj (nick, email, pass)
values
(	'prvi', 	'prvi@emails.com',	'1'	),
(	'drugi', 	'drugi@emails.com',	'2'	),
(	'treci', 	'treci@emails.com',	'3'	)