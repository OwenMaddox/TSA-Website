import Headers from "../modules/Headers";
import Navbar from "../modules/Navbar";
function DuctSealing(props) {
  return (
    <div className="">
      <Navbar className={props.navbg}></Navbar>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Duct Sealing</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className=" borderRadiusSm ductsealingimg"
                src="https://aeroseal.com/wp-content/uploads/2018/11/what-is-duct-leakage.png"
                alt="Duct Sealing"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              One of the biggest contributors towards wasted energy bills are
              improperly sealed air ducts. If a household's air ducts are
              sealed incorrectly or if the insulation is improperly installed, much
              of the air that is intended to be utilized is lost. Due to this, many
              newer air duct systems are constructed within a conditioned space.
              If a specific room seems to be hotter or colder than others, then
              replacing the air ducts in the house may be a wise and
              cost efficient choice. This also prevents the old ducts in the
              household from releasing mold, dust, and other contaminants into the air
              of the house.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-10 title  fs-5 te leftrightpadding marginTop">
              <ul>
                Air duct replacement price varies depending on multiple factors
                such as location, material and house size. Generally, the cost
                sits at around $12-25 per square foot.
              </ul>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <h1 className="title p-4">Tax Credits</h1>

        <div class="container text-center pb-4">
          <div class="row">
            <div class="col title fs-5 leftrightpadding ">
              <ul>
                With duct sealing, you can claim up to 30% of the cost returned
                from investment into this improvement, up to $1,200.
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DuctSealing;
