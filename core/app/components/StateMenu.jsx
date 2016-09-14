import React, {Component, PropTypes} from 'react';

class StateMenu extends Component {

  render() {

    return (
      <div>
        <section id="select_section" className="flex_row_center">
          <br/>
          {/*make state options dynamically*/}
          {/*'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
          'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MS', 'MO', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
          'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA',
          'WV', 'WI', 'WY'*/}
          <div className="select">
            <span className="arr change_cursor"></span>
            <select id="select_state" ref="selectState">
              <option className="selectRep" value="">STATE</option>
              <option className="selectRep" value="AK">AK</option>
              <option className="selectRep" value="AZ">AZ</option>
              <option className="selectRep" value="AR">AR</option>
              <option className="selectRep" value="CA">CA</option>
              <option className="selectRep" value="CO">CO</option>
              <option className="selectRep" value="CT">CT</option>
              <option className="selectRep" value="DE">DE</option>
              <option className="selectRep" value="FL">FL</option>
              <option className="selectRep" value="GA">GA</option>
              <option className="selectRep" value="HI">HI</option>
              <option className="selectRep" value="ID">ID</option>
              <option className="selectRep" value="IL">IL</option>
              <option className="selectRep" value="IN">IN</option>
              <option className="selectRep" value="IA">IA</option>
              <option className="selectRep" value="KS">KS</option>
              <option className="selectRep" value="KY">KY</option>
              <option className="selectRep" value="LA">LA</option>
              <option className="selectRep" value="MA">MA</option>
              <option className="selectRep" value="UT">UT</option>
            </select>
          </div>
          &nbsp;
          <div className="select">
            <span className="arr change_cursor"></span>
            <select id="select_rep" ref="selectRep">
              <option value="">REPRESENTATIVE</option>
              <option className="selectRep" value="senator">Senator</option>
              <option className="selectRep" value="representative">Representative</option>
            </select>
          </div>
        </section>
      </div>
    );
  };
}

export default StateMenu;