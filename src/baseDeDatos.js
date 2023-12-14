import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://admin:i57dA3DFAhS8DJFT@carmobu.yebxvn0.mongodb.net/?retryWrites=true&w=majority'
  )
  .then((dato) => console.log('Camino feliz, conectado a la base de datos.'))
  .catch((error) =>
    console.log('Camino triste, no se pudo conectar a la base de datos.')
  );