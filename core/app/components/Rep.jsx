import React, {PropTypes} from 'react';


const Rep = ({rep}) => {


  function renderRepDetails(rep) {
    document.getElementById('rep_details_first_name').innerHTML = rep.name.split(' ')[0];
    document.getElementById('rep_details_last_name').innerHTML = rep.name.split(' ')[1];
    document.getElementById('rep_details_district').innerHTML = rep.district;
    document.getElementById('rep_details_phone').innerHTML = rep.phone;
    document.getElementById('rep_details_office').innerHTML = rep.office;
    document.getElementById('rep_details_link').innerHTML = rep.link;
    document.getElementById('rep_details_link').href = rep.link;
  }

  return (
    <div className="name_party_container">
      <div className="name" onClick={() => renderRepDetails(rep)}><a>{rep.name}</a></div>
      <div className="party">{rep.party}</div>
    </div>
  );
};

Rep.propTypes = {
  rep: PropTypes.object.isRequired
};

export default Rep;
