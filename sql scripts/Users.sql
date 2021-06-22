Create Table Users(
Id Int Identity(1,1) Primary Key,
FirstName Varchar(100) Not Null,
LastName Varchar(100),
Email Varchar(50),
Country Varchar(50),
Address Varchar(50))
GO

Use master

Insert Into Users(FirstName, LastName, Email, Country, Address) 
Values ('Thiekshana', 'Soysa', 'thiekshana@gmail.com', 'SG', 'blk 685A, Singapore')

Insert Into Users(FirstName, LastName, Email, Country, Address) 
Values ('Mark', 'Dunham', 'markd@gmail.com', 'IN', 'blk 685A, India')

Insert Into Users(FirstName, LastName, Email, Country, Address) 
Values ('Bryan', 'Chalie', 'bryan@gmail.com', 'USA', 'blk 453A, USA')

Insert Into Users(FirstName, LastName, Email, Country, Address) 
Values ('Lee', 'Chong', 'leechong@gmail.com', 'SG', 'blk 123A, Singapore')

Insert Into Users(FirstName, LastName, Email, Country, Address) 
Values ('Cameron', 'Dixon', 'cameron@gmail.com', 'SG', 'blk 685A, Singapore')

--
Scaffold-DbContext "Server=(LocalDb)\MicroService;Database=Angular;User ID=Admin;Password=!QAZxsw2;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
