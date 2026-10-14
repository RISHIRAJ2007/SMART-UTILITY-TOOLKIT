const fs = require("fs");
const fileName = "FILE.txt";
console.log("Creating File...");
fs.writeFile(fileName, "Hello", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }
    console.log("File Created");

    console.log("Reading File");
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }
        console.log(data);

        fs.appendFile(fileName, "\nhii rishi", (err) => {
            if (err) {
                console.log("Error updating file");
                return;
            }
            console.log("File Updated");

            fs.readFile(fileName, "utf8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file");
                    return;
                }
                console.log(updatedData);

                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }
                    console.log("File Deleted");
                });
            });
        });
    });
});