# dogs
App web for playing "Dogs in the vineyard",  a roleplaying game from D. Vincent Baker, edited in Spain by Ediciones ConBarba

## Objetivo
El proyecto se basa en una aplicación que permita al usuario participar en tiempo real de una partida de "Dogs in the Vineyard", a la vez de que pueda gestionar tanto sus    personajes como sus recursos desde su usuario.
Un juego de rol es una actividad donde varios jugadores intervienen para crear una narración dentro de un mundo de juego. En ellos hay un director de juego (game máster GM), y   jugadores (players). Mientras que los jugadores tienen acceso y pueden actuar en el mundo del juego solo a través de sus personajes (playable characters PCs), el GM debe     organizar el mundo en su conjunto y ponerle dificultades a superar en forma de personajes no jugadores (non playable characters NPCs).
La aplicación debe dar cabida a estos dos tipos de participantes, por lo que debe permitir tanto gestionar los PCs como los NPCs según las características que ofrece el juego.

## Dogs in the Vineyard
La ambientación del juego se basa en la del Salvaje Oeste, con varias diferencias. Los personajes interpretan a Perros, una suerte de guerreros sagrados de una fe necesaria para la comunidad, y se enfrentan a los demonios que los propios pecadores atraen inconscientemente.
El sistema de juego interviene cuando hay una posibilidad de que los personajes no consigan superar un desafío. En DitV, esto ocurre cuando hay un conflicto del PC con un NPC o con otro PC. El sistema realiza una abstracción de ese conflicto a través de un intercambio de apuestas, emulando a una partida de póquer en una West Film. Para ello, los jugadores deben usar los resultados de unos dados que obtienen de diferentes atributos de su ficha de personaje: stats, traits, relatioships y belongings. Por turnos, se van intercambiando estos dados: el jugador con la iniciativa envía dos dados, y el defensor tiene que igualar la suma de esos resultados. Después se intercambian los papeles hasta que uno de los jugadores no puede igualar la suma de su oponente: en ese momento tiene la opción de rendirse y perder o de intensificar el conflicto, recurriendo habitualmente a la violencia. En ese momento se añaden nuevos dados y las consecuencias pueden ser peores. Al rendirse, se anotarán consecuencias en forma de nuevos rasgos para los personajes y la narración continúa.

## ¿Qué aporta este proyecto a la resolución de la partida?
La finalidad de dogs es se utilizado como una herramienta complementaria a la narración, que pueda ser utilizada en una mesa de juego o de forma online a través de una videoconferencia. Lo que puede aportar esta aplicación a una partida de Dogs in the Vineyard es lo siguiente:
* Una base de datos de personajes PCs y NPCs, con sus rasgos actualizados.
* Una aplicación del sistema donde los propios usuarios pueden seleccionar los rasgos para tirar sus dados y enviarlos al resto de jugadores, a la vez que reciben los de los demás a tiempo real.
* Un diario de campaña donde seguir el transcurso de la historia.

## Esquema del proyecto
Se trata de una app web que utiliza Java Script como lenguaje principal. Usa Angular como framework y consta de dos elementos principales: el back-end y el front-end.
* El Front-end, en el directorio _front-dogs_, representa la parte visible del proyecto y gestiona todos los elementos a los que el usuario tiene acceso directamente. Está dividido en diferentes componentes que interactúan entre sí. El usuario comienza en el componente *login*, donde introduce su usuario y contraseña, y accede al componente *Start*, desde donde tiene un listado de las diferentes partidas (Games) que están disponibles. Puede acceder a crear una partida, a donde le llevará al componente *new game*, o acceder a la partida, donde accederá a _master screen_. En esta pantalla, el usuario podrá decidir crear un personaje (_create pc_) o seleccionar uno de los presentes, y jugar con él a través de diferentes componentes anidados.
* El Back-end, en el directorio _back-dogs_, incluye la parte invisible para el usuario, con la gestiónd de la base de datos y los diferentes controladores que permiten modificarlo y recoger datos para utilizarlos en el front-end.
