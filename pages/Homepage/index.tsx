import React, { useMemo } from 'react';

import HeroPost from '../../components/HeroPost';
import PostItem from '../../components/PostItem';
import CategoryItem from '../../components/CategoryItem';

import { HomepageProps as Props } from './types'

import ProfileImg from '../../public/assets/images/profile.png';
import HtmlIcon from '../../public/assets/icons/html.png';
import CssIcon from '../../public/assets/icons/css.png';
import JavascriptIcon from '../../public/assets/icons/javascript.png';
import TypescriptIcon from '../../public/assets/icons/typescript.png';
import ReactJsIcon from '../../public/assets/icons/reactjs.png';
import ReactNativeIcon from '../../public/assets/icons/react-native.png';
import NodeJsIcon from '../../public/assets/icons/nodejs.png';
import JQueryIcon from '../../public/assets/icons/jquery.png';

import styles from './styles.module.css'

const Homepage: React.FC<Props> = ({ posts }) => {
  const heroPost = useMemo(() => {
    return posts[0];
  }, [posts]);

  const listPosts = useMemo(() => {
    return posts.filter((_, index) => index !== 0);
  }, [posts]);

  return (
    <div className={styles.container}>
      {heroPost && <HeroPost post={heroPost} />}

      {listPosts.length > 0 && (
        <section className={styles.postsList}>
          {listPosts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </section>
      )}

      <section className={styles.categoriesList}>
        <h2>Categorias</h2>

        <div>
          <CategoryItem categoryName="html" />
          <CategoryItem categoryName="css" />
          <CategoryItem categoryName="javascript" />
        </div>
      </section>

      <section className={styles.aboutMe}>
        <h2>Sobre Mim</h2>

        <div className={styles.aboutMeContent}>
          <div className={styles.profileImage}>
            <img src={ProfileImg} alt="Lucas Iori" />
          </div>

          <div className={styles.aboutMeInfo}>
            <div className={styles.description}>
              <p>
                Olá! Meu nome é Lucas Fernando Iori, sou de Itajobi/SP e 
                trabalho como Engenheiro de Software.
              </p>

              <br/>

              <p>
                Trabalho com programação desde 2019, mas tenho contato com esse 
                mundo há mais de 5 anos, e desde então desenvolvi o interesse 
                em ajudar de alguma forma as pessoas a atingirem seus objetivos 
                profissionais. Apesar de não ser um programador com muito tempo 
                de experiência, nesse período de atuação consegui me desenvolver 
                e avançar muito na minha carreira.
              </p>

              <br/>

              <p>
                Descobri meu talento e minha paixão na programação durante a 
                época que terminei a escola e como muitas pessoas, fiquei sem 
                saber como iria desenvolver minha carreira profissional. 
                Então, juntando minhas experiências e tudo que eu estudei, espero 
                poder mostrar um caminho alternativo pra quem esta passando pela 
                mesma situação ou que já deseja entrar nesse vasto e maravilhoso
                mundo da tecnologia.
              </p>

              <br/>

              <p>
                O objetivo desse blog é compartilhar conhecimento com as pessoas 
                de uma forma diferente, direto ao ponto e resolvendo problemas e 
                situações do dia a dia. O conteúdo será focado em tecnologias 
                front-end principalmente para quem esta iniciando na programação,
                ou que deseja adquirir mais conhecimento em desenvolvimento web.
              </p>

              <br/>

              <p>
                Espero que o conteúdo seja de grande utilidade, e que te ajude 
                nessa caminhada. Obrigado pela oportunidade de compartilhar 
                conhecimento com você e espero que consiga atingir seus 
                objetivos e sonhos. Lembrando que estou sempre aberto a receber 
                feedbacks, dúvidas ou sugestões de novos conteúdos, basta entrar 
                em contato.
              </p>
            </div>

            <div className={styles.skills}>
              <h4>Principais Habilidades</h4>

              <div>
                <img src={HtmlIcon} title="HTML" alt="HTML" />
                <img src={CssIcon} title="CSS" alt="CSS" />
                <img src={JavascriptIcon} title="Javascript" alt="Javascript" />
                <img src={TypescriptIcon} title="Typescript" alt="Typescript" />
                <img src={ReactJsIcon} title="React JS" alt="React JS" />
                <img src={ReactNativeIcon} title="React Native" alt="React Native" />
                <img src={NodeJsIcon} title="Node.js" alt="Node.js" />
                <img src={JQueryIcon} title="JQuery" alt="JQuery" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage;