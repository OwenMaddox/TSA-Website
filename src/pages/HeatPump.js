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

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              A geothermal heat pump is used to transfer heat into and out of a
              household by using the ground to gather heat as well as dispense heat.
              This means that heat is traveling through the ground from a high
              temperature place to a low one or vice versa. Some models of these
              geothermal heat pump systems have additions built for even more
              comfort and energy savings for the owner. A positive to buying a
              geothermal system over an air-source system is that they are
              quieter, need little maintenance, and they don’t depend on the
              weather or temperature outside.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-9 title text-start fs-5 te leftrightpadding marginTop">
              <ul>
                <li>Unit Cost: $3,000 - $6,000</li>
                <li>Installation Cost: $6,000 - $20,000</li>
                <li>Total Cost: $9,000 - $26,000</li>
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
                  30% for property placed in service after December 31, 2016,
                  and before January 1, 2020
                </li>
                <li>
                  26% for property placed in service after December 31, 2019,
                  and before January 1, 2022
                </li>
                <li>
                  30% for property placed in service after December 31, 2021,
                  and before January 1, 2033
                </li>
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

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Air Pump Heating and Cooling</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className="shadow borderRadiusSm heatpumpimg"
                src="https://www.lozierheatingcooling.com/filesimages/heatPump.jpeg"
                alt="Cooling vs Heating"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row mt-5">
            <h1 className="title">Ducted Air-Source Heat Pumps</h1>
            <div class="col title fs-5  leftrightpadding ">
              With a ducted air-source heat pump or heating system, a household
              is able to reduce the amount of electricity used for heating by
              65% compared to the average heating of a house furnace or boiler.
              These models of heat pumps are highly efficient and can dehumidify
              a household's air better than standard central air conditioners.
              This means that the amount of energy being used by a ducted heat
              pump uses less energy and allows for more cooling in the hotter
              months of the year.
            </div>
          </div>
          <div class="row  mt-5">
            <h1 className="title">Ductless Air-Source Heat Pumps</h1>
            <div class="col title fs-5  leftrightpadding ">
              If the household trying to install an air-source heat pump does
              not have the necessary ducts to install the unit, ductless heat pumps provide
              an effective alternative. These air-source pumps are
              sometimes called mini-split heat pumps and they are able to circulate hot
              and cold water in its system instead of using the air around it.
              Functionally, these pumps behave very similarly to their air-sourced cousins.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-9 title text-start fs-5 te leftrightpadding marginTop">
              <ul>
                <li>Unit Cost: $2,000 - $5,500</li>
                <li>Installation Cost: $4,000 - $8,000</li>
                <li>Total Cost: $6,000 - $13,500</li>
              </ul>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <div class="container text-center pb-4">
          <h1 className="title ">Tax Credits</h1>
          <div class="row">
            <div class="col title fs-5 leftrightpadding ">
              <div>
                Tax Credits you are able to claim after installing an air source
                heat pump.
              </div>
              <div>
                This is only between January 1, 2023, and December 31, 2032 30%
                of however much you spent on the installation cost of the heat
                pump or a maximum amount of $2,000 will be credited.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeatPump;
