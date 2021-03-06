import Post, { Image } from '../../components/post'

export default () => (
  <Post
    title="Porque Ouracademy?"
    description="Los inicios de ouracademy y el porque seguimos haciendolo "
    publishedAt="2018-10-24"
    author="@arthur"
    tags={['ouracademy', 'escritura']}
  >
    <p>
      Han pasado casi 3 años desde el 1er posts que tuvimos. El que les habla
      junto a Diana, mi mejor amiga, una noche hablando, como siempre, de las
      cosas que habiamos aprendido (por supuesto de desarrollo 😅). Dijimos por
      que no hacemos un fanpage donde compartamos lo que aprendamos. Asi inicio
      Ouracademy...
    </p>
    <iframe
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Four.academy.org%2Fposts%2F704394479692867&width=500"
      width="500"
      height="237"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allow="encrypted-media"
    />
    <p>
      Desde un inicio decidimos ser distintos (estrategia!, me acuerdo que en
      aquella epóca me gustaba mucho ver videos de Michael Porter, el guru de la
      estrategia). Diana y yo, estabamos ambos de acuerdo en que la mayoria de
      paginas educativas de desarrollo de software se enfocaba en solo enseñar
      tecnologías, en especial lenguajes de programación, por ello decidimos hay
      que enseñar otras cosas: principios, prácticas, enfoques, patrones,
      técnicas, conceptos que se dan en el desarrollo de software combinandolo
      con la práctica (lo que los otros enseñaban).
    </p>
    <figure>
      <img
        src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/20431500_1098275633638081_8670127117136798723_n.png?_nc_cat=109&_nc_ht=scontent-mia3-2.xx&oh=81231506cf906cb9b243f235c2fb96d7&oe=5C56A78D"
        alt="anemic vs domain model"
      />
      <figcaption>Una de las infografias que hemos realizado</figcaption>
    </figure>
    <p>
      Hoy en día seguimos fieles a ese rumbo, ya hemos realizado +100 posts en
      facebook, hemos creado una página web (que tratamos de mejorar). Estamos
      por casi los 800 👍, si es poco pero nos alegra que haya gente que nos
      apoye y más importante gente que ahora pueda aprender algo de lo que
      aprendemos nosotros.
    </p>
    <p>
      Otro de los motivos porque seguimos en Ouracademy es que nos obliga a
      aprender, para postear un articulo necesitas tener un conocimiento al
      menos básico e incluso si quieres que otras personas vean tus articulos,
      debes escribirlos de tal forma que enganchen (sean entretenidos) y/o
      novedosos - no como este post 😅. Esto implica que continuamente estes
      aprendiendo.
    </p>
    <p>
      Además, debo decir que con un par de posts me ha dado la chance de dar un
      par de charlas y obtener propuestas de trabajo.
    </p>
    <p>
      Por estas razones, creo que es importante compartir lo que uno aprende, en
      algún sitio, y mejor si es propio.
    </p>
    <p>
      Esperamos seguir enseñando más sobre el desarrollo de software. Es
      divertido hacerlo y pues ayuda a otras personas. Entonces por que no
      seguir?
    </p>
  </Post>
)
