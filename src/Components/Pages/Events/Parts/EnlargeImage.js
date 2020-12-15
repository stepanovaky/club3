import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "../../../../media/pdf/Christmas-Cup-program-2019.pdf";

function EnlargeImage(props) {
  const { pdf } = props;
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const toggleOpen = () => {
    setOpen(!open);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="enlarge-image">
      <div className="container">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}

export default EnlargeImage;
