import "./about.css";
import bg from "../../img/a-bg.jpg";
import award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={bg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre Mim!</h1>
        <p className="a-sub">
          Um pouco da história de uma adolecente fascinado por tecnologia, e com
          uma sede enorme de aprender
        </p>
        <p className="a-desc">
          Começei a estudar no inicio de 2021, aprendendo sozinho apenas com
          video aulas gratuitas no Youtube. não sei ao certo o que me fez gostar
          tanto de desenvolver websites mas cada dia que passa eu me inspiro
          mais para aprender e executar, e assim espero começar a trabalhar
          fazendo o que eu amo fazer.
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Cursos do Curso em Video</h4>
            <p className="a-award-desc">
              Sem duvidas um dos melhores cursos gratuitos, sou grato a essa
              equipe, eles me ajudar a descobrir o que eu quero para meu futuro.
              Grato a equipe Curso em Video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
