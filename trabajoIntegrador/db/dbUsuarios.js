let express = require('express')
let dataU = {
    usuarios: [
        {
            id: 1,
            usuario: 'Tefa123',
            email: 'cavallos@udesa.edu.ar',
            fechaNacimiento: '2003-07-21',
            numeroDocumento: 44895188,
            foto: 'fotoPerfilTefa.png',
            seguidores: 12
        },
        {
            id: 2,
            usuario: 'Pepo123',
            email: 'planusmartinez@udesa.edu.ar',
            fechaNacimiento: '2004-12-08',
            numeroDocumento: 46293905,
            foto: 'fotoPerfilPepo.png',
            seguidores: 13,
        },
        {
            id: 3,
            usuario: 'Messi123',
            email: 'lionelmessi@gmail.com',
            fechaNacimiento: '1987-06-24',
            numeroDocumento: 18122022,
            foto: 'fotoPerfilMessi.png',
            seguidores: 10,
        },
        {
            id: 4,
            usuario: 'Scaloni123',
            email: 'scaloni@gmail.com',
            fechaNacimiento: '1978-05-16',
            numeroDocumento: 20122022,
            foto: 'fotoPerfilScaloni.png',
            seguidores: 22
        },
        {
            id: 5,
            usuario: 'Ivan123',
            email: 'idivinskymolina@udesa.edu.ar',
            fechaNacimiento: '2004-12-21',
            numeroDocumento: 46437670,
            foto: 'fotoPerfilIvan.png',
            seguidores: 11,
        },
    ],
};

module.exports = dataU;