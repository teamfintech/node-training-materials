CREATE TABLE user_image (
	id serial primary key,
	data bytea not null,
	mimeType text not null
);