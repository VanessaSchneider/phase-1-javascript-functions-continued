
function saturdayFun(activity = "roller-skate") {

    return `This Saturday, I want to ${activity}!`;

}

saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {return `This Monday, I will ${activity}.`}




function wrapAdjective(style = "*") {
    const innerFunction = function (adj = "special") {
      return `You are ${style}${adj}${style}!`
}

return innerFunction;}

undefined
wrapAdjective ("%")("a dedicated programmer");