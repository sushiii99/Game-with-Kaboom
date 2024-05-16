kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
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

loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'M6rwarW.png')
loadSprite('mario', 'Wb1qfhK.png')
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

scene("game", ({ level, score }) => {
  layers(['bg', 'obj', 'ui'], 'obj')

  const maps = [
    [
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '                                      ',
      '     %   =*=%=                        ',
      '                                      ',
      '                            -+        ',
      '                    ^   ^   ()        ',
      '==============================   =====',
    ],
    [
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£        @@@@@@              x x        £',
      '£                          x x x        £',
      '£                        x x x x  x   -+£',
      '£               z   z  x x x x x  x   ()£',
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    ]
  ]

  const levelCfg = {
    width: 20,
    height: 20,
    '=': [sprite('block'), solid()],
    '$': [sprite('coin'), 'coin'],
    '%': [sprite('surprise'), solid(), 'coin-surprise'],
    '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
    '}': [sprite('unboxed'), solid()],
    '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
    ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
    '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
    '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
    '^': [sprite('evil-shroom'), solid(), 'dangerous'],
    '#': [sprite('mushroom'), solid(), 'mushroom', body()],
    '!': [sprite('blue-block'), solid(), scale(0.5)],
    '£': [sprite('blue-brick'), solid(), scale(0.5)],
    'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
    '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
    'x': [sprite('blue-steel'), solid(), scale(0.5)],
  }

  const gameLevel = addLevel(maps[level], levelCfg)

  const scoreLabel = add([
    text(score),
    pos(30, 6),
    layer('ui'),
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
    sprite('mario'), solid(),
    pos(30, 0),
    body(),
    big(),
    origin('bot')
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
  }

// CODIGO ORIGINAL EQUIVALENTE ES:
// player.collides('mushroom', (m) => {
//   destroy(m)
//   player.biggify(6)
// })
  // Verificar la respuesta
  function checkAnswer(option) {
    const question = questions[currentQuestionIndex];
    if (option === question.correcta) {
      player.biggify(8); // Mario se hace grande por 10 segundos
    }
    hideQuestion();
  }

  // Eventos de clic para los botones de respuesta
  document.getElementById('optionA').addEventListener('click', () => checkAnswer('a'));
  document.getElementById('optionB').addEventListener('click', () => checkAnswer('b'));
  document.getElementById('optionC').addEventListener('click', () => checkAnswer('c'));
  document.getElementById('optionD').addEventListener('click', () => checkAnswer('d'));

  player.collides('mushroom', (m) => {
    destroy(m);
    showQuestion();
  });



// DE AQUI PARA ABAJO ES IGUAL A LA ORIGINAL
  player.collides('coin', (c) => {
    destroy(c);
    scoreLabel.value++;
    scoreLabel.text = scoreLabel.value;
  })

  action('dangerous', (d) => {
    d.move(-ENEMY_SPEED, 0);
  })

  player.collides('dangerous', (d) => {
    if (isJumping) {
      destroy(d);
    } else {
      go('lose', { score: scoreLabel.value });
    }
  })

  player.action(() => {
    camPos(player.pos);
    if (player.pos.y >= FALL_DEATH) {
      go('lose', { score: scoreLabel.value });
    }
  })

  // ESTA FUNCION era de la original, no la vi aqui asi que la copie
  player.collides('pipe', () => {
    keyPress('down', () => {
      go('game', {
        level: (level + 1) % maps.length,
        score: scoreLabel.value
      })
    })
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
    add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)]);
  })
})

start("game", { level: 0, score: 0 })
