insert into todos (id, user, description, date, done) VALUES
    (null, 'dima', 'Learn Angular', sysdate(), false),
    (null, 'dima', 'Learn AWS', sysdate(), false),
    (null, 'dima', 'Learn Microservices', sysdate(), false);

INSERT INTO users VALUES
    (null, 'dima', '$2a$10$B.0xV52aBkWgWTABWqQ4D.t8FbLp2yrl/2V6QQxWsxzlziDAauVmC', true);

INSERT INTO roles VALUES
    (null, 'dima', 'ROLE_ADMIN');