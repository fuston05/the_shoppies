// ** NOMINATIONSCONTAINER LOGIC FILE **

import React, { useState } from "react";
// components
import { NominationsRender } from "./NominationsRender";

export const NominationsContainer = ({ nominations, setNominations }) => {

  const removeNominee = (nominee) => {
    const noms = nominations.filter(nom => {
      return nom != nominee;
    });
    setNominations(noms)
  };

  return (
    <div className="nominationsCont">
      <NominationsRender
        removeNominee={removeNominee}
        setNominations={setNominations}
        nominations={nominations}
      />
    </div>
  );
};
