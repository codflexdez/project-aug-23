import React, { useState } from "react";
import Selector from "./ui-elements/Selector";


const EmailTemplate = () => {
  const options = [
    { key: "t1", value: "Amadeus template" },
    { key: "t2", value: "Welcome template" },
    { key: "t3", value: "Greeting template" },
  ];
  const [selOption, setSelOption] = useState("");
  const [testvar, setTest] = useState(false);
  const [settings, setSettings] = useState(true);

  const toChangeOpt = (option) => {
    setSelOption(option);
  };
  const url = "";

  const styles = {
    span: {
      transform: "rotate(25deg)",
    },
    span2: {
      fontSize: "10px",
    },
    section: {
      padding: "8px",
      height: "60vh",
    },
    div: {
      margin: "auto",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    activeButton: {
      color: "var(--text-color_accent)",
      lineHeight: "240%",
      borderBottom: "3px solid var(--text-color_accent)",
    },
    dropdown: {
      position: "relative",
    },
  };

  const [kabab, setKabab] = useState(false);

  const showKabab = (e) => {
    e.preventDefault();
    setKabab(!kabab);
};
   

  return (
    <>
      <section className="email-page">
        <article className="email-form-grid">
          <div className="col-1">
            <button>
              <span
                className="fa fa-paper-plane-o fa-lg"
                style={styles.span}
              ></span>
              Send
            </button>
          </div>
          <div className="col-2">
            <div className="row-1">To</div>
            <div className="row-2">Cc</div>
            <div className="row-3">Subject</div>
          </div>
          <div className="col-3">
            <div className="row-1">
              <span className="fa fa-circle" style={styles.span2}></span>
              <span>Albert Mayer</span>
            </div>
            <input className="row-2" type="text" />
            <input className="row-3" type="text" placeholder="Offers" />
          </div>
        </article>

        <header className="header-title">
          {/* here goes .select and dots  */}
        </header>

        <section className="template">
          <article>
            <header>
              <Selector
                options={options}
                selOption={selOption}
                toChangeOpt={toChangeOpt}
                style={styles.select}
              />
              <a href={url} role="button" aria-label="html editor">
                <span className="fa fa-code" title="edit html"></span>
              </a>
              <a href={url} role="button">
                <img
                  src={process.env.PUBLIC_URL + "/img/undo.png"}
                  alt="undo"
                />
              </a>
              <a href={url} role="button">
                <img
                  src={process.env.PUBLIC_URL + "/img/redo.png"}
                  alt="redo"
                />
              </a>
              <div className="dropdown onHover" style={styles.dropdown}>
                <a href={url} 
                className="dropbtn" 
                type="button"
                onClick={(e) => showKabab(e)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/img/dots.png"}
                    alt="menu-dropdown"
                  />
                </a>
                {kabab && (<div
                  className="dropdown-content opDropdown"
                  data-active="false"
                  aria-label="dropdown"
                >
                  <a href="#/showVariables" onClick={(e) => showKabab(e)}>Show Variables</a>
                  <a href="#/print" onClick={(e) => showKabab(e)}>Print</a>
                  <a href="#/showLog" onClick={(e) => showKabab(e)}>Show Log</a>
                  <a href="#/showNotes" onClick={(e) => showKabab(e)}>Show Notes</a>
                  <a href="#/duplicate" onClick={(e) => showKabab(e)}>Duplicate</a>
                  <a href="#/delete" onClick={(e) => showKabab(e)}>Delete</a>
                </div>)}
              </div>
            </header>
            <section>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/img/template-hotel.webp"}
                  alt="template-hotel"
                />
              </div>
            </section>
          </article>
          <aside>
            <header>
              <button
                onClick={() => {
                  setSettings(true);
                  setTest(false);
                }}
                style={settings ? styles.activeButton : {}}
              >
                Settings
              </button>
              <button
                onClick={() => {
                  setSettings(false);
                  setTest(true);
                }}
              >
                Test
              </button>
            </header>
            <section style={styles.section}>
              <div style={styles.div}>
                {settings && (
                  <img
                    src={process.env.PUBLIC_URL + "/img/template-setting.png"}
                    alt="settings"
                    style={styles.img}
                  />
                )}
                {testvar && (
                  <img
                    src={process.env.PUBLIC_URL + "/img/test-mode.png"}
                    alt="variables"
                    style={styles.img}
                  />
                )}
              </div>
            </section>
          </aside>
        </section>
      </section>
    </>
  );
};

export default EmailTemplate;
