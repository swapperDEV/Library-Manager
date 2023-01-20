import React, { useState } from "react";
import { Map, Draggable } from "pigeon-maps";

type types = {
  anchor: [number, number];
  setAnchor: any;
};

export const SignMap = ({ anchor, setAnchor }: types) => {
  return (
    <>
      <Map
        height={300}
        defaultCenter={[52.237, 21.0175]}
        defaultZoom={11}
        minZoom={6}
      >
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <img src="/book.png" width={100} height={95} alt="Pigeon!" />
        </Draggable>
      </Map>
    </>
  );
};
