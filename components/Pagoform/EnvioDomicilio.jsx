import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { EnvioContext } from "../../contexts/envio/EnvioContext.jsx";

import {
  Autocomplete,
  TextField,
  CircularProgress,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import {
  getComunasLabelUrl,
  getCostosByComunaUrl,
  getRegionesUrl,
} from "@/helpers/URL.js";

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

export const getCostosByComuna = async (id) => {
  return await fetch(getCostosByComunaUrl + id)
    .then((result) => result.json())
    .then((data) => {
      //console.log(regiones)
      return data;
    });
};

function EnvioDomicilio() {
  const [envio, setEnvio] = useContext(EnvioContext);

  const [regiones, setRegiones] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");

  const [poto, setPoto] = useState(false);

  const cargandoRegiones = regiones.length === 0;

  const cargandoComunas = region.length != 0 && comunas.length === 0;

  const [envios, setEnvios] = useState([]);

  const [metodo, setMetodo] = useState();

  const [comentarios, setComentarios] = useState("");
  const [depto, setDepto] = useState("");
  const [numero, setNumero] = useState("");
  const [direccion, setDireccion] = useState("");

  const getregiones = async () => {
    const data = await getRegiones();
    setRegiones(data);
  };

  const getcomunas = async (id) => {
    const data = await getComunasLabel(id);
    setComunas(data);
  };

  const getenvioscostos = async (id) => {
    setPoto(true);
    const data = await getCostosByComuna(id);
    setEnvios(data);
    setPoto(false);
    //console.log(data);
  };

  useEffect(() => {
    setEnvio({
      ...envio,
      courier: "",
      courierId: "",
      costo: null,
      agencia: null,
    });
    getregiones();
    setComentarios(envio.comentarios);
    setDepto(envio.depto);
    setNumero(envio.numeroDireccion);
    setDireccion(envio.direccion);
  }, []);

  return (
    <form>
      <Row style={{ marginTop: "0px" }}>
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
            freeSolo
            filterSelectedOptions
            forcePopupIcon
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
              setComuna("");
              setComunas([]);
              setEnvios([]);
              setMetodo();
              getcomunas(newValue.id);
              setRegion(newValue.label);
              setEnvio({
                ...envio,
                courier: "",
                courierId: "",
                costo: null,
                region: newValue.label,
                regionId: newValue.id,
              });
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
            filterSelectedOptions
            disabled={region.length == 0 || cargandoComunas}
            id="comunas"
            options={comunas}
            loading={cargandoComunas}
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
              setEnvios([]);
              setComuna(newValue.label);
              setMetodo();
              getenvioscostos(newValue.id);
              setEnvio({
                ...envio,
                courier: "",
                courierId: "",
                costo: null,
                comuna: newValue.label,
                comunaId: newValue.id,
              });
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
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        {/* <Col xs={12} style={{marginBottom: '10px'}}>
                    <label className="col-form-label">Método de envío</label>
                </Col>
             */}
        {envios[0] ? (
          <Col>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Seleccione forma de envío
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => {
                  const xd = JSON.parse(e.target.value);
                  setMetodo(e.target.value);
                  setEnvio({
                    ...envio,
                    courier: xd.nombre,
                    courierId: xd.id,
                    costo: xd.precio,
                  });
                }}
                //value = {metodo}
              >
                {envios?.map((metodo) => {
                  return (
                    <Row
                      key={metodo.id}
                      className="align-items-center justify-content-center"
                    >
                      <Col xs={10} style={{ marginRight: "0px" }}>
                        <FormControlLabel
                          style={{ marginLeft: "8px" }}
                          value={JSON.stringify({
                            id: metodo.courier.id,
                            nombre: metodo.courier.nombre,
                            precio: metodo.precio,
                          })}
                          control={<Radio />}
                          label={metodo.courier.nombre}
                        />
                      </Col>
                      <Col xs={2} className="text-center">
                        <small
                          className="fs-6 text-success"
                          style={{ marginLeft: "-35px" }}
                        >
                          ${metodo.precio?.toLocaleString("es-CL")}{" "}
                        </small>
                      </Col>
                    </Row>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Col>
        ) : (
          <>
            {!poto ? (
              <h6 className="fw-normal">
                Seleccione región y comuna para ver las formas de envío
              </h6>
            ) : (
              <Col xs={12}>
                <h5 className="fw-normal">cargando...</h5>
              </Col>
            )}
          </>
        )}
      </Row>

      <Row style={{ marginTop: "25px" }}>
        <Col xs={12}>
          {/* <label  className="form-label">Dirección</label> */}
          <TextField
            id="direccion"
            fullWidth
            label="Dirección"
            inputProps={{ maxLength: 99 }}
            value={direccion}
            onChange={(e) => {
              setDireccion(e.target.value);
              setEnvio({ ...envio, direccion: e.target.value });
            }}
            variant="outlined"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "0px" }}>
        <Col xs="auto" style={{ marginTop: "20px" }}>
          {/* <label className="form-label">Número</label> */}
          <TextField
            id="numero"
            fullWidth
            label="Número"
            inputProps={{ maxLength: 19 }}
            value={numero}
            onChange={(e) => {
              setNumero(e.target.value);
              setEnvio({ ...envio, numeroDireccion: e.target.value });
            }}
            variant="outlined"
          />
        </Col>
        <Col xs="auto" style={{ marginTop: "20px" }}>
          {/* <label className="form-label">Depto/Condominio</label> */}
          <TextField
            id="depto"
            fullWidth
            label="Depto/Condominio"
            inputProps={{ maxLength: 19 }}
            value={depto}
            onChange={(e) => {
              setDepto(e.target.value);
              setEnvio({ ...envio, depto: e.target.value });
            }}
            variant="outlined"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <Col xs={12}>
          {/* <label className="form-label">Indicaciones/comentarios adicionales</label> */}
          <TextField
            id="comentarios"
            inputProps={{ maxLength: 34 }}
            fullWidth
            label="Indicaciones/comentarios adicionales"
            value={comentarios}
            onChange={(e) => {
              setComentarios(e.target.value);
              setEnvio({ ...envio, comentarios: e.target.value });
            }}
            variant="outlined"
          />
        </Col>
      </Row>
    </form>
  );
}

export default EnvioDomicilio;
