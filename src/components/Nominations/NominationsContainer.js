// ** NOMINATIONSCONTAINER LOGIC FILE **

import React from "react";
// components
import { NominationsRender } from "./NominationsRender";

export const NominationsContainer = ({ nominations, setNominations }) => {
  const removeNominee = async (nominee) => {
    // remove disabled from movie
    // remove the nominee from 'nominations'
    const noms = await nominations.filter((nom) => nom !== nominee);
    nominee.dis = false;
    setNominations(noms);
  };
  
  return (
    <section className="nominationsCont">
      <NominationsRender
        removeNominee={removeNominee}
        setNominations={setNominations}
        nominations={nominations}
      />
    </section>
  );
};
