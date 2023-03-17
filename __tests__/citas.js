import Citas from "../js/classes/Citas";

describe('prboar la clase de citas', () => {
    const citas = new Citas();
    const id = Date.now();

    test('agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'panfilo',
            propietario: 'juan',
            telefono: '302',
            fecha: '34/96/1847',
            hora:'23:34',
            sintomas: 'dolor de panza'
        }

        citas.agregarCita(citaObj);
        //prueba
        expect(citas).toMatchSnapshot();
    });

    test ('actualizar cita', () => {
        const citaAtualziada = {
            id,
            mascota: 'dori el pez espada',
            propietario: 'pancrasio',
            telefono: '3029240942',
            fecha: '34/96/1847',
            hora:'23:34',
            sintomas: 'dolor de cornea xd'
        }

        citas.editarCita(citaAtualziada);

        expect(citas).toMatchSnapshot();
    })

    test('eliminar citas', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
})