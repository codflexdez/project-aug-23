import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./ui-elements/Footer";
import OptionBanner from "./ui-elements/OptionBanner";
import SurveyList from "./sections/SurveyList";
import Selector from "./ui-elements/Selector";
import QstFilterModal from "./ui-elements/QstFilterModal";



const SurveysPage = ({
  data,
  showBanner,
  handleCheckAll,
  individualCheckboxes,
  handleSelfCheck,
  selectAll,
  checkboxCount,
  deleteEntries,
  hideRow
}) => {
  const options = [
    { key: 's1', value: 'Questionnaires'},
    { key: 's2', value: 'Stay survey'},
    { key: 's3', value: 'Acivity survey'},
  ];

  const [selOption, setSelOption] = useState('');
  const [isQstFilter, setQstFilter] = useState(false);
  

  const location = useLocation();
  return (
    <>
      <QstFilterModal isOpen={isQstFilter} location={location} onClose={() => setQstFilter(false)}/>
      { isQstFilter ? (<div className="modal-overlay"></div>) : ""}
      <section className="table-gms">
        {showBanner ? (
          <OptionBanner
            checkboxCount={checkboxCount}
            deleteEntries={deleteEntries}
            location={location}
          />
        ) : (
          <header className="table-gms-header survey-results-header">
          <div>
            <h2>Recent Surveys:</h2>
            <Selector options={options} selOption={selOption} toChangeOpt={(option) => setSelOption(option)}/>
          </div>
           
            <aside className="survey-btns">
              <button
                
                id="filterBtn"
                type="button"
                aria-label="button-filters"
                onClick={() => setQstFilter(true)}
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/filter.png"}
                  alt="filter-icon"
                />
                Filters
              </button>
            </aside>
          </header>
        )}
        
        <section>
          <ol>
            {/* The first list item is the header of the table  */}
            <li className="item-container">
              <div>
                <input
                  id="checkbox-main"
                  type="checkbox"
                  className="form-check-input"
                  checked={selectAll}
                  onChange={handleCheckAll}
                />
              </div>
              <div>
                <label htmlFor="checkbox-main">
                  Name
                </label>
                <i className="fa fa-sort"></i>
              </div>

              {/* Enclose semanticAlly similar attributes as a div hierarchy  */}
              <div className="attribute-container guest-contacts">
                <div>
                  Email<i className="fa fa-sort"></i>
                </div>
                <div>
                  Sentiment<i className="fa fa-sort"></i>
                </div>
              </div>
              <div>
                Score<i className="fa fa-sort"></i>
              </div>
              <div className="attribute-container state">
                <div>
                  Check In<i className="fa fa-sort"></i>
                </div>
                <div>
                  Check Out<i className="fa fa-sort"></i>
                </div>
              </div>
              <div>
                Created<i className="fa fa-sort"></i>
              </div>
              <div className="actions">Actions</div>
            </li>
            <SurveyList
              data={data}
              individualCheckboxes={individualCheckboxes}
              handleSelfCheck={handleSelfCheck}
              hideRow={hideRow}
            />
          </ol>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default SurveysPage;
