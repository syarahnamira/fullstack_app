-- notes: tidak memakai uuid karena saya memakai postgresql dan di soal tidak di infokan harus menggunakan uuid mysql

create table users (
	id VARCHAR (255),
	nama VARCHAR (100) not null,
	email VARCHAR (255) unique, 
	telp VARCHAR (20) unique
)

CREATE TABLE companys (
    id VARCHAR (255), 
    user_id VARCHAR (255),
    company_code VARCHAR (10),
    company_name VARCHAR (255)
)

INSERT INTO users (Id, Nama, Email, Telp) VALUES
('12qwer', 'Imron', NULL, '081234567890'),
('321rewq', 'Juli', 'Sammy@mail.com', '0987654321'),
(NULL, 'Gajah Mada', NULL, NULL);

INSERT INTO companys  (Id, User_id, Company_code, Company_name) VALUES
('trew098', '12qwer', 'SPI', NULL),
(null, null, null, 'Samudera'),
('poiuyt1234', '321rewq', 'PIC', 'Samudera')

truncate companys 

SELECT 
    u.Id AS User_id,
    c.Id AS Company_id,
    u.Nama,
    u.Email,
    u.telp,
    c.Company_code,
    c.Company_name
FROM 
    users u
JOIN 
    companys c ON u.Id = c.user_id;

