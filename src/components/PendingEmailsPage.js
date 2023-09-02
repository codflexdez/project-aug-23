import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import OptionBanner from "./OptionBanner";
import Footer from "./Footer";
import BookingList from "./BookingList";
import Selector from "./ui-elements/Selector";
import FilterModal from "./ui-elements/FilterModal";
import InfoModal from "./ui-elements/InfoModal";

const PendingEmailsPage = ({
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
    { key: 'h1', value: 'Amadeus Hotel'},
    { key: 'h2', value: 'Amadeus Resort'},
    { key: 'h3', value: 'Amadeus Airopot'},
  ];

  const [selOption, setSelOption] = useState('');
  const [ isFilter, setFilter ] = useState(false);
  const [ isInfo, setInfo ] = useState(false);
  const location = useLocation();

  const openInfo = (e) => {
    e.preventDefault()
    setInfo(true)
  }

  return (
    <>
      <InfoModal isInfoOpen={isInfo} onClose={() => setInfo(false)}/>
      <FilterModal isOpen={isFilter} onClose={() => setFilter(false)}/>
      { isFilter || isInfo ? (<div className="modal-overlay"></div>) : ""}
      <section className="table-gms">
        {showBanner ? (
          <OptionBanner checkboxCount={checkboxCount} deleteEntries={deleteEntries} location={location}/>
        ) : (
          <header className="table-gms-header">
            <div><h2>Pending emails:</h2><Selector options={options} selOption={selOption} toChangeOpt={(option) => setSelOption(option)}/></div>
            <aside>
              <button onClick={() => setFilter(true)} id="filterBtn" type="button">
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
            {/* The first list item is the header of the table */}
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
                <label htmlFor="checkbox-main">Name</label>
                <i className="fa fa-sort"></i>
              </div>
              {/* Enclose semanticAlly similar attributes as a div hierarchy */}
              <div className="attribute-container guest-contacts">
                <div>Email<i className="fa fa-sort"></i></div>
                <div>Cell<i className="fa fa-sort"></i></div>
              </div>
              <div>
                Type<i className="fa fa-sort"></i>
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
              <div>Actions</div>
            </li>
            {/* The rest of the items in the list are the actual data */}
            <BookingList
              data={data}
              individualCheckboxes={individualCheckboxes}
              handleSelfCheck={handleSelfCheck}
              onOpen={openInfo}
              hideRow={hideRow}
            />
          </ol>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default PendingEmailsPage;
