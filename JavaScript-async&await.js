function timer(time) {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(time);
        }, time);
    }));
}
/*
console.log('start');
timer(1000).then(time => {
    console.log('time: ' + time);
    return timer(time + 1000);
}).then(time => {
    console.log('time: ' + time);
    return timer(time + 1000);
}).then(time => {
    console.log('time: ' + time);
    console.log('end');
});
*/

async function run() {
    console.log('start');
    let time = await timer(1000);
    console.log('time: ' + time);
    time = await timer(time + 1000);
    console.log('time: ' + time);
    time = await timer(time + 1000);
    console.log('time: ' + time);
    console.log('end');
    return time;
}

// async는 평범한 함수를 프로미스를 리턴하는 비동기적인 함수로 만들어주는 키워드
async function run2() {
    console.log('parent start');
    var time = await run();
    console.log('time: ' + time);
    console.log('parent end');
}
console.log('parent parent start');
run2().then(() => {
    console.log('parent parent end');
});


