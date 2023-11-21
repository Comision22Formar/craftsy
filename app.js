const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

const mainRoutes = require('./routers/main.routes');
const authRoutes = require('./routers/auth.routes');
const usersRoutes = require('./routers/users.routes');

app.use(express.static(path.join(__dirname,'public')));

/* rutas */
app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);



app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))