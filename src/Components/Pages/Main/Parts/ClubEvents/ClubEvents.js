import React, { useState } from "react";
// import { usePdf } from "@mikecousins/react-pdf";
// import { fromPath } from "pdf2pic";
import { useForm } from "react-hook-form";

import { pdfjs } from "react-pdf";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Document, Page } from "react-pdf";
import pdf from "../../../../../media/pdf/Christmas-Cup-program-2019.pdf";

// import PdfViewer from "../../../Events/Parts/PdfViewer";
// import PDJFSBackend from "../../../Events/Parts/pdfjs";
// import { Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import { PDFViewer } from "@react-pdf/renderer";
// import PdfViewer from "../../../Events/Parts/PdfViewer";

function ClubEvents(props) {
  //when server is built, there should be an API call
  //to the server to create the events list here
  const { dummyEvents, clubPage } = props;

  const numPage = 1;

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const displayPDF = (one, clubPage) => {
    if (clubPage === "events" && one.pdfFile != null) {
      return (
        <div className="enlarge-image">
          <div className="container">
            <Zoom>
              <Document file={{ url: pdf }}>
                <Page pageNumber={numPage} height={225} />
              </Document>
            </Zoom>
            <div className="event-form-container">
              <div className="event-form-button">
                <input
                  type="button"
                  onClick={toggleOpen}
                  value={open === true ? "Hide Form" : "Register For Event"}
                />
              </div>
              <div
                className={`event-form-registration ${
                  open === true ? "show-form" : "hide-form"
                }`}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Dog Sanction Number"
                    name="Dog Sanction Number"
                    ref={register}
                  />

                  <input type="submit" />
                </form>
              </div>
            </div>
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
            <div className="frame">
              <div className="events-frame-content">
                <div className="events-text">
                  <div className="events-text-top">
                    <h2 className="event-title">{one.name}</h2>
                    <h5 className="event-date-time">
                      {one.date}, {one.locationRollCallAndInspection}
                    </h5>
                    <p>{one.desc}</p>
                  </div>
                </div>
              </div>

              {displayPDF(one, clubPage)}
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
