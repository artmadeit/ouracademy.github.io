import Post from '../../components/post'

export default () => (
  <Post
    title="Cuando crear un Tipo (en un lenguaje de programación)?"
    image="https://cdn-images-1.medium.com/max/800/1*CwKEGUfjnBNyAYNySLJHLw.png"
    description="Una traducción del articulo de Martin Fowler: When to make a Type"
    publishedAt="2017-02-21"
    author="@arthur"
    tags={['codigo', 'objetos', 'diseño']}
  >
    <blockquote>
      Una traducción al español del articulo de Martin Fowler:{' '}
      <a href="https://pdfs.semanticscholar.org/2a01/e1f14172a91215931ed787d97dee1301fe7d.pdf">
        When to make a Type
      </a>
    </blockquote>
    <p>
      Cuando empece a programar, empece con lenguajes muy primitivos, como
      Fortran 4 y con tempranos sabores de Basic. Uno de los primeras cosas que
      aprendes a usar en esos lenguajes — incluso con los lenguajes actuales
      (i.e., Typescript, Go, Clojure) — es que tipos (i.e., números reales y
      enteros, cadenas de caracteres, arreglos) tu lenguaje soporta. Siendo
      orientado a números, Fortran soportaba enteros y tipos reales, con la
      regla interesante que cualquier variable cuyo nombre empiece con las
      letras I a N fuera un entero, y todas las otras variables reales
      (flotantes). Estoy alegre que esa convención no haya sido cogida, aunque
      Perl está cerca. Además, usar lenguajes orientados a objetos, puedes
      definir tus propios tipos y en los mejores lenguajes, estos actúan tal
      como los predefinidos.
    </p>
    <h2>Definiendo tipos</h2>
    <p>
      Empece a jugar con las computadoras en mis clases de matemáticas, donde
      todos estábamos frustrados por el hecho que estás oh numeradas
      computadoras no entendieran las fracciones (y nuestros maestros de
      matemáticas brevemente nos enseñaron las aproximaciones en los números
      flotantes). Estaba por lo tanto encantado en aprender que Smalltalk
      soportara fracciones — si dividías 1 entre 3 tenias un tercio, no un
      número largo flotante.
    </p>
    <p>
      Cuando las personas hablan de diseño, a menudo no hablan de objetos
      pequeños como fracciones, presumiblemente porque muchos arquitectos
      consideran esos detalles que no valen la pena la atención. Sin embargo,
      definir tales tipos a menudo hace la vida más fácil.
    </p>
    <p>
      Mi ejemplo favorito es el dinero. Un montón de esfuerzo es dedicado a
      manipular el dinero, contabilidad, facturación, comercio y demás — algunas
      conllevan aún más. A pesar de toda esta atención, ningún lenguaje
      principal tiene un tipo predefinido para el dinero. Tal tipo podría
      reducir errores en monedas, ayudándonos, por ejemplo, en evitar esos
      momentos embarazosos de agregar un dólar a un yen. También pueden evitar
      errores insidiosos de redondeo. No solo removerá la tentación de usar
      números flotantes en el dinero (nunca lo hagas) pero además nos ayudara en
      problemas difíciles como dividir $10 igualmente a 3 personas (i.e. el
      problema de dar $3,99 a cada uno y que sucede con el $0.01?). En adición,
      puede ayudar a simplificar un montón de código en la impresión y análisis
      sintáctico (parsing) (i.e. imprimir $3 como 3 dólares, $3.00 o crear
      objetos de dinero a partir de cadenas de caracteres).Par más en ello (por
      que escribir en una columna si puedo aconsejar mis libros?), mira Patterns
      of Enterprise Application Architecture(Addison-Wesley, 2002).
    </p>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/800/1*CwKEGUfjnBNyAYNySLJHLw.png" />
      <figcaption>
        Tipos: dinero, moneda y convertidor de monedas de JScience
      </figcaption>
    </figure>
    <p>
      Lo bueno de los programas OO(Orientado a Objetos) es que fácilmente puedes
      definir un tipo si es que el lenguaje o las librerías no lo incluyen.
      Otros tipos de lenguajes que amenudo escribo son los rangos, porque estoy
      cansado de escribir <code>{`if (x <= top && x >= bottom)`}</code> ,
      cantidades (para manejar cosas como “6 pies” o “2kg”), y fechas (aunque la
      mayoría de los lenguajes lo incluyen, usualmente son usados
      incorrectamente).
    </p>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/800/1*ivaIa_kNz2zSWC1M-BfopA.gif" />
      <figcaption>
        <a href="https://martinfowler.com/eaaDev/Range.html">Tipo rango</a>,
        incluye métodos útiles como esta dentro del rango, solapa con otro
        rango, entre otros.
      </figcaption>
    </figure>
    <p>
      Una vez que empiezas a escribir estos tipos de objetos fundamentales,
      empiezas a preguntarte donde parar. Por ejemplo, una persona recientemente
      me pregunto si debería crear un tipo para la moneda, incluso aún cuando el
      único dato era un código internacional de 3 letras?. Otra persona me
      pregunto sobre si una clase persona con un atributo edad debería retornar
      un entero o definir un tipo edad y retornarlo.
    </p>
    <p>
      Cuando vale la pena? Cuando deberías crear tu propio tipo? Para empezar,
      crea un tipo si tendrá un tipo especial de comportamiento en sus
      operaciones que el tipo base no tiene. La atención de redondear monedas da
      un buen ejemplo: en vez de que cada usuario de la clase número tenga que
      redondear, proveer métodos en una clase dinero puede de tal forma que
      programes el redondeo una sola vez.
    </p>
    <p>
      Escribiré lo que falte cuando tenga mas tiempo. Quizá mañana, en 1 semana,
      o quien sabe. Espero que les haya gustado cualquier error de ortografía o
      mala traducción avisarme, estaré con gusto en arreglarla.
    </p>
  </Post>
)
