CREATE DATABASE Finaktiva_DB

USE Finaktiva_DB

CREATE TABLE [dbo].[Region]
(
	[Code] [int] IDENTITY(1,1) PRIMARY KEY,
	[Name] [varchar](100) NOT NULL
)

CREATE TABLE [dbo].[Municipality]
(
	[Id] [int] IDENTITY(1,1) PRIMARY KEY,
	[Code] [varchar](10) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[RegionCode] INT NULL,
	[State] BIT DEFAULT(1),
	FOREIGN KEY (RegionCode) REFERENCES [dbo].[Region](Code)
)