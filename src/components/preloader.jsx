import React from 'react';
import { Page } from 'react-pdf';

const styles = {
  display: 'none',
};

export default ({ numPages, pageNumber }) => {
  if (
    numPages === undefined ||
    pageNumber === undefined ||
    pageNumber === numPages
  ) {
    return <div style={styles} />;
  }
  return (
    <div style={styles}>
      <Page style={styles} pageNumber={pageNumber + 1} />
    </div>
  );
};
