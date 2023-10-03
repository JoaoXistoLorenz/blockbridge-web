const fs = require('fs')

module.exports = {
    devServer: {
        https: {
          key: fs.readFileSync('./cert/certificate.key'),
          cert: fs.readFileSync('./cert/certificate.crt'),
        },
        public: 'https://192.168.1.5:8080/'
    }
}