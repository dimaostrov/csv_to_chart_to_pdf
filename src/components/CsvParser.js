import React from "react";
import olympics from '../data/olympics.csv';
// import fs from 'fs'
const results = [];

function handleFiles() {
  // Check for the various File API support.
  if (window.FileReader) {
    // FileReader are supported.
  } else {
    alert("FileReader are not supported in this browser.");
  }
}
handleFiles();
// const data = Papa.parse("../data/olympics.csv", config);


console.log(olympics)
const CsvParser = () => <div>some dat</div>;

const Input = () => (
  <div>
    <input type="file" />
  </div>
);

export default CsvParser;

/*
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
  const config = {
      delimiter: ',',
      complete: function(results, file) {
    console.log("Parsing complete:", results, file);
  }
};
 */
