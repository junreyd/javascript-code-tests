const isPalindrome = (word) => {
	// TODO: implement this function
	// throw "Not implemented";
	var rep = /[^A-Za-z0-9]/g;
	word = word.toLowerCase().replace(rep, '');
	var lngth = word.length;
	for (var i = 0; i < lngth/2; i++) {
	  if (word[i] !== word[lngth - 1 - i]) {
		  return false;
	  }
	}
	return true;
}

// isPalindrome('racecar') === true;
// isPalindrome('eye') === true;
// isPalindrome('never odd or even') === true;
// isPalindrome('nope') === false;

const formatDate = (date) => {
	// TODO: implement this function
	// throw "Not implemented";
	var d = new Date(date),
	month = '' + (d.getMonth() + 1),
	day = '' + d.getDate(),
	year = d.getFullYear();

	if (month.length < 2) 
		month = '0' + month;
	if (day.length < 2) 
		day = '0' + day;

	return [year, month, day].join('');
}

// formatDate('12/31/2018') === '20181231';
// formatDate('01/30/2018') === '20180130';
// formatDate('12/1/2018') === '20181201';
