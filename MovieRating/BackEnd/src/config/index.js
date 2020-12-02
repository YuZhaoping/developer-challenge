
export default {
  server: {
    port: process.env.PORT || '4000'
  },
  cors: {
    origin: 'http://localhost:3000'
  },
  mockdb: {
    enabled: process.env.ENABLE_MOCK_DB || true
  },
  mongodb: {
    url: process.env.MONGODB_URL || 'mongodb://test:test123@localhost:27017/testdb',
    cleanOnStart: true
  },
  ethereum: {
    // If using the kaleido agent, set it as 'kaleido'
    agent: process.env.ETHEREUM_AGENT || 'mock'
  }
};
