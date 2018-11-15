import React, { Component,Fragment } from 'react';
import Header from './components/header/Header'
import Curso from './components/cursos/curso';
import Lista from './services/cursos/cursos';
import './css/reset.css'
import './css/flexbox.css'
import './css/style.css'


class App extends Component {

  render() {
    return (
  <Fragment>
    <Header/>

	<main className="conteudoPrincipal">
		<div className="container">
			<h2 className="subtitulo">Nossos cursos</h2>

			<nav>
				<ul className="conteudoPrincipal-cursos">
					{Lista.map(item => <Curso name={ item.name }/>)}
				</ul>
			</nav>
		</div>

		<section className="videoSobre">
			<div className="container">

				<div className="container-video">
          <div className="elasticMedia-container">
            <iframe title="iframe" className="elasticMedia" src="https://www.youtube.com/embed/_i9DUJcn-mU" frameBorder="0"></iframe>
          </div>
        </div>

        <div className="videoSobre-sobre">
          <h2 className="videoSobre-sobre-title">Vantagens do Alurinha</h2>
            <ul className="videoSobre-sobre-list">
              <li className="videoSobre-sobre-item">Estude onde quiser</li>
              <li className="videoSobre-sobre-item">Novos cursos todos os meses</li>
              <li className="videoSobre-sobre-item">Cursos compatíveis com o mercado</li>
            </ul>
          <button className="videoSobre-button">Cadastre-se já</button>
        </div>
        
      </div>
		</section>

	</main>

	<footer className="rodapePrincipal">
		<div className="container">

			<section className="rodapePrincipal-navMap">
				<h3 className="subtitulo">Mapa de cursos</h3>
				<nav className="rodapePrincipal-navMap-list">

					<h4 className="navmap-list-title navmap-list-title-backend">Linguagens Backend</h4>
					<a className="rodapePrincipal-navMap-link" href="#">Java</a>
					<a className="rodapePrincipal-navMap-link" href="#">PHP</a>
					<a className="rodapePrincipal-navMap-link" href="#">Pascal</a>
					<a className="rodapePrincipal-navMap-link" href="#">Scala</a>
					<a className="rodapePrincipal-navMap-link" href="#">Python</a>
					<a className="rodapePrincipal-navMap-link" href="#">Java Web</a>
					<a className="rodapePrincipal-navMap-link" href="#">Assembly</a>
					<a className="rodapePrincipal-navMap-link" href="#">Lógica de programação</a>

					<h4 className="navmap-list-title navmap-list-title-frontend">Linguagens Frontend</h4>
					<a className="rodapePrincipal-navMap-link" href="#">Flexbox</a>
					<a className="rodapePrincipal-navMap-link" href="#">Desenvolvimento Web</a>
					<a className="rodapePrincipal-navMap-link" href="#">Javascript</a>
					<a className="rodapePrincipal-navMap-link" href="#">AngularJS</a>
					<a className="rodapePrincipal-navMap-link" href="#">ReactJS</a>
					<a className="rodapePrincipal-navMap-link" href="#">Polymer</a>

					<h4 className="navmap-list-title navmap-list-title-framework">Frameworks</h4>
					<a className="rodapePrincipal-navMap-link" href="#">Ruby on Rails</a>
					<a className="rodapePrincipal-navMap-link" href="#">VRaptor</a>
					<a className="rodapePrincipal-navMap-link" href="#">SpringMVC</a>
					<a className="rodapePrincipal-navMap-link" href="#">NodeJS</a>
					<a className="rodapePrincipal-navMap-link" href="#">Django</a>
					<a className="rodapePrincipal-navMap-link" href="#">Bootstrap3</a>

					<h4 className="navmap-list-title navmap-list-title-bancoDeDados">Banco de dados</h4>
					<a className="rodapePrincipal-navMap-link" href="#">MySQL</a>
					<a className="rodapePrincipal-navMap-link" href="#">MariaDB</a>
					<a className="rodapePrincipal-navMap-link" href="#">Postegres</a>

				</nav>
			</section>

		</div>

		<section className="rodapePrincipal-patrocinadores">
			<div className="container">
				<ul className="rodapePrincipal-patrocinadores-list">
					<li>
						<a className="rodapePrincipal-patrocinadores-list-link patrocinadores-list-link-alura" href="#">
							<img src="img/logos/alura.svg" alt="Logo da Alura"/>
						</a>
					</li>
					<li>
						<a className="rodapePrincipal-patrocinadores-list-link patrocinadores-list-link-caelum" href="#">
							<img src="img/logos/caelum.svg" alt="Logo da Caelum"/>
						</a>
					</li>
					<li>
						<a className="rodapePrincipal-patrocinadores-list-link patrocinadores-list-link-casaDoCodigo" href="#">
							<img src="img/logos/cdc.svg" alt="Logo da Casa do Código"/>
						</a>
					</li>
				</ul>
				<form className="rodapePrincipal-contatoForm" action="#">
					<fieldset>
						<legend className="rodapePrincipal-contatoForm-legend" htmlFor="email-contato">Entre em contato conosco</legend>
						<div className="rodapePrincipal-contatoForm-fieldset">
							<input className="rodapePrincipal-contatoForm-emailInput" type="email" name="email-contato" id="email-contato"/>
							<button className="rodapePrincipal-contatoForm-submit" type="submit">Enviar</button>
						</div>
					</fieldset>
				</form>
			</div>
		</section>
	</footer>
  </Fragment>
    );
  }
}

export default App;
