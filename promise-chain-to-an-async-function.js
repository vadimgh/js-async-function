function processData(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(task);
    }, 500);
  })
}

function processAllData() {
  return processData('processed data')
    .catch(() => processData('processed data after fail'))
    .then(() => processData('processed all data'))
}

// processAllData();

async function asyncProcessAllData() {
  try {
    await processData('processed data');

    await processData('processed all data');
  } catch(err) {
    processData('processed data after fail')
  }
}

asyncProcessAllData();