import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Comentarios from './components/Comentarios'


function App() {
  return(
    <body>
      <Header/>
      <section>
        <AboutMe/>
        <section>
        <Skills/>
        </section>
        <section>
          <Comentarios/>
        </section>
      </section>
    </body>
  );
}

export default App;
