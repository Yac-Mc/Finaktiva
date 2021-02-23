USE Finaktiva_DB

INSERT INTO [dbo].[Departments] (Code, [Name]) VALUES ('05', 'ANTIOQUIA')
INSERT INTO [dbo].[Departments] (Code, [Name]) VALUES ('11', 'BOGOTÁ, D.C.')
INSERT INTO [dbo].[Departments] (Code, [Name]) VALUES ('08', 'ATLÁNTICO')

INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('11001', 'BOGOTÁ, D.C.', '11')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('05001', 'MEDELLÍN', '05')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('05002', 'ABEJORRAL', '05')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('08001', 'BARRANQUILLA', '08')
INSERT INTO [dbo].Municipality (Code, [Name], RegionCode) VALUES ('08078', 'BARANOA.', '08')