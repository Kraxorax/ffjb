create table if not exists playlist (
	id	serial	primary key	not null,
	title	text,
	songs	int[]
);

insert into playlist (title, songs)
values
(	'prvijenci',	
	'{	1,	2,	3	}'
);
