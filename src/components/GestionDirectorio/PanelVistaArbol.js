import React, { useRef, useState } from "react";
import useContextMenu from "contextmenu";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "contextmenu/ContextMenu.css";
import { Treebeard } from "react-treebeard";
import "@szhsin/react-menu/dist/core.css";

const directory = {
  name: "root",
  toggled: true,
  children: [
    {
      name: "parent",
      children: [{ name: "child1" }, { name: "child2" }],
    },
    {
      name: "loading parent",
      loading: true,
      children: [],
    },
    {
      name: "parent",
      children: [
        {
          name: "nested parent",
          children: [{ name: "nested child 1" }, { name: "nested child 2" }],
        },
      ],
    },
  ],
};

export const PanelVistaArbol = () => {
  const [data, setData] = useState(directory);
  const [cursor, setCursor] = useState(false);
  const [contextMenu, useCM] = useContextMenu();

  const onToggle = (node, toggled) => {
    setCursor(node);

    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }

    setCursor(node);
    setData(Object.assign({}, data));
  };

  function handleClick(e, data) {
    const nameItem = data.target.innerHTML;
    //var element = document.querySelector(data.target);
    console.log(nameItem);
    console.log(data.target);
    //.__reactEventHandlers$f6wpoyzd59
  }

  const copy = (e) => {
    console.log(cursor);
  };

  const menuConfig = {
    Copiar: (e) => copy(e),
    "Crear carpeta": () => console.log("Crear carpeta"),
    "Añadir a favoritos": () => console.log("Crear carpeta"),
    Propiedades: () => console.log("Crear carpeta"),
  };

  return (
    <div>
      {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
      {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}

      <ContextMenuTrigger id="same_unique_identifier">
        <Treebeard data={data} onToggle={onToggle} />
      </ContextMenuTrigger>

      <ContextMenu id="same_unique_identifier">
        <MenuItem
          data={{ foo: cursor }}
          onClick={handleClick}
          onToggle={onToggle}
        >
          Copiar
        </MenuItem>
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          Crear carpeta
        </MenuItem>
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          Añair a favoritos
        </MenuItem>
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          Propiedades
        </MenuItem>
      </ContextMenu>
    </div>
  );
};

{
  /*
        <div className="App">
      <div className="box" onContextMenu={useCM(menuConfig)}>
        <code>
          <Treebeard data={data} onToggle={onToggle} />
        </code>
      </div>
      {contextMenu}
    </div>

<Treebeard data={data} onToggle={onToggle} />;

  */
}
