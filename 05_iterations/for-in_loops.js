const myObj = {
     js : 'JavaScript',
     java : 'Java',
     py : 'C++',
     rb : 'Ruby',
     swift : 'Swift By Apple'
}

//print all the keys
for (const keys in myObj) {
    // console.log(keys);
}

for (const key in myObj) {
    // console.log(`${key} is shortcut of ${myObj[key]}`);
}
//Object iteration is complete

//Let's See how it works for arrays

const arr = ['js', 'py', 'cpp', 'java', 'swift']

for (const key in arr) {
//    console.log(key);  //This prints only the key/index of the array and not the value
}

for(const key in arr) {
    console.log(arr[key]);
}

/**Note: Maps cannot be iterated using for-in loop */