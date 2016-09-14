import React, {PropTypes} from 'react';

import Rep from './Rep';

const RepList = ({reps}) => {
  return (
    <div>

      <div id="list_header">
        <div id="name_header">Name</div>
        <div id="party_header">Party</div>
      </div>

        {reps.map(rep =>
          <Rep key={rep.name} rep={rep}/>
        )}

    </div>
  );
};

RepList.propTypes = {
  reps: PropTypes.array.isRequired
};

export default RepList;