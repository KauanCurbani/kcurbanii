import Me from "../../img/me.png";
import Curriculo from './Curriculo.pdf'
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Olá, meu nome é</h2>
          <h1 className="i-name">Kauan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photoshop Designer</div>
              <div className="i-title-item">Estudante</div>
              <div className="i-title-item">Code Lover</div>
            </div>
          </div>
          <a href={Curriculo} target='_blank' className="i-btndownload">Baixar Curriculo</a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
