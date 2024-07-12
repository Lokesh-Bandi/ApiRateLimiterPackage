import ApiRateLimiter from './ApiRateLimiter.js';

const executeAPI = (tc) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tc  + '  -- tinnu');
    }, 0);
  }) // API Callback
};

const rateLimiterInstance = new ApiRateLimiter(executeAPI, {
  maxCallsPerSecond: 10,
  // maxCallsPerMinute: 100,
  // maxCallsPerHour: 150,
  maxCallsPerDay: 200,
});

const res = await rateLimiterInstance.startRateLimiter();
console.log(res);
