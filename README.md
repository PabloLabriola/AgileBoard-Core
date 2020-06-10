# AgileBoard

## Idea

Un tablero colaborativo para gestionar tus proyectos con las metodologías ágiles. La idea es desarrollar una interfaz que sea capaz de soportar la gestión de un proyecto y sus tareas. El espíritu del proyecto es colaborativo, por lo que los integrantes del proyecto pueden ser dinámicos. Teniendo la posibilidad de compartir en redes sociales el tablero para solicitar ayuda externa. Los proyectos quedarán guardados y los usuarios podrán acceder a ellos a través de un ID, sin la necesidad de una suscripción ni una registración de usuario.

## Alcance

Un proyecto tendrá un ID público accesible por cualquier persona y tendrá un código de administrador que será solicitado para ciertas acciones.
Los administradores del tablero podran crear, editar y eliminar cualquier aspecto del proyecto.
Los usuarios comunes solo podrán cambiar de estado las tareas y compartirlas en redes sociales o por mail.
Cada tarea podrá modificar su estado tanto hacia adelante en el proceso como hacia atrás.
No se podrán mostrar imágenes o archivos de ningún tipo en la descripción de la tarea pero sí se podrán dejar adjuntos archivos necesarios o complementarios.

## Tecnologías

[Vue.js](https://vuejs.org/) - Front End
[Quasar](https://quasar.dev/) - Estilos
[Node.js](https://nodejs.org/en/) - Back End
[Nodemailer](https://nodemailer.com/about/) - Funcionalidad de envío de mails
[Twitter](https://developer.twitter.com/en) - Funcionalidad de compartir en RRSS
[Linkedin](https://developer.linkedin.com/docs/rest-api) - Funcionalidad de compartir en RRSS
[MySql](https://www.mysql.com/) - Base de datos
[Express](https://expressjs.com/es/guide/database-integration.html)  - DB Integration
[freemysql](https://www.freemysqlhosting.net/) - Cloud DB

## User stories

- Como usuario quiero poder crear una nueva tarea para comenzar a armar un backlog.
- Como usuario quiero poder asignar una prioridad a una tarea para armar una buena planificacion.
- Como usuario quiero poder asignar un estado a una tarea para comenzar a armar un backlog.
- Como usuario quiero poder publicar un proyecto en una red social para encontrar interesados en una colaboracion.
- Como usuario quiero poder enviar tareas por email.
- Como usuario quiero poder crear nuevos segmentos en el tablero.
- Como usuario quiero poder modificar mis segmentos en el tablero.
- Como usuario quiero poder eliminar mis segmentos en el tablero.
- Como usuario quiero poder modificar una tarea del tablero.
- Como usuario quiero poder eliminar una tarea del tablero.
- Como usuario quiero poder crear un proyecto como administrador para tener el control de la edición del mismo.
- Como usuario administrador de un proyecto quiero poder eliminar y/o editar cualquier aspecto de mis proyectos.

## Developers

[Pablo Labriola](https://github.com/PabloLabriola)
[Pablo Rondeau](https://github.com/pablorondeau)
[Dario Di Gulio](https://github.com/DarioDiGulio)

## Asignación de tareas

|       Tareas              |                Responsables                 |                        Fuente											|
|---------------------------|---------------------------------------------|-------------------------------------------------------------------------|
| Compartir en Linkedin     | [Dario](https://github.com/DarioDiGulio)    | [Linkedin](https://developer.linkedin.com/docs/rest-api)				|
| Compartir en Twitter      | [Dario](https://github.com/DarioDiGulio)    | [Twitter](https://developer.twitter.com/en)								|
| Envío de Correos          | [Dario](https://github.com/DarioDiGulio)    | [Nodemailer](https://nodemailer.com/about/)								|
| Creacion de Schema de BD  | [Pablo L](https://github.com/PabloLabriola) | [MySql](https://www.mysql.com/)											|
| Integración de BD         | [Pablo L](https://github.com/PabloLabriola) | [Express](https://expressjs.com/es/guide/database-integration.html)		|
| Cloud DB        			| [Pablo L](https://github.com/PabloLabriola) | [freemysql](https://www.freemysqlhosting.net/)							|