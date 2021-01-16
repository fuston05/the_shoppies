// ** NOMINATIONSCONTAINER LOGIC FILE **

import React from "react";
// components
import { NominationsRender } from "./NominationsRender";

export const NominationsContainer = ({
  nominations,
  setNominations,
  cookies,
  setCookie,
  removeCookie,
}) => {
  const removeNominee = async (nominee) => {
    // remove the nominee from 'nominations'
    const noms = await nominations.filter((nom) => {
      return nom != nominee;
    });
    await setNominations(noms);
    // if all nominations are removed, remove the cookie
    if (cookies.nominationsCookie.length === 1) {
      removeCookie("nominationsCookie");
    } else {
      // update cookies to EXCLUDE the removed nominee
      setCookie("nominationsCookie", noms);
    }
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
