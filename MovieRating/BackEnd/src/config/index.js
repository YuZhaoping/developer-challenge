
export default {
  server: {
    port: process.env.PORT || '4000'
  },
  cors: {
    origin: 'http://localhost:3000'
  },
  mongodb: {
    url: process.env.MONGODB_URL || 'mongodb://test:test123@localhost:27017/testdb',
    cleanOnStart: true
  }
};
