USE Finaktiva_DB

INSERT INTO [dbo].[Region] ([Name]) VALUES ('ANTIOQUIA')
INSERT INTO [dbo].[Region] ([Name]) VALUES ('BOGOTÁ, D.C.')
INSERT INTO [dbo].[Region] ([Name]) VALUES ('ATLÁNTICO')

DECLARE @v_RegionCode INT = (SELECT Code FROM [dbo].[Region] WHERE [Name] = 'BOGOTÁ, D.C.')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('11001', 'BOGOTÁ, D.C.', @v_RegionCode)

SET @v_RegionCode = (SELECT Code FROM [dbo].[Region] WHERE [Name] = 'ANTIOQUIA')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('05001', 'MEDELLÍN', @v_RegionCode)
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('05002', 'ABEJORRAL',@v_RegionCode)

SET @v_RegionCode = (SELECT Code FROM [dbo].[Region] WHERE [Name] = 'ATLÁNTICO')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('08001', 'BARRANQUILLA', @v_RegionCode)
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('08078', 'BARANOA.', @v_RegionCode)