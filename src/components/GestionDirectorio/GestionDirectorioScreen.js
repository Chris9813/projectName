import React from "react";
import { GridView } from "./GridView";
import { PanelVistaArbol } from "./PanelVistaArbol";
import { ToolBarGridView } from "./ToolBarGridView";

export const GestionDirectorioScreen = () => {
  return (
    <>
      <h1>GestionDirectorioScreen</h1>
      <div>
        <div>
          <PanelVistaArbol />
        </div>
        <div>
          <div>
            <ToolBarGridView />
          </div>
          <div>
            <GridView />
          </div>
        </div>
      </div>
    </>
  );
};
