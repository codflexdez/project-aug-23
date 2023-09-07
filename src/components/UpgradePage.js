import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BookingList from "./sections/BookingList";
import QstFilterModal from "./ui-elements/QstFilterModal";
import InfoModal from "./ui-elements/InfoModal";
import Footer from "./ui-elements/Footer";
import Selector from "./ui-elements/Selector";

const UpgradePage = ({
  data,
  individualCheckboxes,
  handleSelfCheck,
  hideRow,
}) => {
  const options = [
    { key: "h1", value: "Amadeus Hotel" },
    { key: "h2", value: "Amadeus Resort" },
    { key: "h3", value: "Amadeus Airopot" },
  ];

  const [selOption, setSelOption] = useState("");
  const [isFilter, setFilter] = useState(false);
  const [isInfo, setInfo] = useState(false);
  const [guestData, setData] = useState(data);

  const location = useLocation();
  const title = location.state || "";

  const openInfo = (e) => {
    e.preventDefault();
    setInfo(true);
  };

  // Function to update Guest status (item.status)
  const newGuestStatus = (itemId, newStatus) => {
    const updatedData = guestData.map((item) => {
      if (item.id === itemId) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <>
      <InfoModal isInfoOpen={isInfo} onClose={() => setInfo(false)} />
      <QstFilterModal
        isOpen={isFilter}
        location={location}
        onClose={() => setFilter(false)}
      />
      {isFilter || isInfo ? <div className="modal-overlay"></div> : ""}
      <section className="table-gms">
        <header className="table-gms-header">
          <div>
            <h2>Pending Upgrades:</h2>
            <Selector
              options={options}
              selOption={selOption}
              toChangeOpt={(option) => setSelOption(option)}
            />
          </div>
          <aside>
            <button
              onClick={() => setFilter(true)}
              id="filterBtn"
              type="button"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/filter.png"}
                alt="filter-icon"
              />
              Filters
            </button>
          </aside>
        </header>

        <section>
          <ol>
            {/* The first list item is the header of the table */}
            <li className="item-container update-container">
              <div>
                <label>Name</label>
                <i className="fa fa-sort"></i>
              </div>
              {/* Enclose semanticAlly similar attributes as a div hierarchy */}

              <div className="attribute-container guest-contacts">
                <div>
                  Status<i className="fa fa-sort"></i>
                </div>
                <div style={{ whiteSpace: "nowrap" }}>
                  Requested Date<i className="fa fa-sort"></i>
                </div>
              </div>

              <div>
                Check In<i className="fa fa-sort"></i>
              </div>

              <div className="attribute-container state">
                <div>
                  LOS<i className="fa fa-sort"></i>
                </div>
                <div>
                  To Room<i className="fa fa-sort"></i>
                </div>
              </div>

              <div style={{ whiteSpace: "nowrap" }}>
                Previous Revenue<i className="fa fa-sort"></i>
              </div>
              <div>
                Extra Revenue<i className="fa fa-sort"></i>
              </div>
              <div>
                History<i className="fa fa-sort"></i>
              </div>

              <div>Actions</div>
            </li>
            {/* The rest of the items in the list are the actual data */}
            <BookingList
              data={guestData}
              individualCheckboxes={individualCheckboxes}
              handleSelfCheck={handleSelfCheck}
              onOpen={openInfo}
              hideRow={hideRow}
              location={location}
              guestStatus={newGuestStatus}
            />
          </ol>
          <Footer title={title}/>
        </section>
      </section>
    </>
  );
};

export default UpgradePage;
