
export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    // if (req.query.secret !== 'xd') {
    //   return res.status(401).json({ message: 'Invalid token' })
    // }
  
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      await res.revalidate(req.query.page)
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }

// export default async function revalidate(req, res) {
//     // Check for secret to confirm this is a valid request
//     // if (req.query.secret !== 'xd') {
//     //   return res.status(401).json({ message: 'Invalid token' })
//     // }
  
//     try {
//       // this should be the actual path not a rewritten path
//       // e.g. for "/blog/[slug]" this should be "/blog/post-1"
//       //process.setMaxListeners(0);
//       await res.revalidate('/');
//       await res.revalidate('/tienda');
//       await res.revalidate('/carrito');

//       const resCategorias = await fetch(getCategoriasUrl);
//       const categorias = await resCategorias.json();
  
//       categorias.map(async(item) => {
//           const id = item.categoria.toString();
//           await res.revalidate('/categoria/'+id);
//       });

//       const resProductos = await fetch(getProductosHomeUrl);
//       const productos = await resProductos.json();

//       productos.map(async(item) => {
//         const id = item.id.toString();
//         await res.revalidate('/producto/'+id);
//         //console.log('/producto/'+id)
//       })
      

//       return res.json({ revalidated: true })
//     } catch (err) {
//       // If there was an error, Next.js will continue
//       // to show the last successfully generated page
//       return res.status(500).send('Error revalidating')
//     }
//   }