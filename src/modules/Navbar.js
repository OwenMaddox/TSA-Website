import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg shadow h5 Navbarbg">
      <div class="container-fluid align-middle">
        <div className="navHeight"></div>
        <Link to="/" class="navbar-brand Navbarbg title align-middle">
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
              <div class="nav-link  Navbarbg" aria-current="page">
                <Link class="Navbarbg align-middle subTitle" to="/">
                  Home
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link  Navbarbg" aria-current="page">
                <Link class="Navbarbg align-middle subTitle" to="/sources">
                  Sources
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown mainNavbg align-middle subTitle">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="nav-link  mainNavbg" aria-current="page">
                    <Link
                      class="mainNavbg align-middle subTitle"
                      to="/water-heater"
                    >
                      Water Heater
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="nav-link  mainNavbg" aria-current="page">
                    <Link
                      class="mainNavbg align-middle subTitle"
                      to="/duct-sealing"
                    >
                      Duct Sealing
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="nav-link  mainNavbg" aria-current="page">
                    <Link
                      class="mainNavbg align-middle subTitle"
                      to="/air-conditioning"
                    >
                      Air Conditioning
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="nav-link  mainNavbg" aria-current="page">
                    <Link
                      class="mainNavbg align-middle subTitle"
                      to="/heat-pump"
                    >
                      Heat Pump
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="nav-link  mainNavbg" aria-current="page">
                    <Link
                      class="mainNavbg align-middle subTitle"
                      to="/Fuel-cell"
                    >
                      Fuel Cell
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="nav-link  mainNavbg" aria-current="page">
                    <Link
                      class="mainNavbg align-middle subTitle"
                      to="/solar-panel"
                    >
                      Solar Panel
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
