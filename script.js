// --- PREGUNTAS DE PRUEBA ---
const preguntas = [
  {"texto": "El principal objetivo de las empresas debe ser la maximización del beneficio a largo plazo.", "respuesta": False, "explicacion": "Falso. El objetivo principal debe ser satisfacer las necesidades de los clientes y grupos de interés."},
    {"texto": "El principal objetivo de las empresas debe ser el de satisfacer las necesidades de los clientes y de los grupos de interés, abundando la responsabilidad social corporativa.", "respuesta": True, "explicacion": "Verdadero. Las empresas deben equilibrar beneficio y responsabilidad social."},
    {"texto": "El principal objetivo de las empresas debe ser el de perdurar en el tiempo.", "respuesta": False, "explicacion": "Falso. La sostenibilidad es importante, pero el objetivo principal es satisfacer necesidades."},
    {"texto": "El margen neto es un coste directo.", "respuesta": False, "explicacion": "Falso. El margen neto es un resultado financiero, no un coste."},
    {"texto": "Inversión es la distribución de gasto en un periodo determinado, de un valor duradero.", "respuesta": False, "explicacion": "Falso. Eso define la amortización; la inversión es la adquisición de bienes duraderos."},
    {"texto": "Amortización es la distribución de gasto en un periodo determinado, de un valor duradero.", "respuesta": True, "explicacion": "Verdadero. Es la asignación del coste de un activo a lo largo del tiempo."},
    {"texto": "En la empresa puedo considerar equivalentes los conceptos Gasto y Pérdida.", "respuesta": False, "explicacion": "Falso. Gasto es el consumo de recursos; pérdida es un resultado negativo."},
    {"texto": "En la empresa puedo considerar que Beneficio = Gasto.", "respuesta": False, "explicacion": "Falso. Son conceptos opuestos: el beneficio se obtiene restando los gastos a los ingresos."},
    {"texto": "En la empresa puedo considerar que Ingreso = Beneficio.", "respuesta": False, "explicacion": "Falso. El ingreso es el total percibido; el beneficio es el ingreso menos gastos."},
    {"texto": "El objetivo de los ratios es simplificar el análisis de gestión.", "respuesta": True, "explicacion": "Verdadero. Los ratios ayudan a comparar y analizar la eficiencia y rentabilidad."},
    {"texto": "La cuenta de Resultados, desde el punto de vista contable, es un documento estático que representa la situación económica y financiera de una empresa.", "respuesta": False, "explicacion": "Falso. Es un documento dinámico que refleja la actividad en un periodo."},
    {"texto": "La Cuenta de resultados es uno de los principales estados financieros que permite a la empresa conocer su evolución económica en un periodo de tiempo.", "respuesta": True, "explicacion": "Verdadero. Muestra los ingresos, gastos y el resultado del ejercicio."},
    {"texto": "Un lobby es un grupo que trabaja para facilitar mis actividades en la sociedad.", "respuesta": True, "explicacion": "Verdadero. Los lobbies representan intereses ante instituciones."},
    {"texto": "Los lobbies deben seguir estrictamente la Ley Nacional de Lobbies.", "respuesta": False, "explicacion": "Falso. En España no existe una ley nacional específica, aunque hay regulación parcial."},
    {"texto": "Las deudas a largo plazo son un pasivo corriente.", "respuesta": False, "explicacion": "Falso. Las deudas a largo plazo pertenecen al pasivo no corriente."},
    {"texto": "El resultado en las empresas puede ser de beneficio o pérdidas.", "respuesta": True, "explicacion": "Verdadero. El resultado puede ser positivo o negativo."},
    {"texto": "La Mano de Obra Indirecta debemos considerarla como gasto para conseguir el dato de Margen Bruto.", "respuesta": True, "explicacion": "Verdadero. La mano de obra indirecta se incluye como gasto general de explotación."},
    {"texto": "El impuesto del IVA forma parte del PVP (precio venta público).", "respuesta": True, "explicacion": "Verdadero. El IVA se incluye en el precio final al consumidor."},
    {"texto": "La financiación debemos considerarla como gasto para conseguir el dato del Margen Bruto.", "respuesta": False, "explicacion": "Falso. La financiación no se considera gasto operativo, es ajena al margen bruto."},
    {"texto": "El tamaño de mercado queda condicionado por los horarios que abren las tiendas.", "respuesta": False, "explicacion": "Falso. Los horarios no definen el tamaño del mercado."},
    {"texto": "El tamaño de mercado lo podemos definir como: Número de dientes * cantidad usada * veces que se compra.", "respuesta": True, "explicacion": "Verdadero. Es un ejemplo de cómo estimar la demanda total de un producto."},
    {"texto": "Los acreedores comerciales son un pasivo corriente.", "respuesta": True, "explicacion": "Verdadero. Son deudas a corto plazo con proveedores."},
    {"texto": "Los clientes solo quieren satisfacer sus necesidades de forma eficiente.", "respuesta": True, "explicacion": "Verdadero. Buscan valor, comodidad y eficiencia en la compra."},
    {"texto": "La cadena de valor de Porter analiza las actividades de la empresa, cómo se relacionan entre ellas y cómo pueden aportar más valor al cliente.", "respuesta": True, "explicacion": "Verdadero. Es una herramienta de análisis interno para crear ventaja competitiva."},
    {"texto": "Empresario es aquel que administra una empresa.", "respuesta": False, "explicacion": "Falso. El empresario asume el riesgo y la propiedad; no solo administra."},
    {"texto": "Fondo de Maniobra Real = Activo corriente - Pasivo corriente.", "respuesta": True, "explicacion": "Verdadero. Es la fórmula contable correcta del fondo de maniobra."},
    {"texto": "En la propiedad intelectual, los Derechos Patrimoniales le corresponden al autor o inventor por el beneficio de exclusividad y autonomía para su explotación económica durante un tiempo limitado.", "respuesta": True, "explicacion": "Verdadero. Permiten la explotación económica temporal de la obra."},
    {"texto": "Un producto de plataforma es un derivado y no se puede considerar dentro de la categoría de creación de productos.", "respuesta": False, "explicacion": "Falso. Un producto de plataforma es base para desarrollar nuevas variantes."},
    {"texto": "La mayoría de las innovaciones que disfrutamos provienen de descubrimientos técnicos y su aplicación en nuevos productos.", "respuesta": False, "explicacion": "Falso. Muchas innovaciones surgen de la creatividad o la mejora organizativa."},
    {"texto": "Las patentes son un derecho exclusivo que se concede sobre una invención.", "respuesta": True, "explicacion": "Verdadero. Otorgan exclusividad de explotación al inventor."},
    {"texto": "En la construcción de una empresa, la fase de conocimiento incluye el desarrollo de la idea y los objetivos de la empresa.", "respuesta": True, "explicacion": "Verdadero. Es la etapa inicial de definición de misión y propósito."},
    {"texto": "Según Drucker, las ideas surgen por lo inesperado, la incongruencia o una necesidad de proceso.", "respuesta": True, "explicacion": "Verdadero. Drucker identificó fuentes comunes de innovación."},
    {"texto": "El Beneficio Aportado por el Cliente = (Coste de Adquisición de clientes) * (% beneficio promedio).", "respuesta": False, "explicacion": "Falso. Esa fórmula no es válida; el beneficio aportado depende del valor percibido y fidelización."},
    {"texto": "Plantearse continuamente el 'porqué de cada cosa' y programar cambios deliberados en la vida diaria, forman parte de la creatividad sistemática.", "respuesta": True, "explicacion": "Verdadero. Es una técnica para fomentar la innovación constante."},
    {"texto": "Una novela puede protegerse con los derechos de autor, pero los artículos periodísticos no.", "respuesta": False, "explicacion": "Falso. Ambos pueden estar protegidos por derechos de autor."},
    {"texto": "Las existencias son un activo corriente.", "respuesta": True, "explicacion": "Verdadero. Son bienes destinados a la venta o consumo a corto plazo."},
    {"texto": "Una buena idea lo es todo en un negocio.", "respuesta": False, "explicacion": "Falso. La ejecución y la gestión son igual o más importantes que la idea."},
    {"texto": "El Teflón o los Post-it son buenos ejemplos del método de generación de ideas, tipo provocación de ideas.", "respuesta": True, "explicacion": "Verdadero. Surgieron de errores convertidos en innovaciones mediante provocación creativa."},
    {"texto": "Las virtudes cardinales son 4: fortaleza, habilidad, justicia y conocimiento.", "respuesta": False, "explicacion": "Falso. Son prudencia, justicia, fortaleza y templanza."},
    {"texto": "Solo con entusiasmo podemos conseguir ventajas competitivas sostenibles.", "respuesta": False, "explicacion": "Falso. Se necesita estrategia, innovación y recursos además de entusiasmo."},
    {"texto": "Es tan importante descubrir una idea de negocio como generar un producto mínimo viable o ponerlo en circulación.", "respuesta": True, "explicacion": "Verdadero. La validación práctica es clave en emprendimiento."},
    {"texto": "El escape es un método de provocación de ideas que nos lleva a exagerar los atributos de un producto para hacerlo atractivo.", "respuesta": False, "explicacion": "Falso. El escape elimina restricciones o supuestos, no exagera atributos."}
    {"texto": "Las 4 formas de crear algo nuevo en una empresa son a través de innovar en producto, precio y placement.", "respuesta": False, "explicacion": "Falso. Las principales formas son innovar en producto, proceso, marketing y organización."},
    {"texto": "Introducir un nuevo producto en un mercado requiere estrategia, comunicación y persistencia.", "respuesta": True, "explicacion": "Verdadero. El lanzamiento de un producto exige planificación y constancia."},
    {"texto": "La propiedad intelectual sobre una marca se puede mantener eternamente.", "respuesta": True, "explicacion": "Verdadero. Las marcas pueden renovarse indefinidamente cada 10 años."},
    {"texto": "La propiedad intelectual son todas aquellas creaciones derivadas del talento humano, las cuales son objeto de protección por diferentes normas jurídicas.", "respuesta": True, "explicacion": "Verdadero. Protege obras literarias, artísticas, técnicas, etc."},
    {"texto": "Los derechos morales son el reconocimiento del autor o inventor por la obra o invención registrada. No se puede ceder, ni renunciar, ni negociar.", "respuesta": True, "explicacion": "Verdadero. Los derechos morales son personales e intransferibles."},
    {"texto": "La eficiencia productiva la podemos considerar como una herramienta de creatividad de innovación interna.", "respuesta": True, "explicacion": "Verdadero. Optimizar recursos fomenta la innovación en procesos."},
    {"texto": "Una spin-off es una empresa segregada de una unidad empresarial más grande y que adquiere vida propia.", "respuesta": True, "explicacion": "Verdadero. Surge de otra organización y se independiza."},
    {"texto": "Según las leyes de propiedad intelectual, un electrodoméstico no puede ser protegido como diseño industrial.", "respuesta": False, "explicacion": "Falso. Sí puede protegerse si su forma tiene valor estético propio."},
    {"texto": "La Organización Mundial de la Propiedad Intelectual fue creada en 1967.", "respuesta": True, "explicacion": "Verdadero. La OMPI se fundó ese año para coordinar la protección intelectual."},
    {"texto": "La patentes de un producto en Suiza dan derechos de protección en todo el mundo.", "respuesta": False, "explicacion": "Falso. Las patentes solo son válidas en los países donde se registran."},
    {"texto": "El sombrero blanco en la técnica de generación de ideas de los 6 sombreros representa el pensamiento positivo, las ventajas y valores.", "respuesta": False, "explicacion": "Falso. El sombrero blanco representa datos y hechos; el amarillo es el positivo."},
    {"texto": "Los tipos de innovación en las empresas, por su visibilidad, son 2: Interna y Comercial.", "respuesta": True, "explicacion": "Verdadero. Se diferencian por si son visibles al cliente o dentro de la empresa."},
    {"texto": "Las indicaciones geográficas son un signo utilizado para productos que tienen un origen geográfico concreto y cuyas cualidades se deben a su lugar de origen.", "respuesta": True, "explicacion": "Verdadero. Ejemplo: Queso Manchego o Champagne."},
    {"texto": "La fórmula de valor de un producto o servicio se define como FV = (precio + incomodidades + inseguridades) / (producto + marca + atención al cliente).", "respuesta": False, "explicacion": "Falso. La fórmula correcta busca maximizar valor percibido y minimizar coste e incomodidades."},
    {"texto": "Los derechos relacionados con la explotación de la obra o prestación protegida por las leyes de protección intelectual son: derechos exclusivos y derechos de remuneración.", "respuesta": True, "explicacion": "Verdadero. Son las dos grandes categorías de derechos de explotación."},
    {"texto": "Para que un producto o servicio tenga éxito, es necesario servir a los clientes en aquello que necesitan.", "respuesta": True, "explicacion": "Verdadero. El éxito depende de satisfacer necesidades reales."},
    {"texto": "Los anuncios publicitarios no se pueden proteger con los derechos de autor.", "respuesta": False, "explicacion": "Falso. Pueden protegerse como obras creativas audiovisuales."},
    {"texto": "En el desarrollo de nuevos productos, un producto de plataforma es aquel que viene como consecuencia de un descubrimiento o avance tecnológico.", "respuesta": False, "explicacion": "Falso. Un producto de plataforma sirve de base para variantes o derivados."},
    {"texto": "Los productos personalizados son aquellos que crean las empresas a base de años de experiencia y de observar el comportamiento del mercado.", "respuesta": False, "explicacion": "Falso. Son los que se adaptan a las necesidades individuales del cliente."},
    {"texto": "La creatividad sale de la inspiración, el aburrimiento y la observación de la vida cotidiana.", "respuesta": True, "explicacion": "Verdadero. Estas situaciones estimulan la generación de ideas."},
    {"texto": "La creatividad es un objetivo importante de las empresas para conseguir una ventaja hacia sus competidores.", "respuesta": True, "explicacion": "Verdadero. Fomenta la innovación y la diferenciación en el mercado."},
    {"texto": "La creatividad sistemática es fruto de la inspiración.", "respuesta": False, "explicacion": "Falso. Es fruto de un método estructurado de análisis y cambio deliberado."},
    {"texto": "La innovación en marca se concreta en cómo darle mayor valor al servicio que prestamos a nuestros clientes.", "respuesta": False, "explicacion": "Falso. Eso pertenece a innovación en servicio; la marca es comunicación y percepción."},
    {"texto": "La innovación en alianzas estratégicas se concreta en cómo innovamos en los procesos y la gestión de personas que dan soporte al negocio.", "respuesta": False, "explicacion": "Falso. Se centra en crear relaciones y colaboraciones externas."},
    {"texto": "Los conceptos matemáticos no se pueden proteger con los derechos de autor.", "respuesta": True, "explicacion": "Verdadero. No son obras creativas, son conocimiento universal."},
    {"texto": "En la construcción de una empresa, la fase de conocimiento incluye el desarrollo del modelo de negocio y la búsqueda de clientes.", "respuesta": False, "explicacion": "Falso. La fase de conocimiento se enfoca en definir la idea y objetivos iniciales."},
    {"texto": "La provocación de ideas es un método para generar ideas haciendo una lista de propiedades de un objeto y modificando alguno de ellos para encontrar una nueva combinación que lo mejore.", "respuesta": False, "explicacion": "Falso. Esa técnica corresponde al método de listado de atributos."},
    {"texto": "Según la propiedad intelectual, el derecho de cita permite el uso de una obra de forma ilimitada, siempre que se cite la fuente u origen de la misma.", "respuesta": False, "explicacion": "Falso. El uso está limitado y debe ser con fines concretos como crítica o docencia."},
    {"texto": "Los músicos que tienen música protegida por las leyes de protección individual tienen derecho a percibir unos ingresos como derecho compensatorio que se recauda a través de una tasa aplicada a los dispositivos de almacenamiento digital.", "respuesta": True, "explicacion": "Verdadero. Es la compensación por copia privada."},
    {"texto": "La innovación incremental se realiza a través de pequeñas modificaciones y mejoras en los productos o servicios que ofrece una organización.", "respuesta": True, "explicacion": "Verdadero. Busca perfeccionar lo existente sin romper con lo anterior."},
    {"texto": "Las empresas pueden declarar como activo las patentes que disponen y hacer constar su valoración en la empresa.", "respuesta": True, "explicacion": "Verdadero. Son activos intangibles valorables contablemente."},
    {"texto": "Los textos legales no están protegidos por las leyes de protección intelectual.", "respuesta": True, "explicacion": "Verdadero. Son de dominio público y no se consideran obras creativas."}
    {"texto": "Los valores en un equipo de trabajo son imprescindibles para superar los momentos de crisis.", "respuesta": True, "explicacion": "Verdadero. Los valores compartidos cohesionan al equipo y facilitan superar dificultades."},
    {"texto": "El CANVAS es un gráfico visual de gestión estratégica que se usa para representar modelos de negocio.", "respuesta": True, "explicacion": "Verdadero. El Business Model Canvas representa la estructura y propuesta de valor del negocio."},
    {"texto": "En la herramienta CANVAS, el segmento de relación con clientes sirve para explicar qué tipo de publicidad hacemos.", "respuesta": False, "explicacion": "Falso. Describe cómo interactuamos con los clientes, no la publicidad."},
    {"texto": "En la herramienta CANVAS, el flujo de ingresos debe detallar solo el modo de pago.", "respuesta": False, "explicacion": "Falso. Incluye fuentes de ingresos, precios y estrategias de monetización."},
    {"texto": "En la herramienta CANVAS, el segmento de clientes, siempre que podamos, debe cuantificarse con su edad, sexo, nivel de ingresos y donde están.", "respuesta": True, "explicacion": "Verdadero. Cuantificar ayuda a definir mejor los segmentos de mercado."},
    {"texto": "Para destacar en un mercado, hay que ser diferente.", "respuesta": True, "explicacion": "Verdadero. La diferenciación genera ventaja competitiva."},
    {"texto": "Las empresas tienen dos objetivos principales: ganar dinero y la responsabilidad social corporativa.", "respuesta": True, "explicacion": "Verdadero. Se busca rentabilidad y compromiso social."},
    {"texto": "Eficacia es conseguir el objetivo propuesto.", "respuesta": True, "explicacion": "Verdadero. Eficacia significa alcanzar la meta deseada."},
    {"texto": "Los startups tienen 2 fases: la primaria donde deben aparecer las ideas y la secundaria donde se debe validar el modelo de negocio.", "respuesta": False, "explicacion": "Falso. El proceso no es tan lineal; ambas fases pueden solaparse."},
    {"texto": "Una startup funciona como un conjunto de actividades que suceden al mismo tiempo.", "respuesta": True, "explicacion": "Verdadero. Las startups son iterativas, con procesos paralelos de prueba y validación."},
    {"texto": "Las startups tienen entre sus misiones ganar dinero.", "respuesta": False, "explicacion": "Falso. Su objetivo principal es validar un modelo de negocio escalable."},
    {"texto": "Para considerar startup a una nueva empresa debe ser de tipo tecnológico.", "respuesta": False, "explicacion": "Falso. No es necesario; lo importante es el modelo de crecimiento y validación."},
    {"texto": "La fase inicial de una startup es para ejecutar, crear y construir un proyecto de empresa.", "respuesta": False, "explicacion": "Falso. Primero se debe validar la idea y el mercado antes de ejecutar."},
    {"texto": "Después de tener una idea, en las startups, lo más importante es validar si hay clientes interesados.", "respuesta": True, "explicacion": "Verdadero. Validar la demanda antes de invertir reduce el riesgo."},
    {"texto": "Las 4 principales herramientas necesarias para crear una startup son: creatividad, entusiasmo, formación y experiencia.", "respuesta": True, "explicacion": "Verdadero. Son factores clave para emprender con éxito."},
    {"texto": "El mejor mecanismo para fidelizar clientes es la captura de valor, es decir, solucionar aquello que el cliente quiere.", "respuesta": True, "explicacion": "Verdadero. Fidelizar implica resolver necesidades reales."},
    {"texto": "La eficiencia no tiene en cuenta siempre los recursos empleados.", "respuesta": False, "explicacion": "Falso. La eficiencia se basa precisamente en optimizar los recursos utilizados."},
    {"texto": "Para emprender con éxito, los equipos deben ser personas con conocimientos distintos y complementarios.", "respuesta": True, "explicacion": "Verdadero. La diversidad de habilidades mejora la capacidad del equipo."},
    {"texto": "La fortaleza es el dominio de la voluntad sobre los instintos y mantiene los deseos en los límites de honestidad.", "respuesta": False, "explicacion": "Falso. Esa definición se acerca más a la templanza; la fortaleza es firmeza ante la dificultad."},
    {"texto": "El aprendizaje validado es uno de los pilares de la metodología Lean Startup.", "respuesta": True, "explicacion": "Verdadero. Permite aprender del mercado mediante pruebas reales."},
    {"texto": "El canal de venta es un elemento fundamental en la creación del modelo de negocio de una startup.", "respuesta": True, "explicacion": "Verdadero. Define cómo el producto llega al cliente final."},
    {"texto": "El Business Model Canvas fue enunciado inicialmente por Eric Ries.", "respuesta": False, "explicacion": "Falso. Fue creado por Alexander Osterwalder y Yves Pigneur."},
    {"texto": "El Business Model Canvas es un gráfico visual con elementos que describen propuestas de valor, infraestructura, clientes y finanzas.", "respuesta": True, "explicacion": "Verdadero. Resume de forma visual los componentes del modelo de negocio."},
    {"texto": "Los modelos de negocio son los análisis de la forma de hacer un negocio. Ejemplo: CANVAS.", "respuesta": False, "explicacion": "Falso. El CANVAS es una herramienta, no un modelo en sí."},
    {"texto": "Un modelo de negocio es la forma que tiene una empresa para conseguir que sus productos resulten atractivos para los clientes y así ganar dinero.", "respuesta": True, "explicacion": "Verdadero. Explica cómo crea, entrega y captura valor."},
    {"texto": "Para tener éxito en mi proyecto emprendedor es imprescindible dotarse de personas expertas en las áreas que serán claves para mi emprendimiento.", "respuesta": True, "explicacion": "Verdadero. La experiencia técnica y de gestión es vital en las áreas clave."},
    {"texto": "La diferencia no tiene en cuenta siempre los recursos empleados.", "respuesta": False, "explicacion": "Falso. Esa frase no tiene sentido lógico en gestión empresarial."},
    {"texto": "Las fases del método Lombard para ayudar a innovar son 4.", "respuesta": True, "explicacion": "Verdadero. El método Lombard tiene cuatro etapas principales de innovación."},
    {"texto": "La fortaleza es la firmeza ante las dificultades.", "respuesta": True, "explicacion": "Verdadero. Es la virtud que mantiene la constancia frente a los retos."},
    {"texto": "La misión de una startup es descubrir lo antes posible cuál es su modelo de negocio y hacerlo al menor coste.", "respuesta": True, "explicacion": "Verdadero. Es el propósito principal de toda startup."},
    {"texto": "Eficacia es conseguir el objetivo propuesto.", "respuesta": True, "explicacion": "Verdadero. Significa alcanzar la meta deseada."},
    {"texto": "El valle de la muerte relaciona el tiempo y los ingresos en una startup.", "respuesta": False, "explicacion": "Falso. Representa la etapa entre la inversión inicial y la rentabilidad, no ingresos directos."},
    {"texto": "Los valores en un equipo de trabajo son imprescindibles para superar los momentos de crisis.", "respuesta": True, "explicacion": "Verdadero. Refuerzan la cohesión y el compromiso en situaciones difíciles."},
    {"texto": "El canal de venta es un elemento fundamental en la creación del modelo de negocio de una startup.", "respuesta": True, "explicacion": "Verdadero. Define el medio por el cual llega el producto al cliente."},
    {"texto": "Las variables psicográficas más utilizadas en la segmentación de mercados son el nivel de ingresos, el empleo y el nivel de estudios de las personas.", "respuesta": False, "explicacion": "Falso. Esas son variables demográficas; las psicográficas se relacionan con estilos de vida y valores."},
    {"texto": "Para la segmentación de mercados usamos las variables psicográficas, que entre otras son: nivel de ingresos, profesión, religión y nivel de educación.", "respuesta": False, "explicacion": "Falso. Esas variables son demográficas y socioculturales, no psicográficas."}
    {"texto": "El mapa de posicionamiento es una herramienta que permite visualizar los elementos diferenciadores de un producto y la posición que ocupan los productos competidores.", "respuesta": True, "explicacion": "Verdadero. Permite comparar percepciones de los productos frente a la competencia."},
    {"texto": "¿Qué es una patente? Es una ley que protege un producto.", "respuesta": False, "explicacion": "Falso. Una patente es un derecho exclusivo sobre una invención, no una ley."},
    {"texto": "Según la pirámide de Maslow, las necesidades sociales o de prestigio tienen que ver con la pertenencia a grupos u organizaciones.", "respuesta": False, "explicacion": "Falso. Las de pertenencia son sociales; las de prestigio se relacionan con reconocimiento."},
    {"texto": "La segmentación indiferenciada de mercados consiste en aplicar una estrategia comercial concreta a cada uno de los segmentos de mercados que ha identificado.", "respuesta": False, "explicacion": "Falso. Esa es la segmentación diferenciada; la indiferenciada aplica una sola estrategia a todo el mercado."},
    {"texto": "La segmentación diferenciada de mercados consiste en aplicar la misma estrategia comercial a todos los segmentos que se han identificado y pretende cubrir las necesidades comunes del conjunto de consumidores.", "respuesta": False, "explicacion": "Falso. En la diferenciada se adapta la estrategia a cada segmento."},
    {"texto": "Una categoría de productos es el conjunto de productos que satisfacen de manera similar la misma necesidad o deseo.", "respuesta": True, "explicacion": "Verdadero. Las categorías agrupan productos que cubren una misma necesidad."},
    {"texto": "Nicho de mercado es el porcentaje de participación que una empresa tiene en un mercado concreto respecto al total de las ventas del mercado.", "respuesta": False, "explicacion": "Falso. Eso es cuota de mercado; el nicho es un segmento pequeño y específico."},
    {"texto": "El objetivo de la segmentación del mercado es conseguir que cada tipo de cliente compre el producto que le corresponde por ingresos.", "respuesta": False, "explicacion": "Falso. Busca adaptar la oferta a las necesidades, no segmentar por ingresos."},
    {"texto": "El objetivo de la segmentación de mercados es aplicar una estrategia comercial uniforme, lo que hará más efectivas las acciones de marketing.", "respuesta": False, "explicacion": "Falso. La segmentación busca estrategias diferenciadas por grupo."},
    {"texto": "Que exista una necesidad es la principal puerta para vender algo.", "respuesta": True, "explicacion": "Verdadero. La demanda nace de una necesidad insatisfecha."},
    {"texto": "Una empresa tiene unos costes fijos de 42.500 euros/año. Su producto lo venden a 35 euros/unidad y su coste variable es de 17 euros/unidad. El punto muerto lo tienen en 2.370 unidades.", "respuesta": False, "explicacion": "Falso. El punto muerto sería 2.361 unidades, hay un error numérico en el cálculo."},
    {"texto": "Una empresa tiene unos costes fijos de 169.200 euros/año. Su producto lo vende a 35 euros/unidad y su coste variable es de 17 euros/unidad. El punto muerto lo tienen en 9.400 unidades.", "respuesta": True, "explicacion": "Verdadero. 169200 / (35 - 17) = 9400 unidades."},
    {"texto": "Un mercado es un lugar donde se compran y se venden bienes o servicios.", "respuesta": True, "explicacion": "Verdadero. Es el espacio físico o virtual de intercambio entre oferta y demanda."},
    {"texto": "Según Maslow, las necesidades más altas que cubrimos son las de estatus y prestigio.", "respuesta": False, "explicacion": "Falso. Las más altas son las de autorrealización."},
    {"texto": "A partir de la información que proporciona la pirámide de Maslow se puede decidir si hay un espacio para posicionar un producto en un mercado determinado.", "respuesta": False, "explicacion": "Falso. Maslow explica motivaciones humanas, no análisis de posicionamiento."},
    {"texto": "En mercados de segmentación diferenciada, la distribución y la publicidad de este tipo de productos son generalmente masivas.", "respuesta": False, "explicacion": "Falso. En la segmentación diferenciada se adaptan a cada público, no son masivas."},
    {"texto": "El mercado de consumo es aquel formado por organizaciones, empresas e instituciones.", "respuesta": False, "explicacion": "Falso. El mercado de consumo está formado por consumidores finales."},
    {"texto": "El análisis del mercado permitirá detectar oportunidades de negocio para la empresa y valorar la posibilidad de afrontarlas con las estrategias adecuadas.", "respuesta": True, "explicacion": "Verdadero. Analizar el mercado revela oportunidades y amenazas."},
    {"texto": "Un mercado de concurrencia se da cuando existen muchos vendedores y muchos compradores.", "respuesta": True, "explicacion": "Verdadero. Es el modelo de competencia perfecta."},
    {"texto": "Que exista una necesidad es la principal puerta para vender algo.", "respuesta": True, "explicacion": "Verdadero. Sin necesidad no hay demanda."},
    {"texto": "Si tres empresas controlan el 60% del mercado mundial del azúcar, hablamos de monopolio.", "respuesta": False, "explicacion": "Falso. Es un oligopolio, no un monopolio."},
    {"texto": "Un mercado en monopolio es cuando hay un ofertante y mucha demanda.", "respuesta": True, "explicacion": "Verdadero. Un solo proveedor controla la oferta."},
    {"texto": "El mercado potencial es un conjunto de personas u organizaciones de los consumidores en grupos homogéneos en función de sus características.", "respuesta": True, "explicacion": "Verdadero. Es el conjunto de clientes con perfil compatible."},
    {"texto": "Las hipótesis a validar por un producto mínimo viable son si el producto o servicio genera interés y si nos permitirá desarrollar el negocio.", "respuesta": True, "explicacion": "Verdadero. Es el objetivo principal de un PMV."},
    {"texto": "Un mercado potencial es el conjunto de segmentos del mercado que han sido seleccionados por la empresa y los que se quiere captar para que adquieran un producto o un servicio.", "respuesta": False, "explicacion": "Falso. Eso describe el mercado objetivo, no el potencial."},
    {"texto": "Los mercados solo se pueden crear alrededor de productos tangibles.", "respuesta": False, "explicacion": "Falso. También existen mercados de servicios e intangibles."},
    {"texto": "El concepto de mercado puede ser abstracto.", "respuesta": True, "explicacion": "Verdadero. Puede referirse a una red de relaciones o a una idea de intercambio."},
    {"texto": "La oferta en economía se define como la cantidad y calidad de bienes o servicios que los consumidores están dispuestos a comprar a un precio y unas condiciones dadas en un momento determinado.", "respuesta": False, "explicacion": "Falso. Esa es la demanda; la oferta es lo que los productores ofrecen."},
    {"texto": "Cuando hay una oportunidad de negocio que nadie ha desarrollado todavía hablamos de mercado en crecimiento.", "respuesta": False, "explicacion": "Falso. Se trata de un mercado emergente o una oportunidad de innovación."},
    {"texto": "Las características que debe tener un segmento de mercado son: medible, accesible, diferenciable, sustancial y estable a lo largo del tiempo.", "respuesta": True, "explicacion": "Verdadero. Son los criterios clásicos de una buena segmentación."},
    {"texto": "Una oportunidad de mercado existe cuando la motivación de los trabajadores se identifica con un grupo de personas, suficientemente numeroso, con necesidades que no se están satisfaciendo.", "respuesta": True, "explicacion": "Verdadero. Las oportunidades nacen de necesidades no cubiertas."},
    {"texto": "El posicionamiento de una marca se determina con el precio de la misma.", "respuesta": False, "explicacion": "Falso. El precio influye, pero el posicionamiento depende de percepción, atributos y comunicación."},
    {"texto": "Los precios se establecen en función del volumen de oferta y demanda.", "respuesta": True, "explicacion": "Verdadero. Es la base de la formación de precios en economía."},
    {"texto": "Un monopsonio limitado se da en mercados con pocos ofertantes y un solo comprador.", "respuesta": True, "explicacion": "Verdadero. Es un mercado con demanda concentrada en un solo comprador."},
    {"texto": "El monopolio bilateral ocurre cuando el mercado tiene poca oferta y poca demanda.", "respuesta": False, "explicacion": "Falso. En el monopolio bilateral hay un vendedor y un comprador únicos."},
    {"texto": "Un monopsomio es cuando hay un ofertante y mucha demanda.", "respuesta": False, "explicacion": "Falso. Es al revés: un solo comprador y muchos vendedores."}
    {"texto": "El PMV Mago de Oz consiste en hacer creer a los clientes que dispongo de toda la infraestructura de un servicio, sin que la haya desarrollado pero el cliente recibe el servicio.", "respuesta": True, "explicacion": "Verdadero. Es un tipo de producto mínimo viable que simula el servicio real para validar el interés."},
    {"texto": "El PMV Mago de Oz consiste en hacer creer a los clientes que voy a prestar un servicio, sin que este realmente exista. Si el interés es alto, se desarrolla el producto.", "respuesta": False, "explicacion": "Falso. En el PMV Mago de Oz el servicio se presta de forma manual, aunque parezca automatizado."},
    {"texto": "El PMV maqueta me sirve para que los clientes puedan interactuar con él y su feedback sea más efectivo.", "respuesta": True, "explicacion": "Verdadero. Permite observar cómo el cliente usa el producto y recoger mejoras."},
    {"texto": "El producto mínimo viable es un producto provisional con las mínimas características necesarias, que nos permita analizar al mercado.", "respuesta": True, "explicacion": "Verdadero. El PMV busca validar hipótesis con el menor esfuerzo posible."},
    {"texto": "En un PMV debemos eliminar todo aquello que no aporta valor.", "respuesta": True, "explicacion": "Verdadero. Solo deben incluirse funciones esenciales para validar el modelo."},
    {"texto": "El test de humo (PMV) se basa en una web con la descripción de una herramienta y lo que podía hacer por ti.", "respuesta": False, "explicacion": "Falso. El test de humo simula un producto o servicio para medir el interés real del usuario."},
    {"texto": "El test de humo, el crowdfunding y la landing page (PMV) se parecen en que los productos ofrecidos no existen y lo más importante es saber cuántos usuarios están interesados.", "respuesta": True, "explicacion": "Verdadero. Todos sirven para validar el interés antes de desarrollar el producto."},
    {"texto": "El objetivo de usar un producto mínimo viable es aprender de los clientes.", "respuesta": True, "explicacion": "Verdadero. Permite validar hipótesis mediante feedback real del usuario."},
    {"texto": "El ciclo de aprendizaje de una Startup es construir, medir y aprender.", "respuesta": True, "explicacion": "Verdadero. Es el ciclo de mejora continua del método Lean Startup."},
    {"texto": "Las plataformas de crowdfunding sirven para financiar proyectos.", "respuesta": True, "explicacion": "Verdadero. Permiten obtener financiación colectiva de posibles usuarios o inversores."},
    {"texto": "Todas las startups pueden aprender con un producto mínimo viable, sea cual sea su producto.", "respuesta": False, "explicacion": "Falso. Algunos productos no son viables para PMV por su complejidad o regulación."},
    {"texto": "La diferencia entre un prototipo y una maqueta es que el prototipo nos permite entender cómo usará el producto el cliente en un entorno real.", "respuesta": True, "explicacion": "Verdadero. El prototipo se prueba en condiciones de uso, la maqueta no."},
    {"texto": "Un powerpoint o un vídeo pueden ser producto mínimo viable.", "respuesta": True, "explicacion": "Verdadero. Si ayudan a medir el interés de los clientes, cumplen la función de PMV."},
    {"texto": "Dropbox es un buen ejemplo de crowdfunding (PMV).", "respuesta": False, "explicacion": "Falso. Dropbox validó su idea con un vídeo explicativo, no mediante financiación colectiva."},
    {"texto": "Zappos es un buen ejemplo de crowdfunding (PMV).", "respuesta": False, "explicacion": "Falso. Zappos validó su negocio vendiendo online sin stock, un PMV clásico, no crowdfunding."},
    {"texto": "Peeble fue un buen ejemplo de Mago de Oz (PMV).", "respuesta": False, "explicacion": "Falso. Pebble fue un ejemplo de crowdfunding exitoso en Kickstarter."},
    {"texto": "Tropicfeel fue un buen ejemplo de crowdfunding (PMV).", "respuesta": True, "explicacion": "Verdadero. Financiaron su producto inicial a través de una campaña de micromecenazgo."}
    {"texto": "Es aconsejable dejar de pivotar una empresa cuando la hoja de ruta está validada y tenemos un grupo de pedidos reiterativos.", "respuesta": True, "explicacion": "Verdadero. Tener ventas recurrentes indica que el modelo funciona y puede estabilizarse."},
    {"texto": "Es aconsejable dejar de pivotar una empresa cuando el modelo económico se entiende y tiene sentido para el cliente.", "respuesta": True, "explicacion": "Verdadero. Si el cliente comprende y valora la propuesta, se ha alcanzado la validación."},
    {"texto": "Es aconsejable dejar de pivotar una empresa antes de tener un PMV que mejore el modelo de negocio.", "respuesta": False, "explicacion": "Falso. No se debe parar de pivotar antes de validar con un producto mínimo viable."},
    {"texto": "Cuando ya tengo un PMV que me ayuda a mejorar el modelo de negocio, es un buen momento para dejar de pivotar.", "respuesta": True, "explicacion": "Verdadero. El PMV permite confirmar si el modelo es viable y rentable."},
    {"texto": "Pivotar es una corrección estructurada, para probar una nueva hipótesis básica sobre el producto, la estrategia, el modelo de negocio y el motor de crecimiento.", "respuesta": True, "explicacion": "Verdadero. Pivotar significa ajustar la dirección basándose en el aprendizaje validado."},
    {"texto": "En una Startup se puede pivotar en cualquier momento del proceso de creación.", "respuesta": True, "explicacion": "Verdadero. Se puede cambiar la estrategia o modelo en cualquier fase de validación."},
    {"texto": "Cuando la hoja de ruta de ventas está validada y dispongo de pedidos reiterativos, es un buen momento para dejar de pivotar.", "respuesta": True, "explicacion": "Verdadero. Las ventas recurrentes confirman la estabilidad del modelo."},
    {"texto": "9 de cada 10 startups desaparecen en 3 años por falta de clientes.", "respuesta": True, "explicacion": "Verdadero. La mayoría fracasa por no encontrar un mercado o clientes suficientes."},
    {"texto": "9 de cada 10 startups desaparecen en 3 años por problemas entre los socios.", "respuesta": False, "explicacion": "Falso. Aunque los conflictos influyen, el principal motivo es la falta de clientes."},
    {"texto": "Twitter, antes denominado Odeo, fue un servicio que giraba en torno a contenidos de podcasting personal y compartición de ficheros de audio.", "respuesta": True, "explicacion": "Verdadero. Odeo pivotó hacia el microblogging y nació Twitter."},
    {"texto": "Cuando el modelo económico se entiende y tiene sentido para el cliente, es un buen momento para dejar de pivotar.", "respuesta": True, "explicacion": "Verdadero. Si el modelo encaja con el cliente, se ha alcanzado la validación."},
    {"texto": "La falta de talento de un socio fundador en una startup es una fuente habitual de conflictos.", "respuesta": True, "explicacion": "Verdadero. Las carencias en capacidades clave pueden generar tensiones internas."},
    {"texto": "La felicidad más duradera viene del interior de cada uno.", "respuesta": True, "explicacion": "Verdadero. Es un principio ético que vincula el bienestar con la realización personal."},
    {"texto": "Una persona con las habilidades profesionales que una startup necesita puede ser socio sin aportar capital.", "respuesta": True, "explicacion": "Verdadero. Puede aportar valor mediante conocimiento o trabajo en lugar de dinero."},
    {"texto": "Los pactos de socios son fundamentales cuando se constituye la startup y cuando entran inversores externos.", "respuesta": True, "explicacion": "Verdadero. Aclaran roles, condiciones y derechos entre fundadores e inversores."},
    {"texto": "Un socio es aquel que nos aporta algo que nuestro proyecto necesita.", "respuesta": True, "explicacion": "Verdadero. Los socios deben aportar valor complementario: capital, talento o contactos."},
    {"texto": "Una sociedad solo se puede fundar cuando los socios buscan los mismos objetivos, ya sea sueldo, experiencia, prestigio o inversión para hacer dinero.", "respuesta": False, "explicacion": "Falso. Los socios pueden tener motivaciones diferentes si comparten la visión común."}
     ];

// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien amor! 😎",
  "¡Eso es, perfecto, te camelo caramelo! 🔥",
  "¡Ole tú huevos! 💪",
  "¡Exacto, estás on fire tia! 🚀",
  "¡Muy bien pensado tronca! 🧠",
  "¡Qué máquina eres! 😍",
  "¡Correcto, así se hace! 👏",
  "¡Te lo sabes de memoria ya! 💥"
];

let i = 0;
let puntuacion = 0;

// --- FUNCIONES ---
function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.textContent = texto;
  chat.appendChild(msg);
  chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
}

function responder(respuestaUsuario) {
  if (!preguntas[i]) return;

  mostrarMensaje(respuestaUsuario ? "✔️ Verdadero" : "❌ Falso", "user");

  if (respuestaUsuario === preguntas[i].respuesta) {
    puntuacion++;
    mostrarMensaje(frases_animo[Math.floor(Math.random() * frases_animo.length)], "bot");
  } else {
    mostrarMensaje("❌ Incorrecto. " + preguntas[i].explicacion, "bot");
  }

  i++;
  if (i < preguntas.length) {
    setTimeout(() => {
      mostrarMensaje(preguntas[i].texto, "bot");
    }, 700);
  } else {
    setTimeout(() => {
      mostrarMensaje(`🏁 Has acertado ${puntuacion} de ${preguntas.length} preguntas. 💡 ¡Sigue practicando, que vas de lujo!`, "bot");
      document.getElementById("btnV").disabled = true;
      document.getElementById("btnF").disabled = true;
    }, 800);
  }
}

// --- FUNCIÓN PARA MEZCLAR ---
function mezclarPreguntas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- ARRANQUE SEGURO ---
document.addEventListener("DOMContentLoaded", () => {
  mezclarPreguntas(preguntas);
  i = 0;
  puntuacion = 0;

  mostrarMensaje("🧠 Bienvenido a tu test de Verdadero/Falso. ¡Pulsa V o F para empezar! 💬", "bot");
  setTimeout(() => {
    mostrarMensaje(preguntas[i].texto, "bot");
  }, 500);

  document.getElementById("btnV").onclick = () => responder(true);
  document.getElementById("btnF").onclick = () => responder(false);
});



