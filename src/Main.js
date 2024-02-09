import Card from "./modules/Card";
import Headers from "./modules/Headers";
import solar from "./img/solarpanelangled.png";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg h5 mainNavbg ">
        <div class="container-fluid align-middle">
          <div className="navHeight"></div>
          <Link to="/" class="navbar-brand mainNavbg title align-middle">
            Green Energy
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div class="nav-link  mainNavbg" aria-current="page">
                  <Link class="mainNavbg align-middle subTitle" to="/">
                    Home
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link  mainNavbg" aria-current="page">
                  <Link class="mainNavbg align-middle subTitle" to="/sources">
                    Sources
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="text-center shadow">
        <div class="row marginTop">
          <div class="oswaldfont">
            <h1 className="overlaytxt">Green energy and such</h1>
          </div>
          <div class="col">
            <img
              className="solarPanelImg bgblue borderRadiusSm"
              src={solar}
              alt="Solar Panels"
            />
          </div>
        </div>
      </div>

      <div class="container text-center imgSpacing ">
        <div class="row ">
          <div class="col oswaldfont text-white">
            <div className="container shadow p-3 bglightgray mb-5 borderRadiusSm">
              <h1 className="title fs-1">Green energy and such</h1>
              <div className="col subTitle fs-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container itemSpacing text-center text-white">
        <div class="row">
          <div class="col">
            <Card
              title="Water Heater"
              description="There are two main types of water heaters. The first type is a heat pump water heater and the second is a solar water heater."
              class="bi bi-droplet-fill"
              d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"
              backTitle="Water Heater"
              backDescription="Heat pump water heaters get warmth from the air and use it to heat up the water. Solar water heaters use the sun’s heat to warm up stored water. "
              link="/water-heater"
            ></Card>
          </div>
          <div class="col">
            <Card
              title="Duct Sealing"
              description="Maintaining and upgrading home insulation and sealing is a large component for an efficient use of energy within a home."
              class="bi bi-funnel-fill"
              d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"
              backTitle="Duct Sealing"
              backDescription="Along with its energy saving benefits sealing household ducts helps to improve indoor air quality by reducing the risk of pollutants entering ducts and circulating through your home."
              link="/duct-sealing"
            ></Card>
          </div>
          <div class="col">
            <Card
              title="Air Conditioning"
              description="Air conditioning pulls air in from outside to cool the household down"
              class="bi bi-wind"
              d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"
              backTitle="Air Conditioning"
              backDescription="Energy efficient air conditioning works by reducing the humidity and temperature of the household using less energy than the average unit"
              link="/air-conditioning"
            ></Card>
          </div>
        </div>
      </div>

      <div class="container itemSpacing text-center text-white">
        <div class="row">
          <div class="col">
            <Card
              title="Heat Pump"
              description="A heat pump is an energy-efficient and eco-friendly alternative to the traditional household heating and cooling systems."
              class="bi bi-house-door-fill"
              d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
              backTitle="Heat Pump"
              backDescription="There are two types of heat pumps. The first type is a geothermal heat pump, and the second is a air source heat pump"
              link="/heat-pump"
            ></Card>
          </div>

          <div class="col">
            <Card
              title="Fuel Cell"
              description="Hydrogen fuel cell technology is coverts hydrogen into electricity and heat"
              class="bi bi-lightning-charge-fill"
              d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
              backTitle="Fuel Cell"
              backDescription="Hydrogen Fuel cells are an efficient and cleaner means towards providing energy to a variety of applications than their alternatives"
              link="/fuel-cell"
            ></Card>
          </div>

          <div class="col">
            <Card
              title="Solar Panel"
              description="Solar Panels are a very clean and renewable source of energy"
              class="bi bi-sun"
              d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
              backTitle="Solar Panel"
              backDescription="Solar technologies convert sunlight into electrical energy either through photovoltaic (PV) panels or through mirrors that concentrate solar radiation."
              link="/solar-panel"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
