const express =  require('express');
const cors =  require('cors');
const { dbConnection } = require('./database/config');
class Server {
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths= {
            carros:'/api/carros',
            admins:'/api/admins',
            pagos:'/api/detailsPayments',
            parkings:'/api/parkings',
            users:'/api/users'
        }
        this.conectarBD();
        this.middlewares();
        this.routes();
        //    localhost:3000/v1/sextoa/api/productos
        this.router.use('/v1/sextoa', this.app);
        this._express=  express().use(this.router)
    }
    async conectarBD(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use(this.paths.carros, 
            require('./routes/carros')
        ),
        this.app.use(this.paths.admins,
            require('./routes/admins')
        ),
        this.app.use(this.paths.pagos,
            require('./routes/detailsPayments')
        ),
        this.app.use(this.paths.parkings,
            require('./routes/parkings')
        ),
        this.app.use(this.paths.users,
            require('./routes/users')
        )

    }
    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}


module.exports =  Server;