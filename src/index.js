const config = require('./config/config');
require('./config/database');
const host = '0.0.0.0';
const app = require('./app');

app.listen(config.PORT, host, () => {
  console.log(`Server running in port ${config.PORT}`);
});
