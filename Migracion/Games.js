kaboom ({



})


//cargar sprites

loadSprite("bean", "/sprites/bean.png") 
loadSprite("bag", "/sprites/bag.png")
loadSprite("ghosty", "/sprites/ghosty.png")
loadSprite("spike", "/sprites/spike.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("steel", "/sprites/steel.png")
loadSprite("prize", "/sprites/jumpy.png")
loadSprite("apple", "/sprites/apple.png")
loadSprite("portal", "/sprites/portal.png")
loadSprite("coin", "/sprites/coin.png")
loadSprite("btfly", "/sprites/btfly.png") 
loadSprite("cloud", "/sprites/cloud.png")
loadSprite("door", "/sprites/door.png")
loadSprite("key", "/sprites/key.png")
loadSprite("moon", "/sprites/moon.png")
loadSprite("sun", "/sprites/sun.png")
loadSprite("gigagantrum", "/sprites/gigagantrum.png")
loadSprite("lightening", "/sprites/lightening.png")
loadSprite("blue-brick", "/sprites/blue-brick.png")
loadSprite("blue-evil-shroom", "/sprites/blue-evil-shroom.png")
loadSprite("blue-steel", "/sprites/blue-steel.png")
loadSprite("blue-wall", "/sprites/blue-wall.png")
loadSprite("brick", "/sprites/brick.png")
loadSprite("evil-shroom", "/sprites/evil-shroom.png")
loadSprite("mushm", "/sprites/mushroom-mario.png")
loadSprite("pipe", "/sprites/pipe.png") 
loadSprite("red-wall", "/sprites/red-wall.png")
loadSprite("surprise", "/sprites/surprise.png")
loadSprite("unboxed", "/sprites/unboxed.png")
loadSprite("flower", "/sprites/flower.png") 
loadSprite("stairs", "/sprites/stairs.png") 
loadSprite("skeleton", "/sprites/skeleton.png")
loadSprite("linternas", "/sprites/linternas.png") 
loadSprite("peligro", "/sprites/peligro.png") 
loadSprite("chi", "/sprites/chi2.png") 
loadSprite("cofre", "/sprites/cofre.png")
loadSprite("sign", "/sprites/1874317.png") 
loadSprite("pink-grass", "/sprites/pink-grass.png") 
loadSprite("pink-tree", "/sprites/pink-tree.png")
loadSprite("purple-heart", "/sprites/purple-heart.png")
loadSprite("tree2", "/sprites/tree2.png")

scene("game", () => {
    // Cargar el nivel actual con su fondo correspondiente
    // Puedes cambiar el fondo según el nivel actual
    layers([
        "background",
        "game",
        "ui"
    ], "game");

    //Cargar las monedas y el corazón
    Const player = add ([
        sprite("chi"), // Reemplaza "chi" con el nombre de tu sprite de jugador
        pos(80,80),  // Posición inicial del jugador en el juego
        body(), // Agrega un cuerpo físico al jugador para las colisiones y gravedad
        area(), // Define un área de colisión para el jugador
        scale(1), // Escala inicial del jugador (puedes ajustar según el tamaño del sprite)
        "player" // Etiqueta para identificar al jugador
    ]);

    const coin = add([
        sprite("coin"),
        "coin",
        pos(100,100),
        area(),
    ]);

    Const hear = add ([
        sprite ("heart"),
        "heart",
        pos(200,200),
        area(),
    ]);

    // Definir la lógica de colisiones con las monedas
    player.collides("coin", (c) => {
        // Realizar alguna acción cuando el jugador colisiona con una moneda
        // Por ejemplo, reproducir un sonido, aumentar el puntaje del jugador, etc.
        // Luego, eliminar la moneda
        destroy(C);
    });
    // Definir la lógica de colisión con el corazón
    player.collides("heart", (h) => {
        // Realizar alguna acción cuando el jugador colisiona con el corazón
        // Por ejemplo, mostrar una pregunta
        mostrarPregunta();
            // Luego, eliminar el corazón
        destroy(h);
        });
    // y el corazón que desencadenará las preguntas

    

    // Definir la lógica del jugador (movimiento, saltos, etc.)
    player.action(() => {
        // Movimiento horizontal
        if (keyIsDown("left")) {
            player.move(-120, 0); // Mover hacia la izquierda
    }
        if (keyIsDown("right")) {
            player.move(120, 0); // Mover hacia la derecha
    }
  
    // Salto
        if (keyIsPressed("up") && player.grounded()) {
            player.jump(350); // Salto con una fuerza de 350 unidades
    }
  });

    // Definir la lógica de salto del jugador
        if keyPress("space", () => {
        if (player.grounded()) {
            player.jump(300); // El jugador salta si está en el suelo
        }
    });

    // Definir la lógica del enemigo y otros elementos del juego
    const enemy = add([
        sprite("ghosty"), // Reemplaza "ghosty" con el nombre de tu sprite de enemigo
        pos(400, 200),    // Posición inicial del enemigo en el juego
        body(),           // Agrega un cuerpo físico al enemigo para las colisiones y gravedad
        area(),           // Define un área de colisión para el enemigo
        scale(1),         // Escala inicial del enemigo (ajusta según el tamaño del sprite)
        "enemy"           // Etiqueta para identificar al enemigo
    ]);

    // Definir la lógica de movimiento del enemigo

    enemy.action(() => {
    // Aquí puedes definir la lógica de movimiento del enemigo,
    // como hacerlo moverse de izquierda a derecha, o siguiendo al jugador, etc.
    // Por ejemplo, puedes usar una función de interpolación para que se mueva de un punto a otro.

    // Aquí tienes un ejemplo básico de movimiento horizontal:
    
        enemy.move(100, 0); // El enemigo se mueve hacia la derecha a una velocidad de 100 unidades por segundo
});

    // Definir la lógica de colisiones con el jugador
    enemy.collides("player", () => {
    // Aquí puedes definir la acción que ocurre cuando el jugador colisiona con el enemigo,
    // como reducir la salud del jugador, reproducir un sonido de golpe, etc.
    // Por ejemplo:
        destroy(enemy); // Elimina al enemigo cuando colisiona con el jugador
});

// Función para mostrar una pregunta en la interfaz de usuario
function mostrarPregunta() {
    // Implementar la lógica para mostrar una pregunta y sus opciones en la interfaz de usuario
}

// Función para comprobar si la respuesta seleccionada es correcta
function comprobarRespuesta(respuestaSeleccionada, pregunta) {
    if (respuestaSeleccionada === pregunta.correcta) {
        // La respuesta es correcta, realizar alguna acción
        // Por ejemplo, reproducir un sonido o agregar puntos al puntaje del jugador
    } else {
        // La respuesta es incorrecta, realizar alguna otra acción si es necesario
    }
}
    

    // Configurar la música de fondo y los efectos de sonido

    // Mostrar el puntaje y otras estadísticas en la interfaz de usuario
// Configurar la música de fondo y los efectos de sonido
// Ejemplo de cómo reproducir música de fondo
// play("nombre_de_tu_musica.mp3");

// Ejemplo de cómo reproducir un efecto de sonido al recolectar una moneda
player.collides("coin", (c) => {
    // Reproducir un efecto de sonido al recolectar una moneda
    // play("sonido_moneda.mp3");

    // Realizar otras acciones al recolectar una moneda
    // Por ejemplo, aumentar el puntaje del jugador
    // updatePuntaje(10); // Aumenta el puntaje del jugador en 10 unidades

    // Luego, eliminar la moneda
    destroy(c);
});

// Mostrar el puntaje y otras estadísticas en la interfaz de usuario
// Agregar una etiqueta de texto para mostrar el puntaje del jugador
const puntajeLabel = add([
    text("Puntaje: 0", 16), // Texto inicial del puntaje
    pos(12, 12),             // Posición del texto en la pantalla
    layer("ui"),             // Capa "ui" para mostrar el texto sobre otros elementos del juego
    {
        value: 0             // Valor inicial del puntaje
    }
]);

// Función para actualizar el puntaje del jugador en la interfaz de usuario
function updatePuntaje(valor) {
    // Actualizar el valor del puntaje
    puntajeLabel.value += valor;

    // Actualizar el texto mostrado en la etiqueta de texto
    puntajeLabel.text = "Puntaje: " + puntajeLabel.value;
}
});

kaboom({

    // Cargar sprites
    loadSprite("bean", "/sprites/bean.png") 
    loadSprite("bag", "/sprites/bag.png")
    // Cargar otros sprites...

    scene("game", () => {
        // Cargar el nivel actual con su fondo correspondiente
        // Puedes cambiar el fondo según el nivel actual
        layers([
            "background",
            "game",
            "ui"
        ], "game");

        // Cargar las monedas y el corazón
        const player = add ([
            sprite("chi"), // Reemplaza "chi" con el nombre de tu sprite de jugador
            pos(80,80),    // Posición inicial del jugador en el juego
            body(),       // Agrega un cuerpo físico al jugador para las colisiones y gravedad
            area(),       // Define un área de colisión para el jugador
            scale(1),     // Escala inicial del jugador (puedes ajustar según el tamaño del sprite)
            "player"      // Etiqueta para identificar al jugador
        ]);

        const coin = add([
            sprite("coin"),
            "coin",
            pos(100,100),
            area(),
        ]);

        const heart = add ([
            sprite ("heart"),
            "heart",
            pos(200,200),
            area(),
        ]);

        // Definir la lógica de colisiones con las monedas
        player.collides("coin", (c) => {
            // Realizar alguna acción cuando el jugador colisiona con una moneda
            // Por ejemplo, reproducir un sonido, aumentar el puntaje del jugador, etc.
            // Luego, eliminar la moneda
            destroy(c);
            updatePuntaje(10); // Suma 10 al puntaje cuando el jugador recoge una moneda
        });

        // Definir la lógica de colisión con el corazón
        player.collides("heart", (h) => {
            // Realizar alguna acción cuando el jugador colisiona con el corazón
            // Por ejemplo, mostrar una pregunta
            mostrarPregunta();
            // Luego, eliminar el corazón
            destroy(h);
        });

        // Definir la lógica del jugador (movimiento, saltos, etc.)
        player.action(() => {
            // Movimiento horizontal
            if (keyIsDown("left")) {
                player.move(-120, 0); // Mover hacia la izquierda
            }
            if (keyIsDown("right")) {
                player.move(120, 0); // Mover hacia la derecha
            }
        
            // Salto
            if (keyIsPressed("up") && player.grounded()) {
                player.jump(350); // Salto con una fuerza de 350 unidades
            }
        });

        // Definir la lógica de salto del jugador
        keyPress("space", () => {
            if (player.grounded()) {
                player.jump(300); // El jugador salta si está en el suelo
            }
        });

        // Definir la lógica del enemigo y otros elementos del juego
        const enemy = add([
            sprite("ghosty"), // Reemplaza "ghosty" con el nombre de tu sprite de enemigo
            pos(400, 200),    // Posición inicial del enemigo en el juego
            body(),           // Agrega un cuerpo físico al enemigo para las colisiones y gravedad
            area(),           // Define un área de colisión para el enemigo
            scale(1),         // Escala inicial del enemigo (ajusta según el tamaño del sprite)
            "enemy"           // Etiqueta para identificar al enemigo
        ]);

        // Definir la lógica de movimiento del enemigo
        enemy.action(() => {
            // Aquí puedes definir la lógica de movimiento del enemigo,
            // como hacerlo moverse de izquierda a derecha, o siguiendo al jugador, etc.
            // Por ejemplo, puedes usar una función de interpolación para que se mueva de un punto a otro.

            // Aquí tienes un ejemplo básico de movimiento horizontal:
            enemy.move(100, 0); // El enemigo se mueve hacia la derecha a una velocidad de 100 unidades por segundo
        });

        // Definir la lógica de colisiones con el jugador
        enemy.collides("player", () => {
            // Aquí puedes definir la acción que ocurre cuando el jugador colisiona con el enemigo,
            // como reducir la salud del jugador, reproducir un sonido de golpe, etc.
            // Por ejemplo:
            destroy(enemy); // Elimina al enemigo cuando colisiona con el jugador
        });

        // Función para mostrar una pregunta en la interfaz de usuario
        function mostrarPregunta() {
            // Aquí puedes implementar la lógica para mostrar una pregunta en la interfaz de usuario
        }

        // Función para actualizar el puntaje del jugador
        function updatePuntaje(valor) {
            const puntajeLabel = get("puntaje")[0]; // Obtener la etiqueta de puntaje
            puntajeLabel.value += valor; // Sumar el valor al puntaje actual
            puntajeLabel.text = "Puntaje: " + puntajeLabel.value; // Actualizar el texto de la etiqueta
        }
        
        // Configurar la música de fondo y los efectos de sonido
        // Reemplaza "nombre_de_tu_musica.mp3" y "sonido_efecto.mp3" con las rutas a tus archivos de sonido
        play("nombre_de_tu_musica.mp3"); // Reproduce la música de fondo
        // play("sonido_efecto.mp3"); // Reproduce un efecto de sonido
        
        // Mostrar el puntaje y otras estadísticas en la interfaz de usuario
        add([text("Puntaje: 0", 16), pos(12, 12), layer("ui"), { value: 0 }, "puntaje"]);
    });

});
