// ** NOMINATIONSRENDER JSX FILE **

import React from "react";

export const NominationsRender = ({ nominations, removeNominee }) => {
  return (
    <section className="nominations">
      <h3>Nominations</h3>
      {!nominations.length && <p>Nominate some movies!</p>}
      {nominations &&
        nominations.map((nominee) => {
          return (
            <div className="nomineeCard" key={nominee.imdbID}>
              <span className= 'movieInfo'>{nominee.Title} - </span>
              <span className= 'movieInfo'>{nominee.Year}</span>
              <span className= 'nominateBtn'>
                <button
                  onClick={() => {
                    removeNominee(nominee);
                  }}
                >
                  Remove
                </button>
              </span>
            </div>
          );
        })}
    </section>
  );
};
