import pgp from 'pg-promise';

const driver = pgp();

const db = driver({
    user: 'postgres',
    password: '7I9i9s12!',
    host: 'localhost',
    port: 5432,
    database: 'digitown'
})

export default db;