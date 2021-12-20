

//Phone Number========================================

let phoneNumber = "+8801860022235"
let phonePattan = /^(01|8801|\+8801)\d{9}/
let phoneMatch = phoneNumber.match(phonePattan);
let phoneSerch = phoneNumber.search(phonePattan);
let PhoneReplace =phoneNumber.replace(phonePattan, '0571858601');
let PhoneTest = phonePattan.test(phoneNumber);
console.log(`Your Phone NUmber = ${phoneNumber} This is = ${PhoneTest}`);
console.log(phoneMatch,phoneSerch,PhoneReplace,PhoneTest);

//Email ===================================================

let email = "mdriday256@d-ar.az.com";
let emailPattan = /^[a-z0-9\._]*@[a-z0-9-]*\.[a-z0-9-\.]*$/
let emailMatch = email.match(emailPattan);
let emailSerch = email.search(emailPattan);
let emailReplace =email.replace(emailPattan, 'admin@dot.com');
let emailTest = emailPattan.test(email);
console.log(` Your Email Adress = ${email}  E-mail Valadition ${emailTest} `);
console.log(emailMatch,emailSerch,emailReplace,emailTest);


//Passwoard=-==========================================

let pass ="Akji111554";
let passPattan =/^[(A-Z)][(a-z0-9@#$%&\*)]{8,20}$/
let passMatch = pass.match(passPattan);
let passSerch =pass.search(passPattan);
let passReplace =pass.replace(passPattan, 'Afrweer54$');
let passTest = passPattan.test(pass);
console.log(` Your Email Adress = ${pass}E-mail Valadition ${passTest} `);
console.log(passMatch,passSerch,passReplace,passTest);

//User Name=-==========================================

let userName = "abu1554-4";
let userNamePattan = /^[a-z0-9-_]{6,14}$/
let userNameMatch = userName.match(userName);
let userNameSerch = userName.search(userName);
let userNameReplace = userName.replace(userName, "ahuifp415");
let userNameTest = userNamePattan.test(userName);

console.log(userNameMatch, userNameReplace, userNameTest,userName);
