module.exports = {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'gamesloja',
      database : 'loja'
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './database/migrations',
        loadExtensions: ['.cjs', '.mjs'],
        extension: 'cjs',
      },
      seeds: {
        directory: './database/seeds',
        loadExtensions: ['.cjs', '.mjs'],
        timestampFilenamePrefix: true,
        sortDirsSeparately: true,
        recursive: true,
        extension: 'cjs'

      },
      pool: {
        min: 0,
        max: 5,
      }
    }