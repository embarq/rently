const { app } = require('./dist/server');

app.listen(3000, () => console.log('Local SSR server started on http://localhost:3000/'));
