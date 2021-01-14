// ** NOMINATIONSRENDER JSX FILE **

import React from "react";

export const NominationsRender = ({ nominations, removeNominee }) => {

  return (
    <section className= 'nominations'>
      <h3>Nominations</h3>
      {
        nominations && nominations.map(nominee => {
          return (
            <div className= 'nomineeCard' key= {nominee.imdbID}>
              <span>{nominee.Title}</span>
              <span>{nominee.Year}</span>
              <span>
                <button onClick= {() => {removeNominee(nominee)}}>Remove</button>
              </span>
            </div>
          )
        })
      }
    </section>
  );
};
