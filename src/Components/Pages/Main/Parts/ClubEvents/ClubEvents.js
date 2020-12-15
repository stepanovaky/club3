import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../../../../../media/pdf/Christmas-Cup-program-2019.pdf";

function ClubEvents(props) {
  //when server is built, there should be an API call
  //to the server to create the events list here
  const { dummyEvents, page } = props;
  console.log(dummyEvents);

  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const toggleOpen = () => {
    setOpen(!open);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const displayPDF = (one, page) => {
    if (page === "events" && one.pdfFile != null) {
      return (
        <div className="enlarge-image">
          <div className="container">
            <Document
              file={{ data: pdf }}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
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
              {displayPDF(one, page)}
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
    // <div className="events-div">
    //   <div key={index} className="events-list-item">
    //     <div className="frame">
    //       <div className="events-frame-content">
    //         <div className="events-text">
    //           <div className="events-text-top">
    //             <h2 className="event-title">{one.name}</h2>
    //             <h5 className="event-date-time">
    //               {formattedDate(one.date)}, {formattedTime(one.locationRollCallAndInspection)}
    //             </h5>
    //             <p>{one.eventDesc}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
