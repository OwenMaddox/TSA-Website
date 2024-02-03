import "./SourceFlippy.css";
import { Link } from "react-router-dom";
function SourceFlippy(props) {
  return (
    <div className="flip-source itemSpacing">
      <div className="flip-source-inner">
        <div className="flip-source-front">
          <div className="shadow p-3 mb-5 SourceCard borderRadiusSm">
            <div class="container text-center ">
              <div class="row ">
                <div class="col ">
                  <h1 className="title  fs-1">{props.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-source-back shadow">
          <Link to={props.link} className="cardtxt filler">
            <div className="shadow p-3 mb-5 SourceCard borderRadiusSm">
              <div class="container text-center ">
                <div class="row ">
                  <div class="col ">
                    <h1 className="title  fs-1">{props.description}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SourceFlippy;
