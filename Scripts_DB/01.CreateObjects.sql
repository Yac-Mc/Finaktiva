CREATE DATABASE Finaktiva_DB

USE Finaktiva_DB

CREATE TABLE [dbo].[Departments]
(
	[Id] [int] IDENTITY(1,1),
	[Code] [varchar](5) NOT NULL PRIMARY KEY,
	[Name] [varchar](100) NOT NULL
)

CREATE TABLE [dbo].[Municipality]
(
	[Id] [int] IDENTITY(1,1),
	[Code] [varchar](10) NOT NULL PRIMARY KEY,
	[Name] [varchar](100) NOT NULL,
	[RegionCode] [varchar](5) NOT NULL,
	[State] BIT DEFAULT(1),
	FOREIGN KEY (RegionCode) REFERENCES [dbo].[Departments](Code)
)