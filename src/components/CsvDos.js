import React from "react";
import Papa from "papaparse";
import ReactDataSheet from "react-datasheet";
import { Button } from "rebass";

class DataController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataSelect: [],
      dataToShow: [],
      currentlyCondensed: false
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
    // here we have data, condensedData (first 10 rows), and currently displaying Data
    this.setState({
      data: result.data,
      dataToShow: result.data,
      condenseData: result.data.slice(0, 20)
    });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getData
    });
  }

  toggleData = () => {
    this.state.currentlyCondensed
      ? this.setState({
          dataToShow: this.state.data,
          currentlyCondensed: !this.state.currentlyCondensed
        })
      : this.setState({
          dataToShow: this.state.condenseData,
          currentlyCondensed: !this.state.currentlyCondensed
        });
  };

  render() {
    const { data, dataCondensed, dataToShow } = this.state;
    return (
      <section>
        <h2>Data Preview</h2>
        <Button onClick={this.toggleData}>
          {this.state.currentlyCondensed ? "Expand Data":"Condense Data"}
        </Button>
        <ReactDataSheet data={dataToShow} valueRenderer={cell => cell} />
      </section>
    );
  }
}

export default DataController;
