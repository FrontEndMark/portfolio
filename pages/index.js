function Home() {
    return <div>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

        :root {
        --white: #f0f0f0;
        --red: #D92A1A;
        --blue: #A69E33;
        --gray: #151826;
        }

        * {
            margin: 0;
            padding: 0;
        }

        *,
        *::before,
        *::after {
        box-sizing: inherit;
        }

        html {
            box-sizing: border-box;
            /* Set font size for easy rem calculations
            * default document font size = 16px, 1rem = 16px, 100% = 16px
            * (100% / 16px) * 10 = 62.5%, 1rem = 10px, 62.5% = 10px
            */
            font-size: 62.5%;
            scroll-behavior: smooth;
        }

        @media (max-width: 75em) {
            html {
                font-size: 60%;
            }
        }

        @media (max-width: 61.25em) {
            html {
                font-size: 58%;
            }
        }

        @media (max-width: 28.75em) {
            html {
                font-size: 55%;
            }
        }

        body {
            font-family: 'Poppins', sans-serif;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 1.4;
            color: var(--white);
        }

        h1,
        h2 {
            font-family: 'Raleway' sans-serif;
            font-weight: 700;
            text-align: center;
        }

        h1 {
            font-size: 6rem;
        }

        h2 {
            font-size: 4.2rem;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: var(--white);
        }

        img {
            display: block;
            width: 100%;
        }

        </style>

        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
        />
        <link 
            rel="stylesheet" 
            href="style.css"
        ></link>
        <link 
            rel="shortcut icon" 
            href="https://img.icons8.com/color/48/000000/color-palette.png" 
            type="image/x-icon"
        ></link>
        <nav id="navbar" class="nav">
            <ul class="nav-list">
                <li><a href="#welcome-section">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
        <section id="welcome-section" class="welcome">
            <h1>Olá, eu sou o Marcos</h1>
            <p>um desenvolvedor front-end</p>
        </section>
        <section id="projects" class="projects-section">
            <h2 class="projects-section-header">Estes são alguns dos meus projetos</h2>
            <div class="projects-grid">
                <a 
                    href="https://codepen.io/FrontEndMark/full/oNzpejB"
                    target="_blank"
                    class="project project-tile">
                    <img 
                        src="https://github.com/FrontEndMark/personal-portfolio/blob/main/images/tribute-page.png?raw=true" 
                        alt="imagem de tribute page" 
                        class="project-image"
                    ></img>
                    <p class="project-title">
                        <span class="code">&lt;</span>
                        Tribute Page
                        <span class="code">&#47;&gt;</span>
                    </p>
                </a>
                <a 
                    href="https://codepen.io/FrontEndMark/full/KKgepKr"
                    target="_blank"
                    class="project">
                    <img 
                        src="https://github.com/FrontEndMark/personal-portfolio/blob/main/images/landing-page.png?raw=true" 
                        alt="imagem de landing page" 
                        class="project-image"
                    ></img>
                    <p class="project-title">
                        <span class="code">&lt;</span>
                        Landing Page
                        <span class="code">&#47;&gt;</span>
                    </p>
                </a>
                <a 
                    href="https://codepen.io/FrontEndMark/full/RwGQoKq"
                    target="_blank"
                    class="project">
                    <img 
                        src="https://github.com/FrontEndMark/personal-portfolio/blob/main/images/survey-form.png?raw=true" 
                        alt="imagem de survey form" 
                        class="project-image"
                    ></img>
                    <p class="project-title">
                        <span class="code">&lt;</span>
                        Survey Form
                        <span class="code">&#47;&gt;</span>
                    </p>
                </a>
                <a 
                    href="https://codepen.io/FrontEndMark/full/PoGxoYm"
                    target="_blank"
                    class="project">
                    <img 
                        src="https://github.com/FrontEndMark/personal-portfolio/blob/main/images/lamp.png?raw=true" 
                        alt="imagem de survey form" 
                        class="project-image"
                    ></img>
                    <p class="project-title">
                        <span class="code">&lt;</span>
                        Lamp
                        <span class="code">&#47;&gt;</span>
                    </p>
                </a>
            </div>
            <a
                href="https://codepen.io/FrontEndMark"
                class="btn btn-show-all"
                target="_blank"
                >Show all<i class="fas fa-chevron-right"></i>
            </a>
        </section>
        <section id="contact" class="contact-section">
            <div class="contact-section-header">
                <h2>Vamos trabalhar juntos...</h2>
            </div>
            <div class="contact-links">
                <a 
                    href="https://www.instagram.com/frontendmark1/"
                    target="_blank"
                    class="btn contact-details">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
                <a
                    id="profile-link"
                    href="https://github.com/FrontEndMark"
                    target="_blank"
                    class="btn contact-details">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a
                    href="https://twitter.com/FrontEndMark1"
                    target="_blank"
                    class="btn contact-details">
                    <i class="fab fa-twitter"></i> Twitter
                </a>
                <a 
                    href="mailto:frontendmark@gmail.com" 
                    class="btn contact-details">
                    <i class="fas fa-at"></i> E-mail
                </a>
                <a 
                    href="tel:+55-21-97551-4861" 
                    class="btn contact-details">
                    <i class="fas fa-mobile-alt"></i> Ligue
                </a>
            </div>
        </section>
        <footer>
            <p>
                &copy; 2021
                <a href="https://www.freecodecamp.com/" target="_blank">
                    FrontEndMark
                </a>
            </p>
        </footer>
    </div>
}

export default Home