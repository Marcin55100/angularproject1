const PROXY_CONFIG = [
  {
    context: [
      "/footballresults",
    ],
    target: "https://localhost:7252",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
