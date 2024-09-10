const fs = require('fs')

/* VUE_APP_BASE_URL=https://192.168.1.9:8080/
VUE_APP_BASE_API=https://192.168.1.9:3000 */

module.exports = {
    devServer: {
        /* https: {
          key: fs.readFileSync('./cert/certificate.key'),
          cert: fs.readFileSync('./cert/certificate.crt'),
        }, */
        public: `${process.env.VUE_APP_BASE_URL}`
    }
}