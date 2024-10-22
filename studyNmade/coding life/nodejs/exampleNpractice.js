console.log(1+2);
console.log('1'+'1');
console.log('when i was a young boy my father took me in to the city. to see a marching band. he said son when you grow up would you be the savior of the broken.'.length);

var a = 1;
console.log(a);
a = 2;
console.log(a);
// 1 = 2; comment

var name = 'k8805'; //그냥 엔터치면 오류남. \n을 통해 줄바꿈 가능
var letter = 'Dear '+name+'\n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+name+' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. '+name;

//해당 방법으로 대체. -> template literal***
//Grave accent로 묶음.
var letter = `Dear ${name} 

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud ${1+1} exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ${name}`;

console.log(letter);