import pgp from 'pg-promise';

const driver = pgp();

const db = driver({
    user: 'agndiznmrsbfpy',
    password: 'c38c326d6c04a0d0d9fef51336395034bebd6ffa8d59eae13b2141194dfa313b',
    host: 'ec2-23-20-208-173.compute-1.amazonaws.com',
    port: 5432,
    database: 'der3fp10p19q5m'
})

export default db;