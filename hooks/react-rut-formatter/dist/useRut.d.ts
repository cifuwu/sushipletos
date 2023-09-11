/**
 * Un _hook_ personalizado que facilita el trabajo con números de RUT.
 *
 * El _hook_ retorna lo siguiente:
 *   - `rut`: Objeto conteniendo:
 *     - `formatted`: Formateado de la forma XX.XXX.XXX-X
 *     - `raw`: Formateado "en bruto" (XXXXXXXX-X), adecuado para usar en
 *       registros o variables
 *   - `updateRut`: actualiza el RUT, para entregarlo formateado en `rut`
 *   - `isValid`: indica si el RUT tiene DV válido
 *
 * @returns Lo indicado arriba
 */
export declare const useRut: () => {
    updateRut: (rut: string) => void;
    rut: {
        formatted: string;
        raw: string;
    };
    isValid: boolean;
};
