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
          Começei a estudar desenvolvimento web no inicio de 2021, apenas com videos no Youtube de HTML5 e CSS3,
          gosto muito de CSS, fazendo designs modernos e responsivos. Atualmente estou estudando ReactJs com cursos da Udemy
        </p>
        <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Desenvolvimento ReactJs</h4>
            <p className="a-award-desc">
              Meu foco inicial é ter experiência como desenvolvedor WEB utlizando ReactJs, apesar de ainda nao 
              ter experiencia continuo estudando para poder ter uma carreira profissional fazendo oque eu gosto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
