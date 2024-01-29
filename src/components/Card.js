function Card(props) {
  return (
    <div className="shadow cardbg">
      <div class="container text-center">
        <div class="row">
          <div class="col">
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
          </div>
          <div class="col">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
