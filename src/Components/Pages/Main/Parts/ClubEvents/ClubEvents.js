import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { usePdf } from "@mikecousins/react-pdf";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../../../../media/pdf/Christmas-Cup-program-2019.pdf";
import { Button, Icon, Modal } from "semantic-ui-react";

// import PdfViewer from "../../../Events/Parts/PdfViewer";
// import PDJFSBackend from "../../../Events/Parts/pdfjs";
// import { Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import { PDFViewer } from "@react-pdf/renderer";
// import PdfViewer from "../../../Events/Parts/PdfViewer";

function ClubEvents(props) {
  function exampleReducer(state, action) {
    switch (action.type) {
      case "close":
        return { open: false };
      case "open":
        return { open: true, size: action.size };
      default:
        throw new Error("Unsupported action...");
    }
  }

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;
  //when server is built, there should be an API call
  //to the server to create the events list here
  const { dummyEvents, clubPage } = props;
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [openEvent, setOpenEvent] = useState(false);

  const toggleOpen = () => {
    setOpenEvent(!openEvent);
  };

  const path = window.location.pathname;
  console.log(path);

  const pathClass = path === "/" ? "main-layout" : "events-layout";

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const displayPDF = (one, clubPage) => {
    if (clubPage === "events" && one.pdfFile != null) {
      return (
        <div className="enlarge-image">
          <div className="container">
            <div onClick={() => dispatch({ type: "open", size: "fullscreen" })}>
              <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width="200" height="100" />
              </Document>

              <Link id="pdf-download" to={pdf} target="_blank" download>
                Download PDF
              </Link>
            </div>
            <input
              className="view-pdf-fullscreen-button"
              type="button"
              value="View PDF Fullsize"
              onClick={() => dispatch({ type: "open", size: "fullscreen" })}
            />
            <div className="event-form-container">
              <div className="event-form-button">
                <input
                  className="register-button"
                  type="button"
                  onClick={toggleOpen}
                  value={open === true ? "Hide Form" : "Register For Event"}
                />
              </div>
              <div
                className={`event-form-registration ${
                  openEvent === true ? "show-form" : "hide-form"
                }`}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="register-form"
                    type="text"
                    placeholder="Dog Sanction Number"
                    name="Dog Sanction Number"
                    ref={register}
                  />
                  <br />

                  <input className="register-submit" type="submit" />
                </form>
              </div>
            </div>
          </div>
          <div>
            <Modal
              size={size}
              open={open}
              onClose={() => dispatch({ type: "close" })}
            >
              <Modal.Header>PDF</Modal.Header>
              <Modal.Content>
                <div>
                  <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width="1775" height="1800" />
                  </Document>
                  <p>
                    Page {pageNumber} of {numPages}
                  </p>
                </div>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => dispatch({ type: "close" })}>
                  Close
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        </div>
      );
    }
  };

  const displayEvent = (one, index) => {
    if (one.mainPage === true) {
      return (
        <div key={index} className="events-div">
          <div className="events-list-item">
            <div className="frame events-frame">
              <div className={`events-frame-content `}>
                <div className={`events-text `}>
                  <div className={`events-text-top ${pathClass}`}>
                    <h2 className="event-title">{one.name}</h2>
                    <h5 className="event-date-time">
                      {one.date}, <br /> {one.locationRollCallAndInspection}
                    </h5>
                    <p>{one.desc}</p>
                  </div>
                </div>
              </div>
              <div className="pdf-div">{displayPDF(one, clubPage)}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const listEvents = dummyEvents.map((one, index) => {
    return displayEvent(one, index);
  });

  return (
    <div className="club-events w100per">
      <div className="container">
        <div className="title-bundle">
          <div className="caption">
            <h2>Id occaecat proident </h2>
          </div>
          <div className="section-header">
            <h2>Tempor amet aute </h2>
          </div>
        </div>
        {listEvents}
      </div>
    </div>
  );
}

export default ClubEvents;
