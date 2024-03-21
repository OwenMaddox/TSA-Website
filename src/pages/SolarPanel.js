import Headers from "../modules/Headers";
import Navbar from "../modules/Navbar";
function SolarPanel(props) {
  return (
    <div className="">
      <Navbar className={props.navbg}></Navbar>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Solar Panels</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className=" borderRadiusSm ductsealingimg"
                src="https://www.clean-energy-ideas.com/wp-content/uploads/2013/06/solar-panel-diagram.jpg"
                alt="Solar Panels"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              Solar panels are known to reduce the amount of energy a
              household consumes. Yet, there are many components that have to be
              taken into consideration prior to solar
              panel installation. Namely, the roof on one's house should be considered. Certain materials or styles of roofing
              may not qualify for rebate or allow for easy installation.
              Solar roofing tiles and solar shingles, however, do apply as
              they are able to generate clean energy for the household.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-10 title  fs-5 te leftrightpadding marginTop">
              <ul>
                Solar Panel installation is a costly investment. However, with an
                incentive rebate of 30% and the long-term saving of taxes and
                electricity, homeowners are encouraged to take the solar route.
                Solar PV systems typically cost about $3 per watt installed.
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
                <li>
                  26% for property placed in service after December 31, 2032,
                  and before January 1, 2034
                </li>
                <li>
                  22% for property placed in service after December 31, 2033,
                  and before January 1, 2035
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolarPanel;
