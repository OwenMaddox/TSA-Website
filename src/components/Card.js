function Card(props) {
  return (
    <div className="shadow p-3 mb-5 cardbg bg-secondary">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1 className="title  fs-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class={props.class}
                viewBox="0 0 16 16"
              >
                <path d={props.d} />
              </svg>
              {props.title}
            </h1>
          </div>
          <div className="col subTitle fs-4">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
