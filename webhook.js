const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
//mewmeowhiiiiiiiiiii
const meow = 50;
console.log(meow)


const app = express();
const PORT = 3000;  // Or any port you configured in the webhook

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const payload = req.body;

    // Optionally verify the payload secret here

    if (payload.ref === 'refs/heads/main') {  // Change 'main' to your branch name if necessary
        exec('/path/to/your/app/your-repo/deploy.sh', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    }

    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Webhook listener is running on port ${PORT}`);
});
