import React, { useRef, useState } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Treebeard } from "react-treebeard";
<<<<<<< HEAD
import {
  Modal,
  ModalHeader,
  FormGroup,
  Label,
  Input,
  ModalFooter,
  Button,
} from "reactstrap";
import { useForm } from "../../hooks/useForm";

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
      children: [{ name: "childLoadingf1" }, { name: "childLoadingf2" }],
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
=======
import { directory } from "../../helpers/directory";
>>>>>>> 8a1e4453674ac4cb83c476f89610251308b6a269

export const PanelVistaArbol = () => {
  const [data, setData] = useState(directory);
  const [cursor, setCursor] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [agregarCarpeta, setAgregarCarpeta] = useState("");
  const [estado, setEstado] = useState("");

  const [crearCarpetaValues, handleCrearCarpeta] = useForm({
    carpeta: "",
  });

  const { carpeta } = crearCarpetaValues;

  const onToggle = (node, toggled) => {
    setCursor(node);

    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
<<<<<<< HEAD
=======

    setCursor(node);
>>>>>>> 8a1e4453674ac4cb83c476f89610251308b6a269
    setData(Object.assign({}, data));
    setCursor(node);
  };

<<<<<<< HEAD
  var valorCopiar;

  var copiaObjeto;
  const obj = {};

  function handleClick(e, d) {
    const nameItem = d.target.innerHTML;
    const nojoHijos = d.foo.children;
    copiaObjeto = {
      name: nameItem,
      children: nojoHijos,
    };

    setEstado(nameItem);
    //console.log(estado)

    findObject(data, "name", "loading parent", copiaObjeto);
    // console.log(data);
    // valorCopiar=nameItem;
    //.__reactEventHandlers$f6wpoyzd59
  }

  const crearCarpeta = (datos) => {
    const nameItem = datos.target.innerHTML;
    console.log(datos);
  };

  function handleCrear(e, datos) {
    setAbierto(!abierto);
    const nameItem = datos.target.innerHTML;
    const nojoHijos = datos.foo.children;
    copiaObjeto = {
      name: nameItem,
      children: nojoHijos,
    };

    crearCarpeta(datos);
  }

  //console.log(estado)

  function clickPegar(e, datos) {
    const nameItem = datos.target.innerHTML;

    console.log(copiaObjeto);
    findObject(data, "name", nameItem, copiaObjeto);
  }

  const findObject = (obj = {}, key, value, copiaObjeto = {}) => {
    const recursiveSearch = (obj = {}) => {
      if (!obj || typeof obj !== "object") {
        return;
      }
      if (obj[key] === value) {
        if (obj["children"]) {
          obj["children"].push(copiaObjeto);
        } else {
          obj["children"] = [];
          obj["children"].push(copiaObjeto);
        }
      }
      Object.keys(obj).forEach(function (k) {
        recursiveSearch(obj[k]);
      });
    };
    recursiveSearch(obj);
    console.log(data);
  };

=======
  function handleClick(e, data) {
    const nameItem = data.target.innerHTML;
    //var element = document.querySelector(data.target);
    console.log(nameItem);
    console.log(data.target);
    //.__reactEventHandlers$f6wpoyzd59
  }

>>>>>>> 8a1e4453674ac4cb83c476f89610251308b6a269
  const copy = (e) => {
    console.log(cursor);
  };

  const menuConfig = {
    Copiar: (e) => copy(e),
    "Crear carpeta": () => console.log("Crear carpeta"),
    "Añadir a favoritos": () => console.log("Crear carpeta"),
    Propiedades: () => console.log("Crear carpeta"),
  };
<<<<<<< HEAD
  const decorators = {
    Toggle: (props) => {
      return (
        <div style={props.style}>
          <svg height={props.height} width={props.width}>
            // Vector Toggle Here
          </svg>
        </div>
      );
    },
  };
=======
>>>>>>> 8a1e4453674ac4cb83c476f89610251308b6a269

  return (
    <div>
      {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
      {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}

      <ContextMenuTrigger id="same_unique_identifier">
<<<<<<< HEAD
        <Treebeard className="toggle" data={data} onToggle={onToggle} />
=======
        <Treebeard data={data} onToggle={onToggle} />
>>>>>>> 8a1e4453674ac4cb83c476f89610251308b6a269
      </ContextMenuTrigger>

      <ContextMenu id="same_unique_identifier">
        <MenuItem
          data={{ foo: cursor }}
          onClick={handleClick}
          onToggle={onToggle}
        >
          Copiar
        </MenuItem>
<<<<<<< HEAD
        <MenuItem data={{ foo: "bar" }} onClick={handleCrear}>
=======
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
>>>>>>> 8a1e4453674ac4cb83c476f89610251308b6a269
          Crear carpeta
        </MenuItem>
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          Añair a favoritos
        </MenuItem>
        <MenuItem data={{ foo: "bar" }} onClick={handleClick}>
          Propiedades
        </MenuItem>
<<<<<<< HEAD

        <MenuItem className="pegar" data={{ foo: "bar" }} onClick={clickPegar}>
          Pegar
        </MenuItem>
      </ContextMenu>

      <Modal isOpen={abierto}>
        <ModalHeader>Crea una carpeta</ModalHeader>
        <FormGroup>
          <Label>Nombre de carpeta</Label>
          <Input
            name="carpeta"
            value={carpeta}
            onChange={handleCrearCarpeta}
            className="nombreCarpeta"
            type="text"
            placeholder="Escriba nombre de la carpeta"
          />
        </FormGroup>

        <ModalFooter>
          <Button onClick={crearCarpeta}>Crear Carpeta</Button>
          <Button onClick={() => setAbierto(false)}>Cerrar</Button>
        </ModalFooter>
      </Modal>
=======
      </ContextMenu>
>>>>>>> 8a1e4453674ac4cb83c476f89610251308b6a269
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
