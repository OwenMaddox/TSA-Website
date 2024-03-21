import Headers from "../modules/Headers";
import Navbar from "../modules/Navbar";

function AirConditioning(props) {
  return (
    <div className="">
      <Navbar className={props.navbg}></Navbar>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Air Conditioning</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className="shadow borderRadiusSm"
                src="https://www.d-air-conditioning.co.uk/wp-content/uploads/2020/02/heating-cycle-1-1024x649.jpg"
                alt="Air Conditioning"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              The process of air conditioning is a commonly known process, nonetheless
              there are ways to reduce energy usage towards a greener footprint. Air conditioners work by cooling the home
              using an evaporator and releasing the hot air outside of the
              household with a condenser. By switching to a higher efficiency
              air conditioner and relying on the unit less for temperature moderation, a household could reduce their energy
              usage by 20% to 50%.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-9 title text-start fs-5 te leftrightpadding marginTop">
              <ul>
                <li>Unit and Installation Cost: $4,000 - $16,000</li>
                <li>Installation Cost: $500 - $2,500</li>
                <li>Total Cost: $4,500 - $18,500</li>
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
                Between January 1, 2023, and December 31, 2032, 30% of however
                much you spent on the installation cost of the unit or a maximum
                amount of $600 will be credited.
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AirConditioning;
