function waitForSomeTime(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log('resolved');
    }, time);
  });
}

async function asyncCall() {
  console.log('before resolving');
  await waitForSomeTime();
  console.log('after resolving');
}

asyncCall();

async function asyncCall1() {
  await waitForSomeTime();
  await waitForSomeTime();
  await waitForSomeTime();
}

asyncCall1();

async function asyncCall2() {
  try {
    await waitForSomeTime();
  } catch (err) {
    console.log(err);
  }
}

asyncCall2();

// await waitForSomeTime();

const foo = async () => 1;

const foo1 = foo();

console.dir(foo1);
