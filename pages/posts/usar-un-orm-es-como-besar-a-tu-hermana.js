import Post, { Image } from '../../components/post'

export default () => (
  <Post
    title="Usar un ORM es como besar a tu hermana"
    image="https://res.cloudinary.com/our-academy/image/upload/v1542505265/articles/event-sourcing.png"
    description="Si estas en un proyecto y estas usando un ORM, alguna vez te preguntaste: ¿por qué?"
    publishedAt="2018-11-17"
    author="@arthur"
    tags={['arquitectura', 'tecnologia', 'analisis']}
  >
    <p>
      Estoy casi seguro que he escuchado esta frase en algún lado pero, no tengo
      idea de donde vino, aún asi es una buena frase. Si estas en un proyecto
      nuevo (de campos verdes 🍃) y estás usando un ORM, ¿alguna vez pensaste
      porque? ¿es tu modelo de datos privado? ¿estas{' '}
      <a href="https://www.enterpriseintegrationpatterns.com/patterns/messaging/SharedDataBaseIntegration.html">
        integrando aplicaciones a traves de bases de datos
      </a>
      ? ¿Por que no estas usando una base de datos documental (como MongoDb) u
      otra? ¿Alguien se hizo estas preguntas en tu proyecto? Los ORMs son como
      un puente entre los modelos relacionales y objetos, ¿en realidad necesitas
      un modelo relacional?
    </p>
    <p>
      Me molesta que los desarrolladores a menudo tomen decisiones de
      arquitectura sin haber hecho poco o ningún análisis. El decidir usar un
      RDBMS (base de datos relacional) cambia drasticamente las opciones de
      arquitetura que puedes tomar. Muy a menudo la decision es incluso hecha
      por personas que tienen backgroun en otros campos (como marketing o
      "negocios") en vez de computación. No me malinterpretes quiza si necesites
      una base de datos relacional para el lado OLTP de tu sistema...pero esa
      fue una decisión conciente en tu proyecto?
    </p>
    <p>
      Y luego nos preguntamos porque tenemos tantos problemas con nuestros
      sistemas
    </p>
    <figure>
      <figure>
        <a href="https://www.youtube.com/watch?v=8JKjvY4etTY&t=2230s">
          <Image src="event-sourcing" />
        </a>
      </figure>
      <figcaption>
        Greg Young hablando sobre Accidental Complexity, como al mover un RDBMS
        (usando una estructura recursiva común - un arbol) por Neo4j mejoro el
        performance (su laptop local era más rápida que el servidor de
        producción!)
      </figcaption>
    </figure>
    <p>
      Esta es una traducción del post{' '}
      <a href="http://codebetter.com/gregyoung/2010/02/18/using-an-orm-is-like-kissing-your-sister/">
        Using an ORM is like kissing your siste
      </a>{' '}
      de Greg Young
    </p>
    <p>
      El punto de este post es... Hay muchos factores al seleccionar donde
      almacenar tus datos, algunos funcionales otros no-funcionales. Necesitamos
      hacer un analisis de estos requerimientos y dejar de lado ese punto de
      vista de escoger por defecto un RDBMS. Algunos ejemplos de factores
      técnicos podrían ser que tan bien encaja con nuestras especificaciones
      funcionales (una estructura recursiva...como la de arriba podría ser no
      tan buena para un RDBMS), algunos ejemplos de factores organizacionales
      podrían ser que recursos tenemos disponibles, ya sea si estamos dentro de
      los planes de la organización o cuestiones de costos (si es una compañia
      pequeña no vamos a escoger algo muy caro).
    </p>
    <p>
      Un RDBMS es una mala elección para muchas situaciones y una buena para
      muchos escenarios...cual es el tuyo? Realizar un buen analisis de ello no
      le hara daño a nadie, o si?
    </p>
    <p>
      Nota el autor recibio muchas criticas...por ello les dejo la{' '}
      <a href="http://codebetter.com/gregyoung/2010/02/19/using-an-orm-is-like-kissing-your-sister-part-2/">
        2da parte
      </a>
      , donde profundiza el porqué de su post.
    </p>
  </Post>
)
