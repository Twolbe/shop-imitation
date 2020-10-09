import React from "react";
import { connect } from "react-redux";
import List from "../List/List";

function Catalog(props) {
  return (
    <div>
      <h1>Catalog</h1>
      <List goods={props.catalog} />
    </div>
  );
};

const mapStateToProps = state => ({ catalog: state.catalog })

export default connect(mapStateToProps)(Catalog)
