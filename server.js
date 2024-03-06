const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sync sequelize models to the database
const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Database synced successfully');
        // then turn on the server
        startServer();
        console.log('Server successfully started');
    } catch (error) {
        console.error('Error syncing database: ', error);
    }
};

const startServer = () => {
    const app = express();
    // Set up Handlebars.js engine with custom helpers
    const hbs = exphbs.create({ helpers });
    const sess = {
        secret: 'Super secret secret',
        cookie: {
            maxAge: 300000,
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
        },
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize
        })
    };

    app.use(session(sess));

    // Inform Express.js on which template engine to use
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

    // middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));

    // logger
    app.use((req, res, next) => {
        req.time = new Date(Date.now()).toString();
        console.log(req.method, req.hostname, req.path, req.time);
        next();
    });
    // turn on routes
    app.use('/', routes);
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

syncDatabase();