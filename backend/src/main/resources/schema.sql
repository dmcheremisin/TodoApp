create table users (
    id int(11) NOT NULL AUTO_INCREMENT primary key,
	email varchar_ignorecase(50) not null,
	password char(60) not null,
	enabled boolean not null
);

create table roles (
    id int(11) NOT NULL AUTO_INCREMENT primary key,
	email varchar_ignorecase(50) not null,
	role varchar_ignorecase(50) not null,
	constraint fk_users_roles foreign key(email) references users(email)
);
create unique index ix_roles on roles (email, role);

create table todos (
    id int(11) NOT NULL AUTO_INCREMENT primary key,
	user varchar_ignorecase(50) not null,
	description varchar_ignorecase(200) not null,
	date datetime not null,
	done boolean not null
);