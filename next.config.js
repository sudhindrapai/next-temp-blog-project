/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
const nextConfig = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sudhindraise",
        mongodb_password: "Sudhi123",
        mongodb_clusterName: "cluster0",
        mongodb_database: "my-site",
      },
    }
  }

  return  {
    reactStrictMode: true,
    env: {
      mongodb_username: "sudhindraise",
      mongodb_password: "Sudhi123",
      mongodb_clusterName: "cluster0",
      mongodb_database: "my-site",
    },
  };
}

module.exports = nextConfig;
