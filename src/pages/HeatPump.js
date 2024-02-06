import Headers from "../modules/Headers";
import Navbar from "../modules/Navbar";
function HeatPump(props) {
  return (
    <div className="">
      <Navbar className={props.navbg}></Navbar>
      <div class="container text-center itemSpacing ">
        <div class="row ">
          <div class="col oswaldfont ">
            <Headers
              className="bg-dark-subtle"
              title="Heat Pumps"
              description="Heat pumps transfer heat into and out of the home using the ground as both a heat source and a heat sink. Certain models of geothermal systems are available with two-speed compressors and variable fans for more comfort and energy savings. Relative to air-source heat pumps, they are quieter, last longer, need little maintenance, and do not depend on the temperature of the outside air."
            ></Headers>
          </div>
        </div>
      </div>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Geothermal Heating and Cooling</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className="shadow borderRadiusSm"
                src="https://rmi.org/wp-content/uploads/2023/03/dandelion-energy-heat-pump.png"
                alt="Cooling vs Heating"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              Heat pumps are used to transfer heat into and out of the home
              using the ground as both a heat source and a heat sink. Certain
              models of geothermal systems are available with two-speed
              compressors and variable fans for more comfort and energy savings.
              Relative to air-source heat pumps, they are quieter, last longer,
              need little maintenance, and do not depend on the temperature of
              the outside air.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeatPump;
