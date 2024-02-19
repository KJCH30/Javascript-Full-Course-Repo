//Immediately Invoked Function Expressions (IIFE)

(function dbCon(){
    //named iife
    console.log("DB CONNECTED");
}) (); //this is the syntax of iife

//Whenever we write two consecutive iife while coding, we need to use a separator ";" to separate the two functions. Otherwise, error is thrown at the terminal

( (dbName) =>{
    //unnamed iife
    console.log(`"DB is connected to ${dbName}"`);
}) ("MongoDB")