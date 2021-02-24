USE Finaktiva_DB

INSERT INTO [dbo].[Region] ([Name]) VALUES ('ANTIOQUIA')
INSERT INTO [dbo].[Region] ([Name]) VALUES ('BOGOT�, D.C.')
INSERT INTO [dbo].[Region] ([Name]) VALUES ('ATL�NTICO')

DECLARE @v_RegionCode INT = (SELECT Code FROM [dbo].[Region] WHERE [Name] = 'BOGOT�, D.C.')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('11001', 'BOGOT�, D.C.', @v_RegionCode)

SET @v_RegionCode = (SELECT Code FROM [dbo].[Region] WHERE [Name] = 'ANTIOQUIA')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('05001', 'MEDELL�N', @v_RegionCode)
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('05002', 'ABEJORRAL',@v_RegionCode)

SET @v_RegionCode = (SELECT Code FROM [dbo].[Region] WHERE [Name] = 'ATL�NTICO')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('08001', 'BARRANQUILLA', @v_RegionCode)
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('08078', 'BARANOA.', @v_RegionCode)