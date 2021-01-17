// ** NOMINATIONSCONTAINER LOGIC FILE **

import React from "react";
// components
import { NominationsRender } from "./NominationsRender";

export const NominationsContainer = ({ nominations, setNominations }) => {
  const removeNominee = async (nominee) => {
    // remove the nominee from 'nominations'
    const noms = await nominations.filter((nom) => nom !== nominee);
    await setNominations(noms);
    // if all nominations are removed, remove the cookie
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
