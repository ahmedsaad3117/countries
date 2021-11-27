import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ChangeLang from "./ChangeLang";
import RankingModal from "./rankingModal";
const Navbar = () => {
    const { t } = useTranslation();





  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          {t('nav_title1')}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mx-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {t('home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/countries">
                {t('nav_title2')}
                </Link>
              </li>

              <li className="nav-item" data-bs-toggle="modal" data-bs-target="#rankingModal">
                <Link className="nav-link " aria-current="page" to="">
                {t('nav_title3')}
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-5">
              <ChangeLang />
            </form>
          </div>
        </div>
      </nav>
      <RankingModal/>
    </>
  );
};

export default Navbar;
