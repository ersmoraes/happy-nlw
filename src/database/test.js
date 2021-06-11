const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db,
        {
            lat: "-24.5349585",
            lng: "-47.5777686",
            name: "Cantinho de Paz",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            whatsapp:"1234785965",
            images: [
                "http://127.0.0.1:3000/assets/img01.jpg",
                "http://127.0.0.1:3000/assets/img02.jpg"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 18h até 8h",
            open_on_weekends: '1'
        }
    )

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="3"')
    console.log(orphanage)

    // Deletar dado da tabela
    await db.run("DELETE FROM orphanages WHERE id = '4'")
})