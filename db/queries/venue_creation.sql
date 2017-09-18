create table if not exists venue (
	id		serial 	primary key 		not null,
	name		text				not null,
	playlist	int	references playlist(id)
);

insert into venue (name, playlist)
values
(	'kod kurte',	1	);