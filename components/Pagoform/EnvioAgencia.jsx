import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";

import { EnvioContext } from "@/contexts/envio/EnvioContext";
import {
  getAgenciasByComunaUrl,
  getComunasLabelUrl,
  getComunasSinAgenciasUrl,
  getRegionesUrl,
} from "@/helpers/URL";

export const getRegiones = async () => {
  return await fetch(getRegionesUrl)
    .then((result) => result.json())
    .then((data) => {
      const regiones = data?.map((region) => ({
        label: region.label,
        id: region.id,
      }));
      //console.log(regiones)
      return regiones;
    });
};

export const getComunasLabel = async (id) => {
  return await fetch(getComunasLabelUrl + id)
    .then((result) => result.json())
    .then((data) => {
      const regiones = data?.map((region) => ({
        label: region.label,
        id: region.id,
      }));
      //console.log(regiones)
      return regiones;
    });
};

export const getAgenciasByComuna = async (id) => {
  return await fetch(getAgenciasByComunaUrl + id)
    .then((result) => result.json())
    .then((data) => {
      //console.log(regiones)
      return data;
    });
};

export const getComunasSinAgencias = async (id) => {
  return await fetch(getComunasSinAgenciasUrl + id)
    .then((result) => result.json())
    .then((data) => {
      const regiones = data?.map((region) => ({
        label: region.label,
        id: region.id,
      }));
      //console.log(regiones)
      return regiones;
    });
};

function EnvioAgencia() {
  const [envio, setEnvio] = useContext(EnvioContext);

  const [regiones, setRegiones] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [comunasSinAgencias, setComunasSinAgencias] = useState([]);
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");
  const [agencias, setAgencias] = useState([]);
  const [seleccionado, setSeleccionado] = useState();

  const [caca, setCaca] = useState(false);

  const cargandoAgencias = agencias.length === 0 && caca;

  const cargandoRegiones = regiones.length === 0;

  const cargandoComunas = region.length != 0 && comunas.length === 0;

  const getregiones = async () => {
    const data = await getRegiones();
    setRegiones(data);
  };

  const getcomunas = async (id) => {
    const data = await getComunasLabel(id);
    setComunas(data);
  };

  const getagencias = async (id) => {
    const data = await getAgenciasByComuna(id);
    setAgencias(data);
    //console.log(data);
  };

  const getcomunassinagencias = async (id) => {
    const data = await getComunasSinAgencias(id);
    setComunasSinAgencias(data);
  };

  useEffect(() => {
    getregiones();
    setEnvio({
      ...envio,
      courier: "",
      courierId: "",
      costo: null,
      agencia: null,
    });
  }, []);

  return (
    <>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={6}
          xl={6}
          xxl={6}
          style={{ marginTop: "30px" }}
        >
          {/* <label className="form-label">Region</label> */}
          <Autocomplete
            //disablePortal
            disableClearable
            disabled={cargandoRegiones}
            forcePopupIcon
            freeSolo
            id="regiones"
            options={regiones}
            loading={cargandoRegiones}
            isOptionEqualToValue={(option, value) => option.label === value}
            loadingText="Cargando..."
            noOptionsText="No está la región 🙁"
            value={region}
            inputValue={region}
            onInputChange={(e, inputValue) => {
              setRegion(inputValue);
            }}
            onChange={(e, newValue) => {
              getcomunassinagencias(newValue.id);
              setComuna("");
              setCaca(false);
              setAgencias([]);
              setSeleccionado();
              setComunas([]);
              getcomunas(newValue.id);
              setRegion(newValue.label);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Region"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {cargandoRegiones ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={8}
          lg={6}
          xl={6}
          xxl={6}
          style={{ marginTop: "30px" }}
        >
          {/* <label className="form-label">Comuna</label> */}
          <Autocomplete
            //disablePortal
            disableClearable
            forcePopupIcon
            freeSolo
            disabled={region.length == 0}
            id="comunas"
            options={comunas}
            loading={cargandoComunas || cargandoComunas}
            getOptionDisabled={(option) => {
              //console.log(option);
              for (var i = 0; i < comunasSinAgencias.length; i++) {
                if (comunasSinAgencias[i].id == option.id) {
                  //console.log("se encuentra objeto!.");
                  return true;
                }
              }
            }}
            loadingText="Cargando..."
            noOptionsText="No está la comuna 🙁"
            value={comuna}
            inputValue={comuna}
            onInputChange={(e, inputValue) => {
              setComuna(inputValue);
            }}
            isOptionEqualToValue={(option, value) => {
              option.label === value;
            }}
            onChange={(e, newValue) => {
              setAgencias([]);
              setCaca(true);
              getagencias(newValue.id);
              setSeleccionado();
              setComuna(newValue.label);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Comuna"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {cargandoComunas ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </Col>
      </Row>
      <Row
        className="gy-3 align-items-center justify-content-start"
        style={{ marginTop: "12px" }}
      >
        {agencias.length != 0 ? (
          <>
            <Col xs={12}>
              <h5 className="fw-normal">
                👇 Seleccione agencia para retirar👇
              </h5>
            </Col>
            {agencias?.map((agencia) => {
              return (
                <Col
                  xs={12}
                  sm={11}
                  md={10}
                  lg={10}
                  xl={9}
                  xxl={9}
                  key={agencia.id}
                >
                  <Card
                    className={
                      agencia.id == seleccionado
                        ? "agencia seleccionado"
                        : "agencia"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setSeleccionado(agencia.id);
                      setEnvio({
                        ...envio,
                        courier: "Retiro en agencia",
                        costo: agencia.precio,
                        agencia: agencia.id,
                        courierId: agencia.courier.id
                      });
                    }}
                  >
                    <Card.Header>
                      <h6 className="fw-normal">{agencia.nombre}</h6>
                    </Card.Header>
                    <Card.Body>
                      <p> Agencia: {agencia.courier.nombre}</p>
                      <p> Dirección: {agencia.direccion}</p>

                      {agencia.precio == 0 ? (
                        <>
                          <p className="text-success">
                            ¡Envío por pagar en agencia!{" "}
                          </p>
                        </>
                      ) : (
                        <p>Precio: ${agencia.precio}</p>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}

            <Col xs={12}>
              <h6 className="fw-normal">
                {" "}
                <b>Nota:</b> Todos los envíos son realizados desde Stgo 📍.
              </h6>
            </Col>
          </>
        ) : (
          <>
            {cargandoAgencias ? (
              <Col xs={12}>
                <h5 className="fw-normal">cargando...</h5>
              </Col>
            ) : (
              <Col xs={12}>
                <h5 className="fw-normal">👆 Seleccione región y comuna 👆</h5>
              </Col>
            )}
          </>
        )}
      </Row>
    </>
  );
}

export default EnvioAgencia;
