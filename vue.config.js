const fs = require('fs')

module.exports = {
    devServer: {
        https: {
          key: fs.readFileSync('./cert/certificate.key'),
          cert: fs.readFileSync('./cert/certificate.crt'),
        },
        public: `${process.env.VUE_APP_BASE_URL}`
    }
}