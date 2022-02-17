import React, {useContext} from 'react'
import './Contenu.css'
import { ThemeContext } from '../../Context/ThemeContext'

export default function Contenu() {

const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'contenu light' : 'contenu dark'}
    >
        <h1>Lorem ipsum dolor sit amet.</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae possimus iste. Maiores, sed vel? Necessitatibus, quidem quaerat explicabo soluta, et dolorem fugit aperiam quia voluptates maxime labore? Rerum ut repudiandae dolores ab? Dolor voluptatum atque repudiandae inventore. Sequi doloremque sit ullam corrupti labore tempora blanditiis? Mollitia doloremque sed optio tempore necessitatibus minus facilis praesentium et omnis officia, rem doloribus? Blanditiis porro facilis doloremque deserunt molestias minima rem rerum aperiam aliquid itaque quae non ipsum soluta quo inventore explicabo ipsam, placeat voluptatibus, pariatur labore, possimus optio obcaecati. Exercitationem iure enim at rerum nesciunt, quibusdam provident harum necessitatibus sequi culpa eaque excepturi, similique voluptates dolor porro deserunt blanditiis ab vel, laborum doloribus numquam illum. Iusto maxime, perspiciatis quasi tenetur velit vitae sed ex voluptatum atque, modi delectus praesentium molestiae reiciendis debitis qui laudantium repellendus quibusdam repellat! Rerum, ex? Dolorum voluptatem molestiae, a, cum nesciunt sapiente voluptas suscipit maxime corrupti in consequuntur alias amet unde voluptatibus, soluta aliquam eum voluptatum? Nemo esse hic ea. Error consectetur molestiae culpa necessitatibus, temporibus dignissimos tempore esse vel enim facere inventore ea molestias quis maxime possimus officia! Harum vitae dolores pariatur quo cumque cum rem saepe expedita alias deleniti suscipit perferendis dignissimos doloremque at non consectetur placeat, minus amet dolore quam aperiam corporis quibusdam inventore? Sequi fugiat dolores, saepe laborum sed veritatis? Quaerat exercitationem quos, modi aliquid repudiandae suscipit repellat, voluptas a sunt soluta dicta maiores eos impedit eum vel rem ex incidunt amet, reiciendis commodi minima. Corporis, officiis pariatur veniam perspiciatis reprehenderit officia eaque, dolorum repellendus, impedit quis esse minus nihil neque illo eius odit! Natus dicta excepturi minus laudantium maxime ab impedit veritatis omnis incidunt deserunt facere ad deleniti amet quisquam sed nulla dignissimos facilis blanditiis sequi, officiis culpa delectus magni? Perspiciatis harum eligendi alias, atque molestias sit quibusdam rerum commodi velit, quia labore?
    </div>
  )
}
