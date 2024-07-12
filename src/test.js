let totalCount = 0;
const manualStopCount = 10;
const sleep = async (tc) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(tc, '12');
      resolve();
    }, 2000);
  });
};

const run = async () => {
  while (totalCount !== manualStopCount) {
    console.log('start');
    await sleep(totalCount);
    console.log('end');
    totalCount += 1;
  }
};

run();
