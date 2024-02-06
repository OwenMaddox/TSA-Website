function Headers(props) {
  return (
    <div className="container shadow p-3 bg-dark-subtle mb-5 borderRadiusSm">
      <h1 className="title fs-1">{props.title}</h1>
      <div className="col subTitle fs-4">{props.description}</div>
    </div>
  );
}
export default Headers;
