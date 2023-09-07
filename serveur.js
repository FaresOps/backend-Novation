const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const verifyToken = require('./verifytoken');

const app = express();


app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
// app.use(verifyToken);


//final API Dashbord
const DashboardRouter = require('./routes/Dashboard');
app.use('/dashboard', DashboardRouter);

const PieRouter = require('./routes/pie');
app.use('/pie', PieRouter);

const ContactRouter = require('./routes/contacts');
app.use('/contact', ContactRouter);
const Contact = require('./models/contact');

const DegreebicRouter = require('./routes/degreebics');
app.use('/degreebics', DegreebicRouter);
const Degreebics = require('./models/degreebic');

const DegreecostRouter = require('./routes/degreecosts');
app.use('/degreecost', DegreecostRouter);
const Degreecost = require('./models/degreecost');

const DegreekpiRouter = require('./routes/degreekpis');
app.use('/degreekpi', DegreekpiRouter);
const Degreekpi = require('./models/degreekpi');


//API Mobile APP


const PanninghorizonRouter = require('./routes/planninghorizons');
app.use('/Panninghorizon', PanninghorizonRouter);
const Panninghorizon = require('./models/planninghorizon');



const KpicategorieRouter = require('./routes/kpicategories');
app.use('/kpicategorie', KpicategorieRouter);
const Kpicategorie = require('./models/kpicategorie');



const AnnualrevenueRouter = require('./routes/anualrevenues');
app.use('/annualrevenue', AnnualrevenueRouter);
const Annualrevenue = require('./models/annualrevenue');

const ScopeRouter = require('./routes/scopes');
app.use('/Scope', ScopeRouter);
const Scope = require('./models/scope');

const CompanyRouter = require('./routes/companies');
app.use('/company', CompanyRouter);
const Company = require('./models/company');

const IndusGroupRouter = require('./routes/indusgroups');
app.use('/indusgroup', IndusGroupRouter);
const IndusGroup = require('./models/indusgroup');

const DimensionRouter = require('./routes/dimensions');
app.use('/dimension', DimensionRouter);
const Dimension = require('./models/dimension');


const UserRouter = require('./routes/auth');
app.use('/auth', UserRouter);
const User = require('./models/user');

mongoose.connect('mongodb+srv://fares:fares@farescluster.ys3ggbm.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'NOVATIONCITY',
})
    .then(() => {
        console.log('connection database is ready');
    })
    .catch((err) => {
        console.log(err);
    })



const port = 3000;
//const ipAddress = '192.168.1.16'; // Replace with your PC's IPv4 address
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});
