const Prismic = require('prismic-javascript');

const runAsync = async () => {
    var apiEndpoint = "https://prismic-trial-dz.prismic.io/api/v2";
    var apiToken = "MTU3NTk5MzE3MDIyNi5YZS14TXhFQUFDQ29iMXdy.77-977-9XBrvv70L77-9S--_ve-_ve-_ve-_ve-_vTzvv71i77-9P--_ve-_ve-_vWbvv73vv73vv73vv70D77-977-9XBNl&state=I3Hvv717Se-_vRIW77-977-9Du-_ve-_vRIXWQ";
    var api = await Prismic.getApi(apiEndpoint, {
        accessToken: apiToken
    });
    var response = await api.query("");
    console.log(response);
};

runAsync()
    .catch(e => console.error(e));