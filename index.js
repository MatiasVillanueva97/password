const _ = require('lodash');

function combine(password) {

    let charPassword = password.split("");
    console.log('Cantidad password ', charPassword.length)

    let subList = []

    let pos = 0;

    for (var i = 0; i < charPassword.length; i++) {

        for (var j = 0; j < charPassword.length; j++) {

            let sub = _.slice(charPassword, i, j + 1)
            if (!_.isEmpty(sub)) {

                subList[pos++] = sub

            }


        }

    }

    let numbers = subList.map(x => countDisctin(x))
    console.log(_.sum(numbers))

}


function countDisctin(stringList) {
    return _.uniq(stringList).length;
}
let dateStart = new Date();
combine("good")
let dateFinish = new Date();
console.log(dateFinish - dateStart + 'ms')
