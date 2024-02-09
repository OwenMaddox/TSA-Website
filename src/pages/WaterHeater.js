import Headers from "../modules/Headers";
import Navbar from "../modules/Navbar";

function WaterHeater(props) {
  return (
    <div className="">
      <Navbar className={props.navbg}></Navbar>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Heat Pump Water Heater</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className="shadow borderRadiusSm"
                src=""
                alt="Water Heater"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              Heat pump water heaters are able to move existing heat from one
              place to another instead of generating its own heat. This is 2-3
              times more energy efficient than storage water heaters and a lower
              operating cost as well. With this water heater switch a household
              is able to save $300 to $500 on electric bills per year.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-10 title fs-5 te leftrightpadding marginTop">
              <ul>Unit and Installation Cost: $1,500 - $3,000</ul>
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
                  Between January 1, 2023, and December 31, 2032, 30% of however
                  much you spent on the installation cost of the heat pump or a
                  maximum amount of $2,000 will be credited.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Solar Water Heater</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className="shadow borderRadiusSm solarwaterheatimg"
                src="https://www.energy.gov/sites/prod/files/active_closed_loop_solar_wa.gif"
                alt="Water Heater"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              Solar water heaters are able to use the heat from the sun to
              provide hot water for a household. This is 50 percent more
              effective than gas and electric water heaters. These can save
              homeowners significantly on energy bills and are good for the
              environment but are ultimately slower at heating water and run out
              much quicker on average.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-10 title fs-5 te leftrightpadding marginTop">
              <ul>Unit and Installation Cost: $4,000 - $13,000</ul>
              <ul className="fs-6">
                (This metric is based off of the size of tank installed)
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
              <ul className="fs-6">
                (The credit is not available for expenses for swimming pools or
                hot tubs. The water must be used in the household.)
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WaterHeater;
