function SourceCard(props) {
  return (
    <div className="shadow p-3 mb-5 SourceCard borderRadiusSm">
      <div class="container text-center ">
        <div class="row ">
          <div class="col ">
            <h1 className="title  fs-1">{props.title}</h1>
          </div>
          <div className="col subTitle fs-4">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
export default SourceCard;
