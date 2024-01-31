import "./CardFlipper.css";
function Card(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="shadow p-3 mb-5 cardbg ">
            <div class="container text-center row">
              <div class="col ">
                <h1 className="title  fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class={props.class}
                    viewBox="0 0 16 16"
                  >
                    <path d={props.d} />
                  </svg>
                </h1>
              </div>
              <div className="col subTitle fs-5">{props.title}</div>
            </div>
            <h1 className="fs-6">{props.description}</h1>
          </div>
        </div>
        <div className="flip-card-back cardbg shadow">
          <h1 className="title fs-3">{props.backTitle}</h1>
          <p>{props.backDescription}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
