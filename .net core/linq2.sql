/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[FirstName]
      ,[LastName]
      ,[Email]
      ,[Country]
      ,[Address]
      ,[Password]
  FROM [Angular].[dbo].[Users]


  Update Users
  Set Password = 'thiek123'
  where Id = 1