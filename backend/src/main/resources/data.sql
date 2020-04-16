insert into todos (id, user, description, date, done) VALUES
    (null, 'dima', 'Learn Angular', sysdate(), false),
    (null, 'dima', 'Learn AWS', sysdate(), false),
    (null, 'dima', 'Learn Microservices', sysdate(), false);

INSERT INTO users VALUES
    (null, 'dima', '$2a$10$YNkidE/CGose4bmydBsAQuxJ5dKBFLc/IbHfQOf9Rybubr5YiAcq6', true);

INSERT INTO roles VALUES
    (null, 'dima', 'ROLE_ADMIN');