
import app from '../src/server';
import request from 'supertest';


describe("Batería de pruebas para el servidor", () => {

    test("Servidor en endpoint /", async () => {
     
    // return await request(app)
    // .get('/')
    // .expect(200)
    // // .expect("Content-Type", "/text/")
    // .expect("Content-Type", /text/)
    // .then(response => {
    //     expect(response.text).toBe("Hola mundo al usuario m_munozn");
    // });
    // });
    return await request(app)
            .get('/')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola mundo al usuario m_munozn");
            });

    console.log("codigo a continuacion");
    

    });
 });
