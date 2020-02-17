let apiUrls = {
    baseUrl: 'https://rtdb-astm-dev.azurewebsites.net/apiconnector',
    localBaseUrl: 'https://astm-qa.icreontech-dev.com/RTDXToken',
    // baseUrl: process.env.REACT_APP_API_URL,
    // localBaseUrl: process.env.REACT_APP_API_URL,
    roster: {
        accessToken: {
            url: '/GetADAccessToken',
            version: ''
        }
    }
}

function getApiUrl(key, name) {
    let url
    if (name === 'accessToken' && apiUrls.localBaseUrl != null) {
        if (apiUrls.local[key] && apiUrls.local[key][name]) {
            url = apiUrls.localBaseUrl + apiUrls.local[key][name]['version'] + apiUrls.local[key][name]['url']
        }
    } else {
        if (apiUrls.baseUrl != null) {
            if (apiUrls.live[key] && apiUrls.live[key][name]) {
                url = apiUrls.baseUrl + apiUrls.live[key][name]['version'] + apiUrls.live[key][name]['url']
            } else {
                if (apiUrls.local[key] && apiUrls.local[key][name]) {
                    url = apiUrls.localBaseUrl + apiUrls.local[key][name]['version'] + apiUrls.local[key][name]['url']
                }
            }
        } else {
            if (apiUrls.local[key] && apiUrls.local[key][name]) {
                url = apiUrls.localBaseUrl + apiUrls.local[key][name]['version'] + apiUrls.local[key][name]['url']
            }
        }
    }
    return url;
}

export default getApiUrl