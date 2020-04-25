# javascript-code-tests
JavaScript code test by #Bastian Lauer



# Javascript Code Tests

Please complete these exercises by cloning this project locally, and emailing us the modified files.

The bare minimum is that the requirements under minimum acceptance criteria are met.

### 1. Palindrome

A palindrome is a word that reads the same backward or forward.

Write a function that checks if a given word is a palindrome. Character case should be ignored, non alphanumeric characters should also be ignored.

For example, `isPalindrome("Racecar")` should return `true`, resulting in "racecar", which is a palindrome since it reads the same backward and forward.

Minimum acceptance criteria:
```
// isPalindrome('racecar') === true;
// isPalindrome('eye') === true;
// isPalindrome('never odd or even') === true;
// isPalindrome('nope') === false;
```

### 2. Date Formatting

Write a function that converts user entered date formatted as `M/D/YYYY` to a format required by an API (`YYYYMMDD`). The parameter "date" and the return value are strings. 

For example, it should convert user entered date `12/31/2014` to `20141231` suitable for the API.

Minimum acceptance criteria:
```
// formatDate('12/31/2018') === '20181231';
// formatDate('01/30/2018') === '20180130';
// formatDate('12/1/2018') === '20181201';
```

