/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[FirstName]
      ,[LastName]
      ,[Email]
      ,[Country]
      ,[Address]
      ,[Password]
  FROM [Angular].[dbo].[Users]

  select id from Users
  where firstname = 'thiek' AND
  Password = 'thiek123'