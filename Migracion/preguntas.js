

const questions = [
    {
        titulo: "¿Cuál de estas actividades puede ayudarte a sentirte más tranquilo/a cuando estás bajo presión? ",
        opcionA: "Practicar la respiración profunda",
        opcionB: "Escuchar música",
        opcionC: "Leer una frase motivadora",
        opcionD: "Todas las anteriores",
        correcta: "d"
    },

    {
        titulo: "¿Qué estrategia te ayuda a mantener una actitud positiva incluso en momentos difíciles? ",
        opcionA: "Reírte de tus problemas",
        opcionB: "Hablar sobre tus preocupaciones con alguien de confianza",
        opcionC: "Ignorar tus emociones",
        opcionD: "A y B",
        correcta: "d "
    },

    {
        titulo: "¿Qué acción te ayuda a superar la sensación de soledad?",
        opcionA: "Hacer actividades nuevas sólo",
        opcionB: "Practicar la empatía hacia los demás",
        opcionC: "Aislarte del mundo",
        opcionD: "Comprar cosas nuevas",
        correcta: "b"
    },

    {
        titulo: "¿Qué estrategia te ayuda a mejorar de manera adecuada tu concentración cuando estás estresado/a?",
        opcionA: "Hacer varias cosas a la vez",
        opcionB: "Respirar profundamente y priorizar tareas",
        opcionC: "Distraerte con el celular",
        opcionD: "Aumentar la cantidad de café que consumes",
        correcta: "b"
    },

    {
        titulo: "¿Qué actividad antes de dormir puede ayudarte a conciliar el sueño más fácilmente?",
        opcionA: "Mirar tu teléfono celular",
        opcionB: "Leer un libro",
        opcionC: "Tomar una bebida energética",
        opcionD: "Escuchar música a todo volumen",
        correcta: "b"
    },

    {
        titulo: "¿Qué acción te ayuda a crear un ambiente propicio para dormir?",
        opcionA: "Mantener la luz encendida",
        opcionB: "Mantener la habitación fresca y oscura",
        opcionC: "Ver películas emocionantes antes de dormir",
        opcionD: "Comer una cena abundante, alta en azúcares",
        correcta: "b "
    },

    {
        titulo: "¿Cuál de estas actividades te ayuda a despertarte sintiéndote más descansado/a?",
        opcionA: "Dormir en un colchón incómodo",
        opcionB: "Seguir una rutina de sueño regular",
        opcionC: "Consumir cafeína antes de acostarte",
        correcta: "b"
    },

    {
        titulo: "¿Qué hábito puede mejorar la calidad de tu sueño?",
        opcionA: "Ir a la cama a horas aleatorias cada noche",
        opcionB: "Mantener la habitación desordenada",
        opcionC: "Evitar el ejercicio físico durante el día",
        opcionD: "Relajarte con una rutina de relajación antes de acostarte",
        correcta: "d"
    },

    {
        titulo: "¿Cuál de estas prácticas puede ayudarte a lidiar con el insomnio ocasional?",
        opcionA: "Mirar la televisión en la cama",
        opcionB: "Realizar técnicas de relajación",
        opcionC: "Consumir alimentos procesados justo antes de acostarte",
        opcionD: "Hacer ejercicio vigoroso justo antes de dormir",
        correcta: "b"
    },

    {
        titulo: "¿Qué hábito puede mejorar la calidad de tu sueño a largo plazo?",
        opcionA: "Dormir en diferentes horarios cada noche",
        opcionB: "Dormir por horas durante el día",
        opcionC: "Limitar la exposición a pantallas brillantes antes de dormir",
        opcionD: "Comer una gran comida justo antes de acostarte",
        correcta: "c"
    },

    {
        titulo: "¿Qué acción contribuye más a tu bienestar general?",
        opcionA: "Comer al menos 5 porciones de frutas y verduras al día",
        opcionB: "Pasar todo el día sin beber agua",
        opcionC: "Comer comida rápida todos los días",
        correcta: "a"
    },

    {
        titulo: "¿Cuál de estas actividades promueve una buena salud física?",
        opcionA: "Pasar todo el día sentado frente a una pantalla",
        opcionB: "Hacer ejercicio regularmente",
        opcionC: "Consumir alimentos altos en grasas y azúcares",
        correcta: "b"
    },

    {
        titulo: "¿Qué hábito te ayuda a mantenerte correctamente hidratado/a durante el día?",
        opcionA: "Beber solo bebidas azucaradas",
        opcionB: "Beber milk shake",
        opcionC: "Consumir entre 6 a 8 vasos de agua al día",
        opcionD: "Beber té",
        correcta: "c"
    },

    {
        titulo: "¿Cuál de estas prácticas promueve una buena salud digestiva?",
        opcionA: "Consumir alimentos ricos en fibra y beber suficiente agua",
        opcionB: "Comer alimentos procesados y azucarados",
        opcionC: "Consumir solo bebidas gaseosas",
        correcta: "a"
    },

    {
        titulo: "¿Qué acción puede ayudarte a mantener una piel sana?",
        opcionA: "Pasar todo el día bajo el sol sin protección",
        opcionB: "Consumir alimentos ricos en vitaminas y antioxidantes",
        opcionC: "Fumar regularmente",
        opcionD: "No beber suficiente agua",
        correcta: "b"
    },

    {
        titulo: "¿Qué hábito puede mejorar tu salud a largo plazo?",
        opcionA: "Ignorar tus emociones y preocupaciones",
        opcionB: "Priorizar el descanso y dormir lo suficiente cada noche",
        opcionC: "Consumir alcohol regularmente",
        opcionD: "Evitar hacer ejercicio regularmente",
        correcta: "b"
    },

    {
        titulo: "¿Cuál de estas prácticas promueve una alimentación más equilibrada?",
        opcionA: "Consumir solo alimentos altos en grasas y azúcares",
        opcionB: "Incluir una variedad de alimentos en tu dieta, como frutas, verduras, proteínas y granos enteros ",
        opcionC: "Saltarte comidas para ahorrar tiempo",
        opcionD: "Eliminar frutas y verduras",
        correcta: "b"
    },

    {
        titulo: "¿Qué hábito promueve una relación más positiva con la comida?",
        opcionA: "Asociar la comida con emociones negativas como castigo o recompensa",
        opcionB: "Disfrutar de la comida sin sentir culpa ni remordimientos",
        opcionC: "Comer solo cuando estás aburrido/a o estresado/a",
        correcta: "b"
    },

    {
        titulo: "¿Es un mito que la salud mental no es importante mientras estés físicamente saludable?",
        opcionA: "Mito ",
        opcionB: "Realidad ",
        correcta: "a"
    },

    {
        titulo: "¿Es cierto que pedir ayuda es una señal de debilidad?",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },

    {
        titulo: "¿Es cierto que la salud mental de los adolescentes es menos importante que la de los adultos?",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },

    {
        titulo: "¿Es cierto que la terapia solo es útil para las personas con trastornos mentales graves?",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },

    {
        titulo: "La frase (La salud mental es solo cuestión de voluntad) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },

    {
        titulo: "La frase (Dormir mucho es siempre mejor) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },

    {
        titulo: "La frase (La autoestima es estática y no puede fluctuar) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },

    {
        titulo: "La frase (Los adolescentes no sufren de problemas de salud mental reales) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },
    {
        titulo: "La frase (Puedes recuperar el sueño perdido durante el fin de semana) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },

    {
        titulo: "La frase (La actividad física regular puede ayudar a reducir el estrés en los adolescentes) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "b"
    },

    {
        titulo: "La frase (El uso excesivo de las redes sociales puede aumentar el riesgo de problemas de salud mental en los adolescentes) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "b"
    },
    {
        titulo: "La frase (Los adolescentes que reciben más interacciones en las redes sociales siempre tienen una autoestima más alta) es: ",
        opcionA: "Mito",
        opcionB: "Realidad",
        correcta: "a"
    },
    
    {
        titulo: "¿Cuál de las siguientes opciones es una fuente saludable de proteínas?",
        opcionA: "Hamburguesa con queso",
        opcionB: "Tofu",
        opcionC: "Papas fritas",
        opcionD: "Tomate",
        correcta: "b"
    },

    {
        titulo: "¿Cuál es una buena fuente de ácidos grasos omega-3?",
        opcionA: "Mantequilla",
        opcionB: "Atún",
        opcionC: "Galletas",
        opcionD: "Milanesa",
        correcta: "b"
    },

    {
        titulo: "¿Qué alimento es rico en fibra?",
        opcionA: "Arroz",
        opcionB: "Pan",
        opcionC: "Avena",
        opcionD: "Fideos",
        correcta: "c"
    },

    {
        titulo: "¿Cuál de las siguientes opciones es una colación saludable?",
        opcionA: "Galletas con crema de chocolate",
        opcionB: "Yogurt con frutas",
        opcionC: " Palomitas de maíz con mantequilla",
        opcionD: "Manzana caramelizada",
        correcta: "b"
    },

    {
        titulo: "¿Qué bebida es más saludable para hidratarse?",
        opcionA: "Coca-cola",
        opcionB: "Agua",
        opcionC: "Jugo de fruta concentrado",
        opcionD: "Agua de coco",
        correcta: "b"
    },

    {
        titulo: "¿Cuál de las siguientes opciones es una fuente de proteínas magras recomendada para adolescentes?",
        opcionA: "Hamburguesa",
        opcionB: "Pechuga de pollo al horno",
        opcionC: "Longaniza frita",
        opcionD: "Pizza de pepperoni y tocino",
        correcta: "b"
    },

    {
        titulo: "¿Cuál es el grupo de alimentos que proporciona una fuente importante de calcio para adolescentes, ayudando al desarrollo de huesos y dientes fuertes?",
        opcionA: "Frutas",
        opcionB: "Carnes",
        opcionC: "Lácteos",
        opcionD: "Pan y cereales integrales",
        correcta: "c"
    },

    {
        titulo: "¿Qué fuente de grasas saludables se recomienda incluir en la dieta de los adolescentes?",
        opcionA: "Mantequilla",
        opcionB: "Margarina",
        opcionC: "Palta y/o frutos secos",
        opcionD: "Galletas",
        correcta: "c"
    },

    {
        titulo: "¿Cuál de estas frases define mejor a la ansiedad?",
        opcionA: "La ansiedad es una respuesta adaptativa del cuerpo que puede ayudar a protegerlo",
        opcionB: "La ansiedad es una enfermedad mental grave que sólo afecta a ciertas personas",
        opcionC: "La ansiedad es simplemente una sensación de nerviosismo ocasional",
        opcionD: "La ansiedad es exclusivamente el resultado de factores genéticos",
        correcta: "a"
    },

    {
        titulo: "La depresión solo afecta a las personas mayores; los adolescentes no pueden experimentar depresión",
        opcionA: "Verdadero",
        opcionB: "Falso",
        correcta: "b"
    },

    {
        titulo: "La ansiedad es siempre una respuesta normal y saludable ante situaciones estresantes",
        opcionA: "Verdadero",
        opcionB: "Falso",
        correcta: "b"
    },

    {
        titulo: "¿Qué son los trastornos de la alimentación",
        opcionA: "Son patrones anormales de comportamiento alimentario que pueden implicar la restricción extrema de alimentos, el exceso de ejercicio o la purga",
        opcionB: "Son enfermedades causadas únicamente por factores genéticos",
        opcionC: "Son enfermedades temporales relacionadas con la dieta, y no requieren tratamiento médico",
        opcionD: "Son trastornos exclusivamente psicológicos sin repercusiones físicas",
        correcta: "a"
    },

    {
        titulo: "¿Cuál de las siguientes afirmaciones describe mejor la depresión?",
        opcionA: "Es simplemente sentirse triste o deprimido por un corto periodo de tiempo",
        opcionB: "Es una condición médica caracterizada por una persistente sensación de tristeza y pérdida de interés en actividades cotidianas",
        opcionC: "Es una enfermedad mental que sólo afecta a las personas débiles",
        opcionD: "Es sólo un estado de ánimo pasajero que desaparece sin tratamiento",
        correcta: "b"
    },

    {
        titulo: "¿Cuál de estos no es síntoma de la depresión?",
        opcionA: "Aumento de la energía y actividad",
        opcionB: "Sentimientos de tristeza y desesperanza",
        opcionC: "Insomnio o hipersomnia",
        correcta: "a"
    },

    {
        titulo: "¿Cuál de estos sí es un factor de riesgo para desarrollar un problema de salud mental?",
        opcionA: "Mantener relaciones sociales saludables",
        opcionB: "Practicar técnicas de relajación y mindfulness",
        opcionC: "Realizar actividad física regularmente",
        opcionD: "Experimentar traumas o eventos estresantes",
        correcta: "d"
    },

    {
        titulo: "La frase (Hablar sobre problemas de salud mental puede empeorar la situación) es: ",
        opcionA: "Verdadera",
        opcionB: "Falsa",
        correcta: "b"
    },

    {
        titulo: "La frase (El estigma social puede ser un obstáculo para buscar ayuda) es: ",
        opcionA: "Verdadera",
        opcionB: "Falsa",
        correcta: "a"
    },

    {
        titulo: "La frase (Los adolescentes con problemas de salud mental nunca se recuperan) es: ",
        opcionA: "Verdadera",
        opcionB: "Falsa",
        correcta: "b"
    },

    {
        titulo: "El desarrollo y práctica de hábitos saludables son fundamentales para evitar, en parte, los problemas de salud mental: ",
        opcionA: "Verdadero",
        opcionB: "Falso",
        correcta: "a"
    },

    {
        titulo: "¿Cuál de estas no es una estrategia para manejar el estrés?",
        opcionA: "Ignorar por completo las situaciones estresantes",
        opcionB: "Hacer ejercicio regularmente",
        opcionC: "Hablar con amigos o seres queridos sobre tus preocupaciones",
        correcta: "a"
    },


]

// FUNCIÓN PARA SORTEAR LAS PREGUNTAS ALEATORIAMENTE:

// Función para obtener una pregunta aleatoria
function obtenerPreguntaAleatoria() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    return questions[currentQuestionIndex];
}

var pregunta = obtenerPreguntaAleatoria();
console.log(pregunta.titulo);