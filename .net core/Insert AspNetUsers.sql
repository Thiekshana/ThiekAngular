Use Angular


INSERT [dbo].[AspNetUsers] ([Id], [AccessFailedCount], [ConcurrencyStamp], 
[Email], [EmailConfirmed], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], 
[NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], 
[SecurityStamp], [TwoFactorEnabled], [UserName]) VALUES 
(N'0633e088-30a6-444f-9603-70d7c26748ef', 0, 
N'd2feada1-c7db-4f5a-801c-4ae5c990a49d', N'admin@gmail.com', 1, 1, NULL, 
N'ADMIN@GMAIL.COM', N'ADMIN@GMAIL.COM', 
N'AQAAAAEAACcQAAAAEBqhdvkH3O3glua9IFU+LDamc3mj03dPQ/8brAW34GTN6kxMOqs5je90FNn7fuNleQ==', 
N'+10001234567', 1, N'6123adf0-fc53-4abb-b6a4-52d164da4e4f', 0, N'admin')
GO


INSERT INTO [dbo].[AspNetUserRoles]([UserId],[RoleId])
VALUES (N'0633e088-30a6-444f-9603-70d7c26748ef',N'0637e088-30a6-333f-9603-70d7c26748ef')
GO

USE [Angular]
GO

INSERT INTO [dbo].[AspNetRoles]([Id],[Name],[NormalizedName],[ConcurrencyStamp])
VALUES (N'0637e088-30a6-333f-9603-70d7c26748ef','admin','ADMIN',N'd2feada1-c7db-4f5a-801c-4ae5c990a49d')





