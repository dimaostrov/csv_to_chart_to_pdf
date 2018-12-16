import React from "react";
import Papa from "papaparse";
import ReactDataSheet from "react-datasheet";

class DataController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getCsvData();
  }

  fetchCsv() {
    return fetch("data/olympics.csv").then(function(response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function(result) {
        return decoder.decode(result.value);
      });
    });
  }

  getData(result) {
    this.setState({ data: result.data });
    console.log(this.state.data);
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getData
    });
  }

  render() {
    return (
      <section>
        <h2>Data Preview</h2>
        <ReactDataSheet
          data={this.state.data}
          valueRenderer={cell => cell}
        />
      </section>
    );
  }
}

export default DataController;
