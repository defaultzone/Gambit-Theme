import properties from "../common/properties.js";

(function main() {
    for (let i = 0; i < properties.length; i++) {
        console.log(properties[i][0] + " = " + properties[i][1])
    }
})()