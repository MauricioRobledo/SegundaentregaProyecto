import {options} from "../config/dbConfig.js";
import knex from "knex";

//instancia de la base de datos.
const dbmysql = knex(options.mariaDB);
const dbSqlite = knex(options.sqliteDB);

const createTables = async()=>{
    try {

        //Tablas MariaDB

        const tableProductsExists = await dbmysql.schema.hasTable("products");
        if(tableProductsExists){
            await dbmysql.schema.dropTable("products")
        }
        await dbmysql.schema.createTable("products",table=>{
            table.increments("id");
            table.string("title",40).nullable(false);
            table.string("price");
            table.string("thumbnail",100);
        });
        console.log("table products created successfully");
        dbmysql.destroy();

        const tableCartExists = await dbmysql.schema.hasTable("cart")
        if(tableCartExists){
            await dbmysql.schema.dropTable("cart")
        }
        await dbmysql.schema.createTable("cart",table=>{
            table.increments("id");
            table.string("timestamp").nullable(false);
            table.string("products").nullable(false)
        })
        console.log("Cart table created")

        //Tablas Sqlite


        const tablaProductosExiste = await dbSqlite.schema.hasTable("productos");
        if(tablaProductosExiste){
            await dbSqlite.schema.dropTable("productos");
        }
        //1.crear la tabla productos
        await databaseSqliteDb.schema.createTable("productos",table=>{
            table.increments("id");
            table.string("title",40).nullable(false);
            table.integer("price").nullable(false);
            table.string("thumbnail",200).nullable(false);
        });
        console.log("productos table created");

        const tableChatExists = await dbSqlite.schema.hasTable("chat");
        if(tableChatExists){
            await dbSqlite.schema.dropTable("chat")
        }
        await dbSqlite.schema.createTable("chat", table=>{
            table.increments("id");
            table.string("user",30);
            table.string("timestamp", 10);
            table.string("message",200);
        });
        console.log("chat table created");
        dbSqlite.destroy();


        const tablaCarritoExiste = await dbSqlite.schema.hasTable("carritos")
        if(tablaCarritoExiste){
            await dbSqlite.schema.dropTable("carritos")
        }
        await dbSqlite.schema.createTable("carritos",table=>{
            table.increments("id");
            table.string("timestamp").nullable(false);
            table.string("products").nullable(false)
        })
        console.log("Carritos table created")
        dbSqlite.destroy()
    } catch (error) {
        console.log(error)
    }
}

createTables();