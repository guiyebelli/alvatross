# CHALLENGE Alvatross

## Versiones utilizadas

Angular 18
Angular CLI version 18.0.6
Node version 22.0.0
Bootstrap 5.3.2
Material 18.0.5

## Pasos para arrancar el proyecto

En caso de tener varias versiones de node instaladas, usar el comando `nvm use` para que cambie la version de node corresponsiente.
Instalar las dependencias necesarias con el comando `npm install`
Para iniciar el proyecto localmente se puede utilizar el comando `ng serve` o `npm start`, luego se deberá navegar a `http://localhost:4200/` para acceder la web.

Para el backend se debe utilizar el comando `npm run api`, para ver el contenido de la api se puede navegar a `https://localhost:3000`. En caso de querer utilizar apimocha se debe comentar en el archivo enviroment la url local y descomentar la url de apimocha, para este caso no es necesario utilizar ningun comando.

## Explicación de las decisiones que hayas tomado

Al iniciar el proyecto, lo estructure con modulos para una mejor organización a futuro, configure la carga dinamica de los mismos y las rutas, a pesar de que el challenge en este caso no lo necesitaba ya que debe ser una single page. Decidi crear el proyecto con Sass para poder configurar variables globales con los recursos brindados. Utilice el environment para centralizar la URL de la api, ya que la simulación del back gratuita cuenta con un numero X de intentos por dias y debia cambiar a mocks locales, utilizando json-server, cuando superaba ese numero. Centralice la disponibilidad de fonts local, ya que probe diferentes Helvetica hasta que di con la misma que se proporcionaba en la imagen.

## Dificultades encontradas

Al querer utilizar https://apimocha.com/ su limite de 50 request me dificultaba el testing de la app por lo tanto debi configurar 2 maneras de acceder al back como alternativa, en mi caso decidi utilizar json-server. Al utilizar material para diferentes componentes siempre esta la dificultad de sobreescribir su estilo para respetar el diseño brindado. Decidi utilizar Angular 18 a pesar de que mis ultimos proyectos fueron hasta la version 16, la dificulad estuvo en adaptarme a las nuevas configuraciones y sintaxis que cambiaron.
