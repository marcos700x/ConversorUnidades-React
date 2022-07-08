export const Longitud = [
    {
        nombre: 'Micrometros',
        factores:{
            Micrometros: 1,
            Milimetros: 0.001,
            Centimetros: 0.0001,
            Metros: 0.000001,
            Kilometros: 0.000000001,
        }
    },
    {
        nombre: 'Milimetros',
        factores: {
            Micrometros: 1000,
            Milimetros: 1,
            Centimetros: 0.1,
            Metros: 0.001,
            Kilometros: 0.000001,
        }
    },
    {
        nombre: 'Centimetros',
        factores: {
            Milimetros: 10,
            Centimetros: 1,
            Metros: 0.01,
            Kilometros: 0.00001,
        }
    },
    {
        nombre: 'Metros',
        factores: {
            Milimetros: 1000,
            Centimetros: 100,
            Metros: 1,
            Kilometros: 0.001,
        }
    },
    {
        nombre: 'Kilometros',
        factores: {
            Milimetros: 1000000,
            Centimetros: 100000,
            Metros: 1000,
            Kilometros: 1,
        }
    },

]