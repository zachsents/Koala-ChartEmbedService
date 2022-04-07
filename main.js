import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom"

const CHART_BASE_URL = 'https://charts.mongodb.com/charts-project-0-fpjbx'
// const CHART_ID = '62133b23-c099-41fc-8008-7a2fca3dde21'

// get user from URL params
const urlParams = new URLSearchParams(window.location.search)
const user = urlParams.get('user')
const chartId = urlParams.get('chart')
user ? console.debug('Filtering by user:', user) : console.debug('No user provided. Showing all data')

// initialize Mongo Charts SDK
const sdk = new ChartsEmbedSDK({ baseUrl: CHART_BASE_URL })

// Create chart
const chart = sdk.createChart({
    chartId,
    height: urlParams.get('height') || '600px',
    // if user is provided, filter, otherwise, don't
    filter: user ? {
        user: { '$eq': user }
    } : {}
})

// show chart
chart.render(document.getElementById("app"))
