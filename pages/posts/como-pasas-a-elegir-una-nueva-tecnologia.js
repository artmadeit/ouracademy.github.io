import Post from '../../components/post'

export default () => (
  <Post
    title="Como pasas a elegir una nueva tecnología"
    description="Con una nueva tecnología"
    publishedAt="2018-10-27"
    author="@diana"
    tags={['tecnologia', 'grafo', 'experiencia']}
  >
    <p>
      <strong>¿Como pasas a elegir una nueva tecnología?</strong>
    </p>
    <p>
      Siempre he escuchado a muchos desarrolladores decir, hey estoy usando esto
      en mi nuevo proyecto, si lo uso con esto, configuro y todo se hace más
      facil. Si es super fácil. Solo es hacer esto y listo.
    </p>
    <p>
      Y piensas wau, ese chico sabe mucho, y talvez sientes que tienes mucho por
      recorrer para estar a su nivel.
    </p>
    <p>
      Yo pensaba así, nosotros en Ouracademy no sabemos a profundidad de muchas
      de las tecnologías que la gente suele hablar, muchas veces con un tono de
      soberbia. Y muchas veces diciendo am esto es mejor que esto, si eso ya
      paso de moda. Bueno siempre he pensado que no lo popular siempre sea la
      mejor opción, ademas no sabria, tendria que leer mucho, para poder tomar
      una decision sobre que elegir. Pero muchas veces nos dejamos llevar por lo
      que la gente más usa.
    </p>
    <p>
      No solo usen por usar, sino identifiquen que caracteristicas tecnologicas
      encajan mejor con el objetivo de su software. Hay que ser muy analitico en
      este punto.
    </p>
    <p>
      Bueno ahora vayamos al punto, recuerdo cuando lei una entrevista a Eric
      Gamma, que le preguntaron como elegis un patron, y respondio que pues dado
      un determinado contexto, solo venia a la mente, dije wau eso sería muy
      bonito que te sucediera, y puede que si, solo hay que estar leyendo e
      informandose cada dia( en Twiter, Medium, las fuentes que tu prefieras) y
      como menciono Picaso, la imaginacion viene trabajando. Asi que
      dificilmente digas usare esto, cuando aun no hallas comenzado, estaras
      trabajando, avanzando lento o rapido, y ps diras oye lei que esa
      tecnologia es muy buena para eso, creo que podria ayudarme; estas en un
      contexto y haz hallado una conexión, luego de esto lee mas sobre ese
      término que tienes en la mente.
    </p>
    <p>
      Me pasa tambien que cuando lees de algo nuevo, dices uhmm esto es dificil,
      cuando lo usare, debo saber mas, no te sientes con la capacidad a usarlo,
      pero algo que te ayudara a quitar ese miedo es la necesidad a usarlo, asi
      que cuando veas un termino, tecnologia, no digas am no lo leere, porque ay
      cuando lo usare, no tienes que leerlo porque asi cuando llege el tiempo
      que tengas la necesidad podras decir uhmm esto me ayudara y la necesidad
      de usarlo te llevara a que profundizes y lo logres.
    </p>
    <p>
      Ahora estamos en el desarrollo de una herramienta llamada Essboard, que va
      a ayudar a que monitorees tu desarrollo en base a aspectos explicitos
      definidos ya en un marco llamado Essence. ¿Que es Essence? te suena a
      esencial ps si, Essence define y relaciona terminos sobre lo que debes
      estar pendiente en tu desarrollo, es como ir al doctor y ps el te hace
      preguntas y ps luego te dice uhm has descuidado tu alimentacion, o tu
      presion esta alta, bueno Essence te dice has descuidado a tu equipo, no se
      comunican para nada, o ps oye tu cliente no esta satisfecho. ¿Como lo
      hace? ps mencione que define y relaciona terminos, define alphas que es
      cada aspecto importante que debes cuidar en tu desarrollo, estos alphas
      atraviesan estados, asi sabes el progreso de cada una, y te dice uhm para
      que sepas en que estado esta, te doy preguntassolo responde si o no, aja
      te brinda un checklist.Ahora olvide mencionar que tambien relaciona cada
      alpha con otros. Define aca como un ejemplo que te ponen en ejemplos de
      modelacion de dominio, bueno debemos guardar todo lo que definio Essence,
      observas que son muchas relaciones, ¿que tecnología uso para guardarlo?
    </p>
    <p>
      Recuerdas que dije siempre hay que estar leyendo, asi lo que leas sea algo
      nuevo y pienses, ay cuando llegaré a usarlo, ps bien me sirvio leer de
      Neo4j, y haber leido que cuando ves que en tu modelo para obtener ciertos
      necesitas de muchos join o cuando necesitas hallar un conexion existente
      entre un dato o otro, ps ahi es donde encaja a la perfeccion una base
      orientada a grafos.
    </p>
    <p>
      Entonces dices una base de datos orienta a grafos, uhmm si quisiera
      usarlo, es dificil?. Ps ahora es leer más, tu pensaras Neo4j esta de moda,
      si pero recuerda no siempre es lo mejor, analiza, neo4j tiene una
      comunidad grande y recursos, es ideal para mi, y aunque dicen que hay
      otras mas potentes como Apache Graph y Greemly. No tiene los recursos como
      una plataforma gratuita con base de datos y la curva de aprendizaje mas
      fácil, ademas Neo4j encaja bien porque quiero almacenar poca cantidad de
      datos pero estas muy relacionadas, asi que los problemas de escalamiento
      que mencionan no me afectara. Siempre consciente de que la tecnologia a
      usar tiene sus bondadrs y limitaciones, no venderla como wau mira estoy
      usando esto es lo máximo. Ademas usar algo es bueno la palabra lo dice
      usarlo, se bueno soberbio cuando digas he creado esto, no cuando digas
      estoy usando eso.
    </p>
  </Post>
)
