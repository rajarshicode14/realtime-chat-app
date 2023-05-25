
const generateUsername = (email) => {
    const username = email.split('@')[0]; 
    const randomIntegers = Math.floor(1000 + Math.random() * 9000); 
    const uniqueString = `${username}${randomIntegers}`.toLowerCase(); 
    console.log(uniqueString);
    return uniqueString;
}

export default generateUsername;