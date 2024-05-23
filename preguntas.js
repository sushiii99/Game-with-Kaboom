

var preguntas = [
    {
        pregunta: "¿Cuál de estas actividades puede ayudarte a sentirte más tranquilo/a cuando estás bajo presión? ",
        respuestaA: "Practicar la respiración profunda",
        respuestaB: "Escuchar música",
        respuestaC: "Leer una frase motivadora",
        respuestaD: "Todas las anteriores",
        correcta: "d) Todas las anteriores"
    },

    {
        pregunta: "¿Qué estrategia te ayuda a mantener una actitud positiva incluso en momentos difíciles? ",
        respuestaA: "Reírte de tus problemas",
        respuestaB: "Hablar sobre tus preocupaciones con alguien de confianza",
        respuestaC: "Ignorar tus emociones",
        respuestaD: "A y B",
        correcta: "d) A y B "
    },

    {
        pregunta: "¿Qué acción te ayuda a superar la sensación de soledad?",
        respuestaA: "Hacer actividades nuevas sólo",
        respuestaB: "Practicar la empatía hacia los demás",
        respuestaC: "Aislarte del mundo",
        respuestaD: "Comprar cosas nuevas",
        correcta: "b) Practicar la empatía hacia los demás"
    },

    {
        pregunta: "¿Qué estrategia te ayuda a mejorar de manera adecuada tu concentración cuando estás estresado/a?",
        respuestaA: "Hacer varias cosas a la vez",
        respuestaB: "Respirar profundamente y priorizar tareas",
        respuestaC: "Distraerte con el celular",
        respuestaD: "Aumentar la cantidad de café que consumes",
        correcta: "b) Respirar profundamente y priorizar tareas"
    },

    {
        pregunta: "¿Qué actividad antes de dormir puede ayudarte a conciliar el sueño más fácilmente?",
        respuestaA: "Mirar tu teléfono celular",
        respuestaB: "Leer un libro",
        respuestaC: "Tomar una bebida energética",
        respuestaD: "Escuchar música a todo volumen",
        correcta: "b) Leer un libro"
    },

    {
        pregunta: "¿Qué acción te ayuda a crear un ambiente propicio para dormir?",
        respuestaA: "Mantener la luz encendida",
        respuestaB: "Mantener la habitación fresca y oscura",
        respuestaC: "Ver películas emocionantes antes de dormir",
        respuestaD: "Comer una cena abundante, alta en azúcares",
        correcta: "Mantener la habitación fresca y oscura"
    },

    {
        pregunta: "¿Qué hábito puede mejorar la calidad de tu sueño?",
        respuestaA: "Ir a la cama a horas aleatorias cada noche",
        respuestaB: "Mantener la habitación desordenada",
        respuestaC: "Evitar el ejercicio físico durante el día",
        respuestaD: "Relajarte con una rutina de relajación antes de acostarte",
        correcta: "d) Relajarte con una rutina de relajación antes de acostarte"
    },

    {
        pregunta: "¿Cuál de estas prácticas puede ayudarte a lidiar con el insomnio ocasional?",
        respuestaA: "Mirar la televisión en la cama",
        respuestaB: "Realizar técnicas de relajación",
        respuestaC: "Consumir alimentos procesados justo antes de acostarte",
        respuestaD: "Hacer ejercicio vigoroso justo antes de dormir",
        correcta: "b) Realizar técnicas de relajación"
    },

    {
        pregunta: "¿Qué hábito puede mejorar la calidad de tu sueño a largo plazo?",
        respuestaA: "Dormir en diferentes horarios cada noche",
        respuestaB: "Dormir por horas durante el día",
        respuestaC: "Limitar la exposición a pantallas brillantes antes de dormir",
        respuestaD: "Comer una gran comida justo antes de acostarte",
        correcta: "c) Limitar la exposición a pantallas brillantes antes de dormir"
    },

   
    {
        pregunta: "¿Qué hábito te ayuda a mantenerte correctamente hidratado/a durante el día?",
        respuestaA: "Beber solo bebidas azucaradas",
        respuestaB: "Beber milk shake",
        respuestaC: "Consumir entre 6 a 8 vasos de agua al día",
        respuestaD: "Beber té",
        correcta: "c) Consumir entre 6 a 8 vasos de agua al día"
    },

   
    {
        pregunta: "¿Qué acción puede ayudarte a mantener una piel sana?",
        respuestaA: "Pasar todo el día bajo el sol sin protección",
        respuestaB: "Consumir alimentos ricos en vitaminas y antioxidantes",
        respuestaC: "Fumar regularmente",
        respuestaD: "No beber suficiente agua",
        correcta: "b) Consumir alimentos ricos en vitaminas y antioxidantes"
    },

    {
        pregunta: "¿Qué hábito puede mejorar tu salud a largo plazo?",
        respuestaA: "Ignorar tus emociones y preocupaciones",
        respuestaB: "Priorizar el descanso y dormir lo suficiente cada noche",
        respuestaC: "Consumir alcohol regularmente",
        respuestaD: "Evitar hacer ejercicio regularmente",
        correcta: "b) Priorizar el descanso y dormir lo suficiente cada noche"
    },

    {
        pregunta: "¿Cuál de estas prácticas promueve una alimentación más equilibrada?",
        respuestaA: "Consumir solo alimentos altos en grasas y azúcares",
        respuestaB: "Incluir una variedad de alimentos en tu dieta, como frutas, verduras, proteínas y granos enteros ",
        respuestaC: "Saltarte comidas para ahorrar tiempo",
        respuestaD: "Eliminar frutas y verduras",
        correcta: "b) Incluir una variedad de alimentos en tu dieta, como frutas, verduras, proteínas y granos enteros"
    },

   
    {
        pregunta: "¿Cuál de las siguientes opciones es una fuente saludable de proteínas?",
        respuestaA: "Hamburguesa con queso",
        respuestaB: "Tofu",
        respuestaC: "Papas fritas",
        respuestaD: "Tomate",
        correcta: "b) Tofu"
    },

    {
        pregunta: "¿Cuál es una buena fuente de ácidos grasos omega-3?",
        respuestaA: "Mantequilla",
        respuestaB: "Atún",
        respuestaC: "Galletas",
        respuestaD: "Milanesa",
        correcta: "b) Atún"
    },

    {
        pregunta: "¿Qué alimento es rico en fibra?",
        respuestaA: "Arroz",
        respuestaB: "Pan",
        respuestaC: "Avena",
        respuestaD: "Fideos",
        correcta: "c) Avena"
    },

    {
        pregunta: "¿Cuál de las siguientes opciones es una colación saludable?",
        respuestaA: "Galletas con crema de chocolate",
        respuestaB: "Yogurt con frutas",
        respuestaC: "Palomitas de maíz con mantequilla",
        respuestaD: "Manzana caramelizada",
        correcta: "b) Yogurt con frutas"
    },

    {
        pregunta: "¿Qué bebida es más saludable para hidratarse?",
        respuestaA: "Coca-cola",
        respuestaB: "Agua",
        respuestaC: "Jugo de fruta concentrado",
        respuestaD: "Agua de coco",
        correcta: "Agua"
    },

    {
        pregunta: "¿Cuál de las siguientes opciones es una fuente de proteínas magras recomendada para adolescentes?",
        respuestaA: "Hamburguesa",
        respuestaB: "Pechuga de pollo al horno",
        respuestaC: "Longaniza frita",
        respuestaD: "Pizza de pepperoni y tocino",
        correcta: "b) Pechuga de pollo al horno"
    },

    {
        pregunta: "¿Cuál es el grupo de alimentos que proporciona una fuente importante de calcio para adolescentes, ayudando al desarrollo de huesos y dientes fuertes?",
        respuestaA: "Frutas",
        respuestaB: "Carnes",
        respuestaC: "Lácteos",
        respuestaD: "Pan y cereales integrales",
        correcta: "c) Lácteos"
    },

    {
        pregunta: "¿Qué fuente de grasas saludables se recomienda incluir en la dieta de los adolescentes?",
        respuestaA: "Mantequilla",
        respuestaB: "Margarina",
        respuestaC: "Palta y/o frutos secos",
        respuestaD: "Galletas",
        correcta: "c) Palta y/o frutos secos"
    },

    {
        pregunta: "¿Cuál de estas frases define mejor a la ansiedad?",
        respuestaA: "La ansiedad es una respuesta adaptativa del cuerpo que puede ayudar a protegerlo",
        respuestaB: "La ansiedad es una enfermedad mental grave que sólo afecta a ciertas personas",
        respuestaC: "La ansiedad es simplemente una sensación de nerviosismo ocasional",
        respuestaD: "La ansiedad es exclusivamente el resultado de factores genéticos",
        correcta: "a) La ansiedad es una respuesta adaptativa del cuerpo que puede ayudar a protegerlo"
    },

   
    {
        pregunta: "¿Qué son los trastornos de la alimentación",
        respuestaA: "Son patrones anormales de comportamiento alimentario que pueden implicar la restricción extrema de alimentos, el exceso de ejercicio o la purga",
        respuestaB: "Son enfermedades causadas únicamente por factores genéticos",
        respuestaC: "Son enfermedades temporales relacionadas con la dieta, y no requieren tratamiento médico",
        respuestaD: "Son trastornos exclusivamente psicológicos sin repercusiones físicas",
        correcta: "a) Son patrones anormales de comportamiento alimentario que pueden implicar la restricción extrema de alimentos, el exceso de ejercicio o la purga"
    },

    {
        pregunta: "¿Cuál de las siguientes afirmaciones describe mejor la depresión?",
        respuestaA: "Es simplemente sentirse triste o deprimido por un corto periodo de tiempo",
        respuestaB: "Es una condición médica caracterizada por una persistente sensación de tristeza y pérdida de interés en actividades cotidianas",
        respuestaC: "Es una enfermedad mental que sólo afecta a las personas débiles",
        respuestaD: "Es sólo un estado de ánimo pasajero que desaparece sin tratamiento",
        correcta: "b) Es una condición médica caracterizada por una persistente sensación de tristeza y pérdida de interés en actividades cotidianas"
    },

   
    {
        pregunta: "¿Cuál de estos sí es un factor de riesgo para desarrollar un problema de salud mental?",
        respuestaA: "Mantener relaciones sociales saludables",
        respuestaB: "Practicar técnicas de relajación y mindfulness",
        respuestaC: "Realizar actividad física regularmente",
        respuestaD: "Experimentar traumas o eventos estresantes",
        correcta: "d) Experimentar traumas o eventos estresantes"
    },

    
]

// FUNCIÓN PARA SORTEAR LAS PREGUNTAS ALEATORIAMENTE:

function obtenerPreguntaAleatoria() {
    var indice = Math.floor(Math.random() * preguntas.length);
    return preguntas[indice];
}

var pregunta = obtenerPreguntaAleatoria();
console.log(pregunta.pregunta);