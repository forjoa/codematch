use codematch;
CREATE TABLE doubts (
	id int primary key auto_increment not null,
    name varchar(255),
    email varchar(255),
    message text
);

CREATE TABLE developers (
	id int primary key auto_increment not null,
    name varchar(255),
    email varchar(255),
    pwd varchar(255),
    programming_lang varchar(255),
    description text,
    photo longblob
);

insert into developers(name, email, pwd, programming_lang, description) values('joaquin','joaquin_trujillo@icloud.com','1234', 'React/Node/JavaScript/PHP', 'Lorem ipsum dolor sit amet consectetur adipiscing, elit natoque platea sagittis aliquet malesuada, penatibus duis hac facilisis auctor. Condimentum potenti volutpat parturient odio eleifend magnis nascetur mauris cum curae, inceptos erat ut nibh integer primis netus porta placerat, risus ultrices id posuere lacus dis at donec leo. Varius aliquam sodales netus vulputate diam hendrerit commodo, nullam morbi placerat blandit cursus inceptos cras, scelerisque donec volutpat potenti ultrices nulla.');
insert into developers(name, email, pwd, programming_lang, description) values('rebe','rebe@icloud.com','1234', 'Angular/Node/TypeScript', 'Lorem ipsum dolor sit amet consectetur adipiscing, elit natoque platea sagittis aliquet malesuada, penatibus duis hac facilisis auctor. Condimentum potenti volutpat parturient odio eleifend magnis nascetur mauris cum curae, inceptos erat ut nibh integer primis netus porta placerat, risus ultrices id posuere lacus dis at donec leo. Varius aliquam sodales netus vulputate diam hendrerit commodo, nullam morbi placerat blandit cursus inceptos cras, scelerisque donec volutpat potenti ultrices nulla.');
insert into developers(name, email, pwd, programming_lang, description) values('forky','forky@icloud.com','1234', 'HTML/CSS/JavaScript', 'Lorem ipsum dolor sit amet consectetur adipiscing, elit natoque platea sagittis aliquet malesuada, penatibus duis hac facilisis auctor. Condimentum potenti volutpat parturient odio eleifend magnis nascetur mauris cum curae, inceptos erat ut nibh integer primis netus porta placerat, risus ultrices id posuere lacus dis at donec leo. Varius aliquam sodales netus vulputate diam hendrerit commodo, nullam morbi placerat blandit cursus inceptos cras, scelerisque donec volutpat potenti ultrices nulla.');

select * from doubts;