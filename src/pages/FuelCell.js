import Headers from "../modules/Headers";
import Navbar from "../modules/Navbar";
function FuelCell(props) {
  return (
    <div className="">
      <Navbar className={props.navbg}></Navbar>

      <div className="container bg-dark-subtle borderRadiusSm shadow align itemSpacing">
        <h1 className="title p-4">Hydrogen Fuel Cell</h1>
        <div class="container text-center  ">
          <div class="row ">
            <div class="col oswaldfont text-white">
              <img
                className=" borderRadiusSm ductsealingimg"
                src="https://www.hiblow-usa.com/wp-content/uploads/2017/02/Ene-farm-house-snip.jpg"
                alt="Hydrogen Fuel Cell"
              ></img>
            </div>
          </div>
        </div>

        <div class="container text-center marginTop pb-4">
          <div class="row">
            <div class="col title fs-5  leftrightpadding marginTop">
              A fuel cell uses the chemical energy of hydrogen or other fuels to
              cleanly and efficiently produce electricity. If hydrogen is the
              fuel, the only products are electricity, water, and heat. Fuel
              cells are unique in terms of the variety of their potential
              applications; they can use a wide range of fuels and feedstocks
              and can provide power for systems as large as a utility power
              station and as small as a laptop computer. Fuel cells have far
              less or even zero emissions compared to combustion engines.
            </div>
          </div>
        </div>

        <div class="container marginTop pb-4">
          <div class="row">
            <div className="col"></div>
            <div class="col-10 title  fs-5 te leftrightpadding marginTop">
              <ul>
                Hydrogen Fuel Cells are priced around $13-$16 per kilogram.
                (FORD FIND NEW INFO)
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
    </div>
  );
}
export default FuelCell;
