import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getCarruselUrl } from "@/helpers/URL";
import useResolucion from '@/hooks/useResolucion';

import Image from "next/image";
import { useRouter } from "next/router";



export default function Carrusel({imagenes}){
  const { width, height } = useResolucion();
  const [imagen , setImagen] = useState();
  const [ancho, setAncho] = useState(880);
  const [largo, setLargo] = useState(440);

  const router = useRouter();



  useEffect( ()=>{
    //console.log(width);
    if (width>1200){
      setImagen('xl');
      setAncho(2000);
      setLargo(500);
    }
    else if (width>800){
      setImagen('l');
      setAncho(1600);
      setLargo(800);
    }
    else if (width>=580){
      setImagen('m');
      setAncho(1200);
      setLargo(600);
    }
    else if (width<580){
      setImagen('s');
      setAncho(880);
      setLargo(440);
    }
  },[width])


  useEffect( () =>{
    if (width>1200){
      setImagen('xl');
      setAncho(2000);
      setLargo(500);
    }
    else if (width>=800){
      setImagen('l');
      setAncho(1600);
      setLargo(800);
    }
    else if (width>=580){
      setImagen('m');
      setAncho(1200);
      setLargo(600);
    }
    else if (width<580){
      setImagen('s');
      setAncho(880);
      setLargo(440);
    }
  },[imagenes]) 

  
  return (
    <Carousel style={{}}>

      {imagenes?.map((item) => { 
        return (
          <Carousel.Item key={item.id} className='text-center' onClick={(e)=> {e.preventDefault(); router.push(item.url);}} style={{cursor: 'pointer'}} >
            {item[imagen]?
            <Image
              className="img-fluid imagen-noarrastrable"
              src={item[imagen]}
              alt={item.titulo}
              style={{}}
              width={ancho}
              height={largo}
              quality={75}
              priority
              placeholder="blur"
              blurDataURL={item.blur}
            />   
            :null}    
          </Carousel.Item> 
      )
      })}
    

    </Carousel>
  );
}

