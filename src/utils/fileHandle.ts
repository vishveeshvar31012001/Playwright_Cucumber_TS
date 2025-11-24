const fs = require('fs-extra')
    try {
        fs.ensureDir('test-output')
        fs.emptyDir('test-output')
    } catch (error) {
        console.log('File not created due to following issue/error', error)
    }

