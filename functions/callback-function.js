function greet (f_name, callback) {
    callback(f_name);
}

greet("Arjun", function (f_name) {
    console.log("Hello", f_name);
    
})