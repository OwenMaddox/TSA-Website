import "./SourceFlippy.css";
import { Link } from "react-router-dom";
function SourceFlippy(props) {
  return (
    <div className="flip-source">
      <div className="flip-source-inner">
        <div className="flip-source-front">
          <div className="shadow p-3 mb-5 sourcebg ">
            <div class="container text-center row">
              <div class="col ">
                <div className="subTitle fs-5">{props.title}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-source-back sourcebg shadow">
          <Link to={props.link} className="cardtxt filler">
            <div className="filler">
              <p className="cardtxt">{props.description}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SourceFlippy;
