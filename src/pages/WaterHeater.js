import Headers from "../modules/Headers";
import Navbar from "../modules/Navbar";

function WaterHeater(props) {
  return (
    <div className="">
      <Navbar className={props.navbg}></Navbar>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Hot Water Heater Pump</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className="shadow borderRadiusSm"
                src="https://thumbs.dreamstime.com/b/heat-pump-system-solar-panels-water-heating-outline-diagram-heat-pump-system-solar-panels-water-heating-outline-262837401.jpg"
                alt="Water Heater"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              A heat pump water heater has the ability to move the already
              existing heat from one place to another, instead of generating its
              own heat which uses more energy. This is 2-3 times more energy
              efficient than an average household's water heater, while also boasting
              a lower operation cost. A water heater switch like
              this is able to save a household $300 to $500 per year on electric
              bills.
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
              A solar water heater is able to utilize the heat from the sun and transfer warmth
               to provide hot water for a household. This is ultimately 50 percent
              more effective than the traditional household gas and electric
              water heaters. This method of water heating can save homeowners significant costs on energy
              bills while simultaneously benefiting the environment. However, their performance
              at heating water falls short of alternatives.
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
