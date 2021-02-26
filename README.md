# Finaktiva

### Funcionalidades UX:
- Permite al usuario listar los diferentes municipios y regiones. 
- Permite al usuario agregar un nuevo municipio o región. 
- Permite al usuario actualizar un municipio o región.
- Permite al usuario eliminar un municipio o región.
- Permite al usuario buscar regiones y/o municipios.

### Características tecnicas APP
- ForntEnd: Framework Angular
- Componentes de estilo y diseño:
    - Angular-Material: https://material.angular.io
    - Angular Flex: https://github.com/angular/flex-layout
    - Sweetalert2: https://sweetalert2.github.io/
    - Bootstrap: https://getbootstrap.com/
    
- BackEnd: FrameWork .NetCore
  - API Rest
  - Patron de diseño: GenericRepository
  - Arquitectura: Por capas orientado a microservicios
  - ORM: Micro Orm Dapper
  - Db SQL Server
  
**Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.**
**Pre-requisitos**

* .Net Core 5.0
* Sql Server 2016 o superior
* Sql Management studio 2016 o superior
* Visual studio 2019
* NPM de NodeJs
* Angular CLI

- Opcionales
    1. SourceTree (Cliente para manejo de git)

**Compilación**
1. Desrcargar o clonar el proyecto
2. Abrir la carpeta donde se encuentra ubicado el proyecto
  - Pasos DB:
    1. Abrir Sql Management
    2. Conectar a localhost con su respectivos usuario y contraseña
    3. Abrir la carpeta Scripts_DB
    4. Ejecutar Scritp 01 y 02 en Sql Management
   - Pasos Backend:
        1. Abrir la carpeta API_Rest
        2. Abrir la solución en Visual Studio 2019 (**Preferiblemente**)    
        3. En la pestaña *Solution Explorer (Explorador de la solución)* haga click derecho sobre la solución y seleccione la opción *Clean (Limpiar)*
        4. En la pestaña *Solution Explorer (Explorador de la solución)* haga click derecho sobre la solución y seleccione la opción *Build Solution (Compilar)*
        5. Abrir el archivo appsettings.json en la sección "ConnectionStrings" y modificar las llaves "ConexionDB" según el tipo de logeo que realizo en Sql Management.
       **NOTA:** Si el login en Sql Management lo tiene con autentiucación de windows dejar la configuración como se encuentra
        6. Haga click en el botón Play(IIS Express) o oprima la tecla F5
        7. Espere que se compile la solución y se abra la ventana de Swagger
   - Pasos FrontEnd:
        1. Abrir un símbolo del sistema y navegar dentro de la carpeta Web.
        2. Ejecutar comando **npm install**
        3. Despues de que termine la instalación de las dependencias, ejecutar el comando **ng serve -o**
        4. Espere que se compile la solución y se abra la ventana localhost **http://localhost:4200/**
  
**Autores**

* Yoe Cardenas - Desarrollador full stack
