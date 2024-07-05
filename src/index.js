import ApiRateLimiter from './ApiRateLimiter.js';

const executeAPI = () => {
  console.log('1'); // API Callback
};

const rateLimiterInstance = new ApiRateLimiter(executeAPI, {
  maxCallsPerSecond: 10,
  maxCallsPerMinute: 99,
  maxCallsPerHour: 150,
  maxCallsPerDay: 201,
});

rateLimiterInstance.startRateLimiter();
