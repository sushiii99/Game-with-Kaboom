kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  background: [0, 0, 0, 1],
})

// Speed identifiers
const MOVE_SPEED = 120
const JUMP_FORCE = 360
const BIG_JUMP_FORCE = 550
let CURRENT_JUMP_FORCE = JUMP_FORCE
const FALL_DEATH = 400
const ENEMY_SPEED = 20

// Game logic

let isJumping = true 

// SPRITES PERSONALIZADAS (NO MARIO), poner sprites/ghosty.png no sirve
loadSprite('ghosty', "https://kaboomjs.com/sprites/ghosty.png")
loadSprite('block', "https://kaboomjs.com/sprites/grass.png") // GRASS, scale(0.34)
loadSprite('portal', "https://kaboomjs.com/sprites/portal.png")
loadSprite('spike', "https://kaboomjs.com/sprites/spike.png")


// NO ESTOY SEGURA SI LOADROOT ESTA EN LA NUEVA VERSION

loadRoot('https://i.imgur.com/') //NO BORRAR, es la ruta para encontrar las imagenes
//  235Bcj3.png no pixeleado , uSuWl8C.png pixeleado 40 pixeles
loadSprite('mario', '235Bcj3.png')




// FIN SPRITES 

loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
//loadSprite('block', 'M6rwarW.png')
//loadSprite('mario', 'Wb1qfhK.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('surprise', 'gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left', 'ReTPiWY.png')
loadSprite('pipe-top-right', 'hj2GK4n.png')
loadSprite('pipe-bottom-left', 'c1cYSbt.png')
loadSprite('pipe-bottom-right', 'nqQ79eI.png')

loadSprite('blue-block', 'fVscIbn.png')
loadSprite('blue-brick', '3e5YRQd.png')
loadSprite('blue-steel', 'gqVoI2b.png')
loadSprite('blue-evil-shroom', 'SvV4ueD.png')
loadSprite('blue-surprise', 'RMqCc1G.png')



const questions = [
  {
      id: 1,
      categoria: "general",
      titulo: "¿Cuál es el planeta más grande de nuestro sistema solar?",
      opcionA: "Tierra",
      opcionB: "Marte",
      opcionC: "Jupiter",
      opcionD: "Saturno",
      correcta: "c"
  },
  {
      id: 2,
      categoria: "general",
      titulo: "¿Quién escribió 'Cien años de soledad'?",
      opcionA: "Gabriel García Márquez",
      opcionB: "Julio Cortázar",
      opcionC: "Isabel Allende",
      opcionD: "Mario Vargas Llosa",
      correcta: "a"
  },
  {
      id: 3,
      categoria: "musica",
      titulo: "¿Quién es conocido como el primer Rey del Pop?",
      opcionA: "Elvis Presley",
      opcionB: "Michael Jackson",
      opcionC: "Madonna",
      opcionD: "Prince",
      correcta: "b"
  },
  {
      id: 4,
      categoria: "deportes",
      titulo: "¿En qué deporte se utiliza una pelota de baloncesto?",
      opcionA: "Fútbol",
      opcionB: "Baloncesto",
      opcionC: "Golf",
      opcionD: "Tenis",
      correcta: "b"
  }
]

// Create a parent node that won't be affected by camera (fixed) and will be drawn on top (z of 100)
const ui = add([
  fixed(),
  z(100),
])

// LAYERS FUE ELIMINADO DE LA NUEVA VERSION, HAY OTRO SISTEMA, 
//https://stackoverflow.com/questions/77763223/layer-is-not-defined-in-kaboomjs-v3000

scene("game", ({ level, score } = {level:0 , score:0}) => {

// maps y levelcfg estan afuera de scene en tutorial, no creo que importe, pq son const
  const maps = [
    [
      '       0             ',
      '      --             ',
      '           $$        ',
      '   *      ===        ',
      '                     ',
      '                     ',
      '                   p ',
      '            =   g =  ',
      '==========^^===========',
    ],
    [
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '     %   =*=%=                        ',
      '                                      ',
      '                                    p ',
      '                    e   e             ',
      '==============================   =====',
    ],
    [
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£        @@@*@@              x x        £',
      '£                          x x x        £',
      '£                        x x x x  x  p  £',
      '£               z   z  x x x x x  x     £',
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    ],
    [
      '      0           ',
      '     --           ',
      '          $$      ',
      '  *      ===      ',
      '                  ',
      '                  ',
      '       ^^      g = p',
      '==================',
    ],
    [
      "                          $",
      "                          $",
      "                          $",
      "                          $",
      "                          $",
      "           $$         =   $",
      "  *      ====         =   $",
      "                      =   $",
      "                      =    ",
      "       ^^      = g    =   p",
      "===========================",
    ],
    [
      "     $    $    $    $     $",
      "     $    $    $    $     $",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      "                           ",
      " ^^^^g^^^^g^^^^g^^^^g^^^^^p",
      "===========================",
    ],
  ]

  const levelCfg = {
    tileWidth: 20,
    tileHeight: 20,
    tiles:{ 
    '=': () => [sprite('block'), body({ isStatic: true }), scale(0.34)],
    '$': () => [sprite('coin'), 'coin'],
    '%': () => [sprite('surprise'), body({ isStatic: true }), 'coin-surprise'],
    '*': () => [sprite('surprise'), body({ isStatic: true }), 'mushroom-surprise'],
    '}': () => [sprite('unboxed'), body({ isStatic: true })],
    '(': () => [sprite('pipe-bottom-left'), body({ isStatic: true }), scale(0.5)],
    ')': () => [sprite('pipe-bottom-right'), body({ isStatic: true }), scale(0.5)],
    '-': () => [sprite('pipe-top-left'), body({ isStatic: true }), scale(0.5), 'pipe'],
    '+': () => [sprite('pipe-top-right'), body({ isStatic: true }), scale(0.5), 'pipe'],
    'e': () => [sprite('evil-shroom'), body({ isStatic: true }), 'dangerous'],
    '#': () => [sprite('mushroom'), body({ isStatic: true }), 'mushroom', body()], //body es para darle gravedad
    '!': () => [sprite('blue-block'), body({ isStatic: true }), scale(0.5)],
    '£': () => [sprite('blue-brick'), body({ isStatic: true }), scale(0.5)],
    'z': () => [sprite('blue-evil-shroom'), body({ isStatic: true }), scale(0.5), 'dangerous'],
    '@': () => [sprite('blue-surprise'), body({ isStatic: true }), scale(0.5), 'coin-surprise'],
    'x': () => [sprite('blue-steel'), body({ isStatic: true }), scale(0.5)],
    'p': () => [sprite('portal'), body({ isStatic: true }), scale(0.8), 'portal'], // esto yo lo agregue
    '^': () => [sprite('spike'), body({ isStatic: true }), scale(0.3), 'danger'],
    'g': () => [sprite('ghosty'), body({ isStatic: true }) , scale(0.5), 'enemy']
  }
  }

  const gameLevel = addLevel(maps[level], levelCfg)

  const scoreLabel = add([
    text(score),
    pos(30, 6),
    {
      value: score,
    }
  ])

  add([text('level ' + parseInt(level + 1)), pos(40, 6)])

  function big() {
    let timer = 0
    let isBig = false
    return {
      update() {
        if (isBig) {
          CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
          timer -= dt()
          if (timer <= 0) {
            this.smallify()
          }
        }
      },
      isBig() {
        return isBig
      },
      smallify() {
        this.scale = vec2(1)
        CURRENT_JUMP_FORCE = JUMP_FORCE
        timer = 0
        isBig = false
      },
      biggify(time) {
        this.scale = vec2(2)
        timer = time
        isBig = true
      }
    }
  }

  const player = add([
    sprite('mario'), body({ isStatic: true }), 
    pos(30, 0),
    body(),
    big(),
    anchor('bot')
  ])

  action('mushroom', (m) => {
    m.move(20, 0)
  })

  player.on("headbump", (obj) => {
    if (obj.is('coin-surprise')) {
      gameLevel.spawn('$', obj.gridPos.sub(0, 1))
      destroy(obj)
      gameLevel.spawn('}', obj.gridPos.sub(0, 0))
    }
    if (obj.is('mushroom-surprise')) {
      gameLevel.spawn('#', obj.gridPos.sub(0, 1))
      destroy(obj)
      gameLevel.spawn('}', obj.gridPos.sub(0, 0))
    }
  })



// AQUI EMPIEZA CODIGO NUEVO,en codigo nuevo sigue player.colide



  // Variables globales
  let currentQuestionIndex = 0;
  let questionVisible = false;

  // Lógica para mostrar la pregunta y las opciones de respuesta
  function showQuestion() {
    questionVisible = true;
    const question = questions[currentQuestionIndex];
    const questionElem = document.getElementById('question');
    const optionAElem = document.getElementById('optionA');
    const optionBElem = document.getElementById('optionB');
    const optionCElem = document.getElementById('optionC');
    const optionDElem = document.getElementById('optionD');
    
    questionElem.innerText = question.titulo;
    optionAElem.innerText = question.opcionA;
    optionBElem.innerText = question.opcionB;
    optionCElem.innerText = question.opcionC;
    optionDElem.innerText = question.opcionD;

    document.getElementById('question-container').style.display = 'block';
  }

  // Lógica para esconder la pregunta
  function hideQuestion() {
    questionVisible = false;
    document.getElementById('question-container').style.display = 'none';
    player.move(MOVE_SPEED, 0)
  }

// CODIGO ORIGINAL EQUIVALENTE ES:
// player.onCollide('mushroom', (m) => {
//   destroy(m)
//   player.biggify(6)
// })


// Función para verificar la respuesta
function checkAnswer(answer) {
  const question = questions[currentQuestionIndex];
  if (answer === question.correcta) {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      player.biggify(6);
      hideQuestion();
      player.move(MOVE_SPEED, 0); // Activar movimiento automáticamente
    }
  } else {
    hideQuestion();
  }
  add([
    text("HAZ CLICK PARA MOVERTE"), anchor("center")
  ])
  onKeyPress(() => {
    player.move(MOVE_SPEED, 0);
})
}

  // Eventos de clic para los botones de respuesta
  document.getElementById('optionA').addEventListener('click', () => checkAnswer('a'));
  document.getElementById('optionB').addEventListener('click', () => checkAnswer('b'));
  document.getElementById('optionC').addEventListener('click', () => checkAnswer('c'));
  document.getElementById('optionD').addEventListener('click', () => checkAnswer('d'));

  player.onCollide('mushroom', (m) => {
    destroy(m);
    showQuestion();
  });
  
// DE AQUI PARA ABAJO ES IGUAL A LA ORIGINAL -> ya no, agregue cosas
  player.onCollide('coin', (c) => {
    destroy(c);
    scoreLabel.value++;
    scoreLabel.text = scoreLabel.value;
  })

  action('dangerous', (d) => {
    d.move(-ENEMY_SPEED, 0);
  })

  action('enemy', (d) => {
    d.move(-ENEMY_SPEED, 0);
  })


  player.onCollide('dangerous', (d) => {
    if (isJumping) {
      destroy(d);
    } else {
      go('lose', { score: scoreLabel.value });
    }
  })

  player.onCollide("danger", () => {
		go('lose', { score: scoreLabel.value })
	})

  player.action(() => {
    camPos(player.pos);
    if (player.pos.y >= FALL_DEATH) {
      go('lose', { score: scoreLabel.value });
    }
  })
//Esta funcion yo la puse , PORTAL

player.onCollide("portal", () => {
  go('game', {
    level: (level + 1) % maps.length,
    score: scoreLabel.value
  });
});
  // ESTA FUNCION era de la original
  player.onCollide('pipe', () => {
    keyPress('down', () => {
      go('game', {
        level: (level + 1) % maps.length,
        score: scoreLabel.value
      })
    })
  })

  // ENEMY, GHOSTY

  player.onCollide('enemy', (d) => {
    if (isJumping) {
      player.jump(JUMP_FORCE * 2);
      destroy(d)
    } else {
      go('lose', { score: scoreLabel.value });
    }
  })

  keyDown('left', () => {
    player.move(-MOVE_SPEED, 0);
  })

  keyDown('right', () => {
    player.move(MOVE_SPEED, 0);
  })

  player.action(() => {
    if (player.grounded()) {
      isJumping = false;
    }
  })

  keyPress('space', () => {
    if (player.grounded()) {
      isJumping = true;
      player.jump(CURRENT_JUMP_FORCE);
    }
  })

  scene('lose', ({ score }) => {
    add([
      text("You Lose"), 
    ])
    add([text(score, 32), anchor('center'), pos(width() / 2, height() / 2)]);
  })
})

go("game", { level: 0, score: 0 })
