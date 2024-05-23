kaboom({
	background: [141, 183, 255],
})


// load assets platformer, funciona con live server, no path
loadSprite("bigyoshi", "/examples/sprites/YOSHI.png")
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
loadSound("coin", "/examples/sounds/score.mp3")
loadSound("powerup", "/examples/sounds/powerup.mp3")
loadSound("blip", "/examples/sounds/blip.mp3")
loadSound("hit", "/examples/sounds/hit.mp3")
loadSound("portal", "/examples/sounds/portal.mp3")


//SPRITES NUEVAS, cargadas desde carpeta, son de kaboom
loadSprite("btfly", "/sprites/btfly.png") 
loadSprite("cloud", "/sprites/cloud.png")
loadSprite("door", "/sprites/door.png")
loadSprite("key", "/sprites/key.png")
loadSprite("moon", "/sprites/moon.png")
loadSprite("sun", "/sprites/sun.png")
loadSprite("gigagantrum", "/sprites/gigagantrum.png")
loadSprite("lightening", "/sprites/lightening.png")
// SPRITES MARIO
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
// SPRITES EXTRA
loadSprite("stairs", "/sprites/stairs.png") 
loadSprite("skeleton", "/sprites/skeleton.png")
// SPRITES PERSONALIZADAS XHISFIRE
loadSprite("chi", "/sprites/chi2.png") 


console.log(questions);
let currentQuestionIndex = 0;
let questionVisible = false;

// Lógica para mostrar la pregunta y las opciones de respuesta
function showQuestion() {
questionVisible = true;
// const question = questions[currentQuestionIndex];
const question = obtenerPreguntaAleatoria();
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


setGravity(3200)

// custom component controlling enemy patrol movement
function patrol(speed = 60, dir = -1) {
	return {
		id: "patrol",
		require: [ "pos", "area" ],
		add() {
			this.on("collide", (obj, col) => {
				if (col.isLeft() || col.isRight()) {
					dir = -dir
				}
			})
		},
		update() {
			this.move(speed * dir, 0)
		},
	}
}

// custom component that makes stuff grow big
function big() {
	let timer = 0
	let isBig = false
	let destScale = 1
	return {
		// component id / name
		id: "big",
		// it requires the scale component
		require: [ "scale" ],
		// this runs every frame
		update() {
			if (isBig) {
				timer -= dt()
				if (timer <= 0) {
					this.smallify()
				}
			}
			this.scale = this.scale.lerp(vec2(destScale), dt() * 6)
		},
		// custom methods
		isBig() {
			return isBig
		},
		smallify() {
			destScale = 1
			timer = 0
			isBig = false
		},
		biggify(time) {
			destScale = 2
			timer = time
			isBig = true
		},
	}
}

// define some constants
const JUMP_FORCE = 1320
const MOVE_SPEED = 480
const FALL_DEATH = 2400

const LEVELS = [
    [    
    "           c                ",                                    
    "    c              c        ",
    "                         o  ",
    "   1   1*414                ",
    "                            ",
    "                            ",
    "          e   e           p ",
    "44444444444444444444   44444",
],
[
    "£                              £",
    "£                              £",
    "£                              £",
    "£                              £",
    "£   111*11          x x        £",
    "£                 x x x        £",
    "£               x x x x  x  @  £",
    "£      b   b  x x x x x  x     £",
    "55555555555555555555555555555555",
],
[
    "    0      o",
    "   --   3   ",
    "       $$   ",
    " %    ===   ",
    "            ",
    "   ^^ f> = @",
    "============",
],
	[
		"                          $",
		"                          $",
		"                          $",
		"                          $",
		"                          $",
		"           $$         =   $",
		"  %      ====         =   $",
		"                      =   $",
		"                      =    ",
		"       ^^      = >    =   @",
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
		" ^^^^>^^^^>^^^^>^^^^>^^^^^@",
		"===========================",
	],
]

const static= body({ isStatic: true })
const hide = offscreen({ hide: true })
// define what each symbol means in the level graph
const levelConf = {
	tileWidth: 64,
	tileHeight: 64,
	tiles: {
		"=": () => [sprite("grass"), area(), static, anchor("bot"), hide,"platform",],
		"-": () => [sprite("steel"), area(), static, hide, anchor("bot"),],
		"0": () => [sprite("bag"), area(), static, hide, anchor("bot"),],
		"$": () => [sprite("coin"),area(),pos(0, -9),anchor("bot"),hide,"coin",],
		"%": () => [sprite("prize"),area(),static,anchor("bot"),hide,"prize",],
		"^": () => [sprite("spike"),area(),static,anchor("bot"),hide,"danger",],
		"#": () => [sprite("apple"),area(),anchor("bot"),body(),hide,"apple",],
		">": () => [sprite("ghosty"),area(),anchor("bot"),body(),patrol(),hide,"enemy",],
		"@": () => [sprite("portal"),area(), scale(2), anchor("bot"),pos(0, -12),hide,"portal",],
        "p": () => [sprite("pipe"),area({ scale: 0.5 }), scale(2), anchor("bot"),hide,"portal",],
        "s": () => [sprite("stairs"),area({ scale: 0.5 }),anchor("bot"),pos(0, -12),hide,"portal",],
        "3": () => [sprite("btfly"),area(),pos(0, -9),anchor("bot"),hide,],
        "f": () => [sprite("flower"), anchor("bot"),hide,],
        "m": () => [sprite("moon"),area(),pos(0, -9),anchor("bot"),hide,],
        "c": () => [sprite("cloud"),area(), scale(2), pos(0, -9),anchor("bot"),hide,],
        "7": () => [sprite("lightening"),area(),pos(0, -9),anchor("bot"),hide,],
        "o": () => [sprite("sun"),area(),scale(2), pos(0, -9),anchor("bot"),hide,],
        "g": () => [sprite("gigagantrum"),area(),anchor("bot"),body(),patrol(),hide,"enemy",],
        "d": () => [sprite("door"),area({ scale: 0.5 }),anchor("bot"),pos(0, -12),hide,"portal",],
        "k": () => [sprite("key"),area(),pos(0, -9),anchor("bot"),hide,],
        "1": () => [sprite("surprise"), area(),  scale(3.2), static, anchor("bot"), hide,"prize",],
        "2": () => [sprite("unboxed"), area(),  scale(3.2), static, anchor("bot"), hide,"platform",],
        "4": () => [sprite("brick"), area(), scale(3.2),  static, anchor("bot"), hide, "platform",],
        "5": () => [sprite("blue-brick"), area(), scale(1.6),static, anchor("bot"), hide,"platform",],
        "x": () => [sprite("blue-steel"), area({ scale: 0.8 }),  scale(1.6), static, anchor("bot"), hide,"platform",],
        "£": () => [sprite("blue-wall"), area(), scale(1.6),static, anchor("bot"), hide,"platform",],
        "9": () => [sprite("red-wall"), area(),  scale(3.2), static, anchor("bot"), hide,"platform",],
        "t": () => [sprite("skeleton"),area(),anchor("bot"),body(),patrol(),hide,"enemy",],
        "e": () => [sprite("evil-shroom"),area(), scale(3.2), anchor("bot"),body(),patrol(),hide,"enemy",],
        "b": () => [sprite("blue-evil-shroom"),area(), scale(1.6), anchor("bot"),body(),patrol(),hide,"enemy",],
        "y": () => [sprite("mushm"),area(),  scale(3.2), anchor("bot"),body(),patrol(),hide,],

        
	},
}

scene("game", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {

	// add level to scene
	const level = addLevel(LEVELS[levelId ?? 0], levelConf)

	// define player object
	const player = add([
		sprite("chi"),
		pos(0, 0),
		area(),
		scale(0.5),
		// makes it fall to gravity and jumpable
		body(),
		// the custom component we defined above
		big(),
		anchor("bot"),
	])

	// action() runs every frame
	player.onUpdate(() => {
		// center camera to player
		camPos(player.pos)
		// check fall death
		if (player.pos.y >= FALL_DEATH) {
			go("lose")
		}
	})

	player.onBeforePhysicsResolve((collision) => {
		if (collision.target.is(["platform", "soft"]) && player.isJumping()) {
			collision.preventResolution()
		}
	})

	player.onPhysicsResolve(() => {
		// Set the viewport center to player.pos
		camPos(player.pos)
	})

	// if player onCollide with any obj with "danger" tag, lose
	player.onCollide("danger", () => {
		go("lose")
		play("hit")
	})

	player.onCollide("portal", () => {
		play("portal")
		if (levelId + 1 < LEVELS.length) {
			go("game", {
				levelId: levelId + 1,
				coins: coins,
			})
		} else {
			go("win")
		}
	})

	player.onGround((l) => {
		if (l.is("enemy")) {
			player.jump(JUMP_FORCE * 1.5)
			destroy(l)
			addKaboom(player.pos)
			play("powerup")
		}
	})

	player.onCollide("enemy", (e, col) => {
		// if it's not from the top, die
		if (!col.isBottom()) {
			go("lose")
			play("hit")
		}
	})

	let hasApple = false

	// grow an apple if player's head bumps into an obj with "prize" tag
	player.onHeadbutt((obj) => {
		if (obj.is("prize") && !hasApple) {
			const apple = level.spawn("#", obj.tilePos.sub(0, 1))
			apple.jump()
			hasApple = true
			play("blip")
		}
	})


// Lógica para esconder la pregunta
function hideQuestion() {
    questionVisible = false;
    document.getElementById('question-container').style.display = 'none';
    player.move(MOVE_SPEED, 0)
    }

// Función para verificar la respuesta
function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer === question.correcta) {
        player.biggify(6);
        hideQuestion();
        player.move(MOVE_SPEED, 0); // Activar movimiento automáticamente
    } else {
        hideQuestion();
    }
    add([
        text("HAZ CLICK PARA MOVERTE"), anchor("center")
    ]);
    onKeyPress(() => {
        player.move(MOVE_SPEED, 0);
    });
}

 // Eventos de clic para los botones de respuesta
document.getElementById('optionA').addEventListener('click', () => checkAnswer('a'));
document.getElementById('optionB').addEventListener('click', () => checkAnswer('b'));
document.getElementById('optionC').addEventListener('click', () => checkAnswer('c'));
document.getElementById('optionD').addEventListener('click', () => checkAnswer('d'));

	// player grows big onCollide with an "apple" obj
	player.onCollide("apple", (a) => {
		destroy(a)
        showQuestion();
		// as we defined in the big() component
        hasApple = false
		play("powerup")
	})

	let coinPitch = 0

	onUpdate(() => {
		if (coinPitch > 0) {
			coinPitch = Math.max(0, coinPitch - dt() * 100)
		}
	})

	player.onCollide("coin", (c) => {
		destroy(c)
		play("coin", {
			detune: coinPitch,
		})
		coinPitch += 100
		coins += 1
		coinsLabel.text = coins
	})

	const coinsLabel = add([
		text(coins),
		pos(24, 24),
		fixed(),
	])

	function jump() {
		// these 2 functions are provided by body() component
		if (player.isGrounded()) {
			player.jump(JUMP_FORCE)
		}
	}

	// jump with space
	onKeyPress("space", jump)

	onKeyDown("left", () => {
		player.move(-MOVE_SPEED, 0)
	})

	onKeyDown("right", () => {
		player.move(MOVE_SPEED, 0)
	})

	onKeyPress("down", () => {
		player.weight = 3
	})

	onKeyRelease("down", () => {
		player.weight = 1
	})

	onGamepadButtonPress("south", jump)

	onGamepadStick("left", (v) => {
		player.move(v.x * MOVE_SPEED, 0)
	})

	onKeyPress("f", () => {
		setFullscreen(!isFullscreen())
	})

})

scene("lose", () => {
	add([
		text("You Lose"),
	])
	onKeyPress(() => go("game"))
})

scene("win", () => {
	add([
		text("You Win"),
	])
	onKeyPress(() => go("game"))
})

go("game")
