import React, {PropTypes} from 'react';

const RepDetails = () => {
  return (

      <section id="right_section" className="flex_column_start">
        <h3>Info</h3>
        <div id="right_first_name"> First Name: &nbsp;<div id="rep_details_first_name"></div></div>
        <div id="right_last_name"> Last Name: &nbsp;<div id="rep_details_last_name"></div></div>
        <div id="right_district"> District: &nbsp;<div id="rep_details_district"></div></div>
        <div id="right_phone"> Phone:  &nbsp;<div id="rep_details_phone"></div></div>
        <div id="right_office"> Office:  &nbsp;<div id="rep_details_office"></div></div>
        <div id="right_link"> Link: &nbsp;<a id="rep_details_link" href=""></a></div>
      </section>

  );
};


export default RepDetails;