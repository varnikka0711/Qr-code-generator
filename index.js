import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            name: "customURL",
            message: "Enter your URL:"
        },
    ])
    .then(answers=>{
        const url=answers.customURL;
        const qr_image=qr.image(url, {type: 'png'});
        qr_image.pipe(fs.createWriteStream(`${url}.png`));
        fs.writeFile("URL.txt", url, (err)=>{
            if (err) throw err;
            console.log("File saved successfully");
        })


    });