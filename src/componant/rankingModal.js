import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './styleCom.css'


const RankingModal = () => {
    const { t } = useTranslation();

  const rankings = [
    "Airports_with_paved",
    "Airports",
    "Birth_Rate",
    "Death_Rate",
    "GDP_per_capita_(PPP)",
    "GDP",
    "Heliports",
    "Area",
    "Life_Expectancy",
    "Literacy",
    "Median_Age",
    "Population",
    "Railways",
    "Roadways",
    "Sex_ratio",
    "Waterways",
  ];
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="rankingModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="rankingModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="rankingModalLabel">
                  {t("Rankings")}
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body container">
                <div className="row">
                  {rankings.map((ranking, index) => {
                    return (
                      <div className="col-6">
                        <Link className="link-ranking" to={`/ranking/${ranking}`}> {t(ranking)}</Link> 
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RankingModal;
