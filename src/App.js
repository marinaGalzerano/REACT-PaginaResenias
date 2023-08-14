import "./App.css";
import Testimonio from "./componentes/Testimonio";
function App() {
  return (
    <div className="App">
      <h1>TESTIMONIO DE LOS ALUMNOS: </h1>
      <div className="contenedor-principal">
        <Testimonio
          nombre="Marina Galzerano "
          pais="Argentina"
          imagen="marina"
          cargo="Analista de Sistemas"
          empresa="ORT"
          testimonio="Estudiar análisis de sistemas ha sido un viaje apasionante hacia la comprensión profunda de la tecnología que impulsa nuestro mundo. Cada desafío resuelto es un logro y un paso hacia la creación de soluciones innovadoras y efectivas. La carrera ha ampliado mi perspectiva y me ha brindado las herramientas para enfrentar cualquier problema tecnológico con confianza y habilidad."
        />
      </div>
      <div className="contenedor-principal">
        <Testimonio
          nombre="Marina Galzerano "
          pais="Argentina"
          imagen="marina"
          cargo="Analista de Sistemas"
          empresa="ORT"
          testimonio="La carrera de Analista de Sistemas me ha brindado un camino hacia el dominio de la lógica detrás de la tecnología. A través de desafíos constantes, he fortalecido mis habilidades de resolución de problemas y programación. Cada día es una oportunidad emocionante para aprender y contribuir a la evolución de la era digital"
        />
      </div>
      <div className="contenedor-principal">
        <Testimonio
          nombre="Marina Galzerano "
          pais="Argentina"
          imagen="marina"
          cargo="Analista de Sistemas"
          empresa="ORT"
          testimonio="Como estudiante de Analista de Sistemas, he descubierto la magia de convertir líneas de código en soluciones prácticas. La carrera me ha proporcionado una base sólida en programación, análisis y diseño de sistemas. Cada proyecto es una oportunidad para crear impacto en el mundo digital en constante cambio."
        />
      </div>
    </div>
  );
}

export default App;
