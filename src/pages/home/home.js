import earth from '../../static/earth.svg'
import rank from '../../static/rank.svg'
import { useTranslation } from "react-i18next";

import './home.css'

const Home = () => {
  const { t } = useTranslation();
return (
  <>
    <div className="row">
      <div id="header" className="col-12">
        <div className="container text-center">
          <h1 className="display-3">
          {t('div_home1')}
          </h1>
        </div>
      </div>
      <div id="introduce" className="col-12 text-center">
        <div className="row">
          <div className="col-4">
            <img
              src={earth}
              className="img-fluid introduce-image"
              alt="Earth"
            />
          </div>
          <div className="col-8">
            <h4 className="display-4">
            {t('div_home2')}
            </h4>
            <p className="lead">
            {t('div_home2_sup')}
            </p>
          </div>
        </div>
      </div>
      <div id="ranking" className="col-12 text-center">
        <div className="row">
          <div className="col-8">
            <h4 className="display-4">
            {t('div_home3')}
            </h4>
            <p className="lead">
            {t('div_home3_sup')}

            </p>
          </div>
          <div className="col-4">
            <img
              src={rank}
              className="img-fluid introduce-image"
              alt="ramk"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)}

export default Home;
