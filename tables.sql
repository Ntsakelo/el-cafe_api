drop table if exists CART;
drop table if exists EXTRAS;
drop table if exists MENU_VARIETY;
drop table if exists MENU;
drop table if exists CUSTOMERS;

create table CUSTOMERS(
    ID serial primary key not null,
    FIRST_NAME varchar not null,
    LAST_NAME varchar not null,
    EMAIL_ADDRESS varchar not null,
    PHONE_NUMBER varchar not null,
    MARKETING boolean null default false
);

create table MENU(
    ID serial primary key not null,
    TITLE varchar not null,
    INGREDIENTS text not null,
    ITEM_DESCRIPTION text null default null,
    ITEM_IMAGE text not null,
    CATEGORY varchar not null,
    DRINK_INCLUDED boolean not null default false,
    ACTIVE int not null default 1
);

create table MENU_VARIETY(
    ID serial primary key not null,
    MENU_ID int not null,
    MENU_SIZE varchar null default null,
    ITEM_PRICE decimal not null,
    foreign key (MENU_ID) references MENU(ID) 
);

create table EXTRAS(
    ID serial primary key not null,
    MENU_ID int not null,
    TITLE varchar not null,
    PRICE decimal not null,
    foreign key (MENU_ID) references MENU(ID)
);

create table CART(
    ID serial primary key not null,
    CUSTOMER_ID int not null,
    MENU_ID int not null,
    ADDITIONALS text null default null,
    foreign key (CUSTOMER_ID) references CUSTOMERS(ID)
);

--DATA--

--MENU

insert into MENU(TITLE,INGREDIENTS,ITEM_IMAGE,CATEGORY,DRINK_INCLUDED,ACTIVE) values('Double cheese burger','Cheese, source, beef','https://ntsakelo.github.io/el-cafe/Images/Double-cheese-burger.png','Burgers',true,1);

insert into MENU(TITLE,INGREDIENTS,ITEM_IMAGE,CATEGORY,DRINK_INCLUDED,ACTIVE) values('Coffee latte','Coffee latte','https://ntsakelo.github.io/el-cafe/Images/coffee-latte.png','Coffee',false,1);

insert into MENU(TITLE,INGREDIENTS,ITEM_IMAGE,CATEGORY,DRINK_INCLUDED,ACTIVE) values('Pineapple Smoothie','Pineapple','https://ntsakelo.github.io/el-cafe/Images/pineapple-smoothie.png','Smoothies',false,1);

insert into MENU(TITLE,INGREDIENTS,ITEM_IMAGE,CATEGORY,DRINK_INCLUDED,ACTIVE) values('Sandwich toast','toast','https://ntsakelo.github.io/el-cafe/Images/sandwich-toast.png','Toast',false,1);

insert into MENU(TITLE,INGREDIENTS,ITEM_IMAGE,CATEGORY,DRINK_INCLUDED,ACTIVE) values('Coffee latte cappuccino','Sugar, Coffee,cream,milk','https://ntsakelo.github.io/el-cafe/Images/coffee-latte-cappuccino.png','Coffee',false,1);

--MENU_VARIETY
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(1,'Small',56.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(1,'Medium',88.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(1,'Large',102.99);

insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(2,'Small',23.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(2,'Medium',30.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(2,'Large',35.99);

insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(3,'Small',20.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(3,'Medium',25.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(3,'Large',30.99);

insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(4,'',30.99);

insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(5,'Small',23.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(5,'Medium',30.99);
insert into MENU_VARIETY(MENU_ID,MENU_SIZE,ITEM_PRICE) values(5,'Large',35.99);

insert into EXTRAS(MENU_ID,TITLE,PRICE) values (1,'Onions',2.99);
insert into EXTRAS(MENU_ID,TITLE,PRICE) values (1,'Beef patty',4.99);
insert into EXTRAS(MENU_ID,TITLE,PRICE) values (1,'Cheese',3.99);
insert into EXTRAS(MENU_ID,TITLE,PRICE) values (1,'Chillie sauce',2.99);
insert into EXTRAS(MENU_ID,TITLE,PRICE) values (1,'Tomatoes',2.99);
insert into EXTRAS(MENU_ID,TITLE,PRICE) values (1,'Onions',2.99);



















