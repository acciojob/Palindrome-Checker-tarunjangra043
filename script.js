function palindrome(str){
	    const normalizedStr = str
        .toLowerCase();
        .replace(/[^a-z0-9]/g, ''); 

    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}
module.exports = palindrome
