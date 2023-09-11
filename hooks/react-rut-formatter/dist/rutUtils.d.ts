/**
 * Remueve los separadores de un número de RUT (como "." o "-").
 * @param rut RUT a limpiar
 * @returns El mismo RUT sin separadores (p. ej. 444444444)
 */
export declare const removeSeparators: (rut: string | null) => string;
/**
 * Le da formato a un RUT, incluyendo separadores de miles. Adecuado para presentación.
 *
 * Por ejemplo, "444444444" o "44444444-4" se convierte en "44.444.444-4".
 * @param rut RUT a formatear
 * @returns El mismo RUT con formato XX.XXX.XXX-X
 */
export declare const prettifyRut: (rut: string | null) => string;
/**
 * Le da formato a un RUT, sin incluir separadores de miles. Adecuado para uso interndo de un programa.
 *
 * Por ejemplo, "444444444" o "44444444-4" se convierte en "44444444-4".
 * @param rut RUT a formatear
 * @returns El mismo RUT con formato XXXXXXXX-X
 */
export declare const formatRut: (rut: string | null) => string;
declare type RutDv = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "K";
/**
 * Calcula el dígito verificador (DV) de un RUT.
 * @param rut Rut a calcular
 * @returns Su dígito verificador
 */
export declare const calculateDv: (rut: number) => RutDv;
/**
 * Comprueba si el dígito verificador de un RUT (con o sin formato) es válido.
 * @param rut RUT a comprobar
 * @returns Si el RUT tiene un dígito verificador válido
 */
export declare const checkRut: (rut: string | null) => boolean;
export {};
