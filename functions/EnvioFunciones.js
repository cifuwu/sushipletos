
export const getComunas = (data,region) => {
    let caca 
    data?.map( (elemento)  => {
        if (elemento.region === region){
            caca = elemento
        }
    })
    return caca
}

export const getEnvios = (data, comuna) => {
    let caca 
    data?.map( (elemento)  => {
        if (elemento.comuna === comuna){
            caca = elemento
        }
    })
    return caca
}

export const getIdRegion = (data, region) => {
    let caca 
    data?.map( (elemento)  => {
        if (elemento.region === region){
            caca = elemento
        }
    })
    return caca.id
}

export const getIdcomuna = (data, comuna) => {
    let caca 
    data?.map( (elemento)  => {
        if (elemento.comuna === comuna){
            caca = elemento
        }
    })
    return caca.id
}