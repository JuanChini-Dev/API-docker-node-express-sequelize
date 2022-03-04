const bcript = require('bcrypt');

async function verifyPassword() {
    const myPassword = 'admin123'
    const hash = '$2b$10$X8IRA6/CHk6gbZ/Qwl99z.d5y9g2wj/ccBuq3KgsMBg1EBN5KdtP6'
    const isMatch = await bcript.compare(myPassword, hash);
    console.log(isMatch)

}

verifyPassword(); 