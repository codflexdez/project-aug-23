import React, { useState } from "react";
import Selector from "./ui-elements/Selector";

const TemplatePage = () => {
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
      fontSize: "16px",
    },
    dot: {
      fontSize: "10px",
      position: "absolute",
      left: "2rem",
    },
    section: {
      height: "100%",
      display: "flex",
      flexDirection: "row",
      flexBasis: "33.3%",
    },
    select: {
      width: "30ch",
    },
    img: {
      width: "100%",
      objectFit: "cover",
      padding: "8px",
    },
    activeButton: {
      textTransform: "uppercase",
      color: "var(--text-color_accent)",
      lineHeight: "240%",
      borderBottom: "4px solid var(--text-color_accent)",
    },
    dropdown: {
      position: "relative",
      marginLeft: "auto",
    },
    formDiv: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      gap: "1.625rem",
      borderBottom: "1px solid var(--border-color)",
      paddingTop: "1rem",
      marginRight: "1rem"
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
        <aside style={{ flexBasis: "17%", paddingTop: "1.5rem", paddingRight: "1rem" }}>
          <Selector
            options={options}
            selOption={selOption}
            toChangeOpt={toChangeOpt}
          />
        </aside>
        <article
          className="email-form-img"
          style={{
            paddingTop: "0.375rem",
            flexBasis: "49.7%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={styles.formDiv}
          >
            <label>To</label>
            <input type="text" style={{ marginRight: "auto" }} />
            <span className="fa fa-circle" style={styles.dot}></span>
            <button style={{ marginLeft: "auto", marginRight: "1rem" }}>Cc</button>
          </div>
          <div style={styles.formDiv}>
            <label>Subject</label>
            <input type="text" placeholder="Offers" />
          </div>
          <section style={{ overflowY: "scroll", height: "100%", paddingTop: "1rem"}}>
            <img
              src={process.env.PUBLIC_URL + "/img/template-hotel.webp"}
              alt="template-hotel"
            />
          </section>
        </article>

        <aside style={styles.section}>
          <section
            style={{
              padding: "1rem",
              flexBasis: "6.3%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <a href={url} role="button" aria-label="html editor" style={{marginTop: "7rem"}}>
              <span className="fa fa-code" title="edit html"></span>
            </a>
            <a href={url} role="button">
              <img src={process.env.PUBLIC_URL + "/img/undo.png"} alt="undo" />
            </a>
            <a href={url} role="button">
              <img src={process.env.PUBLIC_URL + "/img/redo.png"} alt="redo" />
            </a>
          </section>
          <section style={{ flex: "1" }}>
            <header
              style={{
                paddingLeft: "1rem",
                paddingRight: "8px",
                paddingTop: "14px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3rem",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
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
                style={testvar ? styles.activeButton : {}}
              >
                Email Variables
              </button>
              <div className="dropdown onHover" style={styles.dropdown}>
                <a
                  href={url}
                  className="dropbtn"
                  type="button"
                  onClick={(e) => showKabab(e)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/img/dots.png"}
                    alt="menu-dropdown"
                    style={{ width: "28px", display: "flex",
                    alignItems: "center"}}
                  />
                </a>
                {kabab && (
                  <div
                    className="dropdown-content opDropdown"
                    data-active="false"
                    aria-label="dropdown"
                    style={{top:"2.25rem"}}
                  >
                    <a href="#/showVariables" onClick={(e) => showKabab(e)}>
                      Show Variables
                    </a>
                    <a href="#/print" onClick={(e) => showKabab(e)}>
                      Print
                    </a>
                    <a href="#/showLog" onClick={(e) => showKabab(e)}>
                      Show Log
                    </a>
                    <a href="#/showNotes" onClick={(e) => showKabab(e)}>
                      Show Notes
                    </a>
                    <a href="#/duplicate" onClick={(e) => showKabab(e)}>
                      Duplicate
                    </a>
                    <a href="#/delete" onClick={(e) => showKabab(e)}>
                      Delete
                    </a>
                  </div>
                )}
              </div>
            </header>
            <article style={{ overflowY: "auto", height: "90.5%" }}>
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
            </article>
          </section>

          <button className="btn-send"
            style={{
              position: "fixed",
              bottom: "2rem",
              textTransform: "unset",
              right: "1rem",
              padding: "0.625rem 1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--bg-primary)",
              color: "white",
              border: "0",
              borderRadius: "0.25rem",
              fontSize: "medium",
            }}
          >
            <span
              className="fa fa-paper-plane-o fa-lg"
              style={styles.span}
            ></span>
            Send
          </button>
        </aside>
      </section>
    </>
  );
};

export default TemplatePage;
