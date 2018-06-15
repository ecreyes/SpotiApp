# SpotiApp

## Instalaciones.
Lo primero es instalar NodeJs para obtener el npm en la cmd de windows, una vez instalado se puede instalar TypeScript y Angular-Cli por npm.

* [NodeJs](https://nodejs.org/es/)
* [TypeScript](https://www.typescriptlang.org/)
* [Angular-Cli](https://cli.angular.io/)
* [Postman](https://www.getpostman.com/)
* [Spotify](https://www.spotify.com/cl/)

Tambien hay que mencionar que una vez descargado el proyecto hay que hacer un:
```shell
npm install
```
para instalar las dependecias del `package.json` y obtener el node_modules.

## Configuraciones previas.
Se necesita generar un token para usar la aplicación, ya que solo fue desarrollada para el aprendizaje.
En `Postman` se debe hacer una petición `POST` a la API de developers de spotify, los campos son los siguientes:
```shell
POST https://accounts.spotify.com/api/token
```
Elegir `Body`, luego `x-www-form-urlencoded` e ingresar los siguientes campos:
```shell
key         value
grant_type client_credentials
client_id user
client_secret clave
```
Para obtener el campo `user` y `clave` hay que ir a [SpotifyDeveloper](https://developer.spotify.com/dashboard/applications), crear una aplicación y se obtendrán los dos parametros.

Una vez obtenido el token, en `app/services/spotify.service.ts` hay un atributo `token` de la clase para ingresar el token.

Tambien para un mejor uso de la aplicación se debe tener spotify instalado en el computador para que no de errores de tipo GET y se pueda escuchar la canción completa y no una demo.

Cuando ya este todo instalado y configurado se puede correr el servidor con:
```shell
ng serve
```