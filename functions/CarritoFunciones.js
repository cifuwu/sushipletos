export const getTotal = (cart) => {
    let total = 0;
    cart?.map((item)=>{
     total = total + item.valor * item.cantidad   
    })
    return total;
};



export const actualizarItem = (cart, id, cantidad)=>{
    let aux = []
    const cartAux = cart?.map( (elemento) => {
        if(elemento.id === id){
            if(cantidad !=0){
                aux = [...aux, {...elemento, cantidad: cantidad}]
            }
        }
        else{
            aux = [...aux, elemento]
        }
    })

    return aux
}


export const agregarItem = (cart, item, cont) => {
    let flag = false;
    const cartAux = cart?.map( (elemento) => {
        if(elemento.id === item.id){
            flag = true;
            return {...elemento, cantidad: elemento.cantidad + cont}
        }
        else{
            return elemento
        }
    })

    if (!flag){
        const itemAux = {
            id: item.id,
            idProducto: item.id,
            cantidad: cont,
            variaciones: null,
            valor: item.precio,
            miniatura: item.miniatura,
            nombre: item.nombre
        };
        return [...cart, itemAux];}
    return cartAux;
};

export const cantidadProductos = (cart) => {
    let cont=0
    cart?.map( (item) => {
        cont = item.cantidad + cont;
    })

    return cont;
}

export const getIdVariacion = (producto, variacion, eleccion) => {
    let id = 0;
    //console.log(producto);
    producto.variaciones?.map( (elemento) => {
        if (elemento.variacion === variacion){
            elemento.tipo_variacion?.map( (elemento2) => {
                if (elemento2.tipo_variacion === eleccion){
                    id = elemento2.id;
                }
            })
        }
    })

    return id;
}
