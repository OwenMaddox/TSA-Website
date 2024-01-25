import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  Navbarbg">
      <div class="container-fluid">
        <div class="navbar-brand Navbarbg">Green Energy</div>
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
                <Link class="Navbarbg" to="/">
                  Home
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link  Navbarbg" aria-current="page">
                <Link class="Navbarbg" to="/sources">
                  Sources
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
