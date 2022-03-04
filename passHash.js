const bcript = require('bcrypt');

async function hashPassword() {
    const myPassword = 'admin123'
    const hash = await bcript.hash(myPassword, 10);
    console.log(hash)

}

hashPassword(); 