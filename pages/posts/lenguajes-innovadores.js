import Post from '../../components/post'
import Code from '../../components/code'

const javaSample = `class C {
  class D {
  }
}`

const cobolSample = `01  customer-record.
05  cust-key            PIC X(10).
05  cust-name.
    10  cust-first-name PIC X(30).
    10  cust-last-name  PIC X(30).
05  cust-balance        PIC 9(7)V99.`

const smalltalkSample = `result := Dialog 
confirm: 'Are you sure you want to erase the *entire* hard drive?' 
onCancelDo: [^self].`

const selfSample = `const person = {
  firstName: 'Alejandro',
  lastName: 'Magno',
  get name() {
    return this.firstName + " " + this.lastName
  }
}

console.log(person.name)
console.log(person.firstName)`

export default () => (
  <Post
    title="Los lenguajes de programación innovadores"
    image="https://www.uml-lab.com/typo3temp/pics/fcca69ce79.png"
    description="Los lenguajes que son la base de todos los lenguajes que hoy en día usamos."
    publishedAt="2018-11-06"
    author="@arthur"
    tags={['lenguajes', 'codigo', 'diseño', 'tecnologia']}
  >
    <p>
      Una de las cosas que siempre me intriga es aprender la historía, saber de
      donde vienen esos conceptos de programación que cada dia usamos, conceptos
      como los objetos, clases, funciones, recursión. Si alguna vez te has
      preguntado de donde la idea de usar <code>if/else</code>, o pasar
      argumentos por referencia o valor... o cosas asi. Este post es para ti! 😄
    </p>
    <blockquote>
      Este post esta basado en uno de mis sitios favoritos, el wiki de Ward
      Cunningham,{' '}
      <a href="http://wiki.c2.com/?GroundBreakingLanguages">
        Ground Breaking Languages
      </a>
    </blockquote>
    <p>
      Este post es realmente un listado de los lenguajes "innovadores" esos que
      influyeron en los lenguajes que hoy en dia usamos.
    </p>
    <p>
      Algunos de los lenguajes que se muestran aca ya no se usan (y quiza nunca
      se vuelvan a usar), pero representaron en su epóca nuevas formas de ver e
      interactuar con las computadoras.
    </p>
    <p>
      Cada uno de los lenguajes (junto a sus creadores) listados aquí, tuvo un
      insight que cambio la forma en como vemos la programación hoy.
    </p>
    <h3>
      Los lenguajes que dieron paso a nuevos idiomas e influenciaron en idiomas
      sucesores
    </h3>
    <hr />
    <dl>
      <dt>Short code</dt>
      <dd>
        La máquina solo leia 0s y 1s. Los programadores para escribir programas
        tenian que expresar todos las ordenes a la máquina de esa forma (o a
        traves de números hexadecimales) . Para mejorar la productividad es aquí
        donde entra el 1er lenguaje ensamblador 🙂
      </dd>
      <dt>APL</dt>
      <dd>
        Todos hemos usado alguna vez arrays o listas. Bueno de donde vino? De
        este lenguaje. Uno de los primeros lenguajes de{' '}
        <a href="http://wiki.c2.com/?CollectionOrientedProgramming">
          programación orientada a colecciones
        </a>
        . Tenia Vectores y Matrices como tipos de 1ra clase.
        <p>
          Aunque tambien este lenguaje era muy antiguo. Tan antiguo que requeria
          su propio teclado ⌨️ ?? Eran otros tiempos...
        </p>
      </dd>
      <dt>GraphicalProgramEditor</dt>
      <dd>
        Si alguna vez haz usado UML como lenguaje de programación (que genera
        código que se puede ejecutar) o haz usado BPMN (con herramientas como
        Bizagi). Este lenguaje fue el 1er lenguaje gráfico, desarrollado por el
        hermano del famoso Ivan Sutherland, conocido por Sketchpad.
        <figure>
          <img
            src="https://www.uml-lab.com/typo3temp/pics/fcca69ce79.png"
            alt="UML as code"
          />
          <figcaption>UML como lenguaje de programación</figcaption>
        </figure>
      </dd>
      <dt>
        IPL - Information Processing Language (Allen Newell, Cliff Shaw and{' '}
        <a href="http://wiki.c2.com/?HerbertSimon">HerbertSimon</a>, 1956)
      </dt>
      <dd>
        Aquí uno de los 1ros lenguajes que tenia la mayoría de caracteristicas
        que usamos hoy, entre ellas: listas, asociaciones (aka, Maps,
        Diccionarios, arrays asociativos), tipos de datos, recursion, funciones
        como argumentos (cosas como <code>someFunction(anotherFunction)</code>,
        generadores o streams (si en tu lenguaje has visto <code>yield</code>
        ), multitareas cooperativas.
      </dd>
      <dt>Fortran</dt>
      <dd>
        El 1er lenguaje ampliamente usado de alto nivel (alto nivel ...claro en
        comparación a ensamblador 😛). Aunque habia sistemas en esa epoca que te
        permitian escribir expresiones muy parecidas a Fortran, pero estaban
        atadas a la arquitectura del computador. FORTRAN fue el 1er lenguaje que
        dio compatibilidad en diferentes arquitecturas de computadoras. Además
        convencio a la comunidad de computación de lo práctico que podrían ser
        los lenguajes de alto nivel.
      </dd>
      <dt>Cobol</dt>
      <dd>
        COBOL fue el 1er lenguaje en soportar tipos record (algo así como el
        <code>struct</code> en otros lenguajes ).
        <Code language="cobol">{cobolSample}</Code>
        Además fue el 1er lenguaje usado para aplicaciones comerciales, en ese
        tiempo <strong>no</strong> habia lenguajes para ello.
      </dd>
      <dt>Algol</dt>
      <dd>
        Fue el 1er lenguaje con una sintaxis formal y con
        <a href="http://wiki.c2.com/?LexicalScoping">Lexical Scopes</a>{' '}
        (variables dentro del contexto del bloque, no como <code>var</code> en
        Javascript 😝). La mayoría de los lenguajes imperativos se basaron en
        el.
        <p>
          Otro punto importante fue el concepto de plataforma independiente. La
          I/O (input/output) se le dejaba al que lo implementaba (algo asi como
          el famoso JDBC de Java, uno debe instalar el driver adecuado para su
          RDBMS).
        </p>
      </dd>
      <dt>LISP</dt>
      <dd>
        Gracias a el tenemos las funciones de alto orden (HOF, o higher order
        functions por sus siglas en ingles), los Functors (<code>map()</code>
        ), los closures lexicos (en Javascript si has usado un arrow function
        probablemente sabes de lo que hablo), los poderosos Macros (define tu
        propio lenguaje!), Code as data (a traves de su Homoiconicity), base de
        los Sistemas expertos, <code>if/else</code> (antes solo tenian el{' '}
        <code>goto</code>
        ), Haz lo que hago (tambien conocido Transparencia Referencial), los
        famosos Mixins y otras cosas más avanzadas como...
        <a href="http://wiki.c2.com/?MetaObjectProtocol">
          Protocolo de metaobjectos
        </a>{' '}
        (algo parecido como el famoso Object pero 10 veces más potente),{' '}
        <a href="http://wiki.c2.com/?MethodCombination">
          Combinación de Métodos
        </a>
        ,{' '}
        <a href="https://en.wikipedia.org/wiki/Continuation">Continuaciones</a>,{' '}
        <a href="http://wiki.c2.com/?MultipleDispatch">Multiple dispatch</a>
        (no es sobrecarga de métodos!).
      </dd>
      <dt>FP (Backus)</dt>
      <dd>El 1er lenguaje puramente funcional</dd>
      <dt>Java</dt>
      <dd>
        No por su JVM (Smalltalk tenia una VM), ni su Garbage collector, mucho
        menos por Orientación a Objetos...sino por ser el 1er lenguaje
        industrial en poner caracteristicas para la seguridad como los class
        loaders, los security managers, operaciones con privilegios) y bueno las
        InnerClasses (clases dentro de otras clases). como
        <Code languaje="java">{javaSample}</Code>
        Que en el fondo son una forma de lexical closures (otra vez Lisp ❤️, lo
        tuvo antes) Además salvo a muchos programadores de usar C++ en
        aplicaciones empresariales.{' '}
        <em>
          Pero salvara a los programadores de lo inadecuado de Java? - una broma
          del post original
        </em>
      </dd>

      <dt>Simula</dt>
      <dd>
        El 1ro en Garbage Collection (no Java!) y más importante los objetos
        como los usamos hoy en día (tristemente no el OOP real 😢 de Alan Kay)
      </dd>
      <dt>ObjLanguage</dt>
      <dd>OBJ el 1ro en programación parametrizada</dd>
      <dt>PL/I</dt>
      <dd>
        El 1er lenguaje con <em>excepciones</em>
      </dd>
      <dt>Prolog</dt>
      <dd>El 1ro lenguaje de programación lógica</dd>
      <dt>Smalltalk</dt>
      <dd>
        Objetos vivos, Meta clases, Contextos, Metodos compilados, Ventanas que
        se solapan, la noción de bloques (mira el ejemplo). Gracias a que el
        lenguaje era altamente reflexivo su IDE (aunque no es parte del lenguaje
        en sí) permitia tener un "navegador como editor de clases" y un
        "debugger como editor de contextos".
        <Code language="smalltalk">{smalltalkSample}</Code>
      </dd>
      <dt>Self</dt>
      <dd>
        Por usar el paradigma orientado a prototipos en vez del más común
        orientado a clases (C++, Java, C#). Self además no hace distinciones
        entre llamar a un método o acceder a un miembro, algo como:
        <Code language="javascript">{selfSample}</Code>
        Donde acceder a un miembro (firstName) es muy similar a ejecutar el
        metodo (name). En Self tanto metodos, como acceder a miembros poseen una
        misma sintaxis. Facilitando{' '}
        <a href="https://www.martinfowler.com/bliki/PublicCsharpFields.html">
          refactorizaciones
        </a>
        .
      </dd>
      <dt>VisiCalc</dt>
      <dd>
        El 1er lenguaje bidimensional!! Quizá es el lenguaje{' '}
        <strong>más innovador</strong>. Cambio el mundo. Cada compañía lo
        quería. Porque? Porque hizo posible que existiera el lenguaje más
        popular de hoy: las hojas de cálculo. Si{' '}
        <a href="http://wiki.c2.com/?ComputerProgrammingForEverybody">
          todos programamos
        </a>
        , al menos los que hemos usado Excel 😅. Diras no eso no es un lenguaje,
        pero si tiene secuencias, puedes seleccionar datos e iterar; que más
        necesitas?
      </dd>
      <dt>SGML</dt>
      <dd>
        El 1er lenguaje de marcado. Predecesor de XML y HTML, en general de
        todos los lenguajes de marcado que apoyan a la programación orientada a
        documentos.
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/SGML.svg/200px-SGML.svg.png"
            alt="SGML"
          />
        </figure>
      </dd>
    </dl>
    <p>
      Aún hay muchos otros lenguajes que me faltaron describir...que estaban en
      el wiki del que me base. Entre ellos: SQL, SNOBOL, Python, Perl, Haskell,
      Basic, Ada. Ojala tenga tiempo de escribirlos, pero por el momento pueden
      ver el link original si desean saber más.
    </p>
  </Post>
)
