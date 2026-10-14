const crypto = require('crypto');
function rolldice() {
    return crypto.randomInt(1,7);
};
for (let i = 1; i<=6; i++) {
    console.log('dice roll' +i+ ':', rolldice());
}