module.exports = {
    "extends": ['@uwhealth'],
    "plugins": ["@uwhealth/environments"],
    "root": false,
    "overrides": {
        "files": ["*.js", "*.html"],
        "env": {
            "@uwhealth/environments/t4": true,
            "@uwhealth/environments/rhino": true,
            "@uwhealth/environments/webpack": true
        }
    }
}
