var dateDiffInDays = function (date1, date2) {
  //   write your code here
	    const utcDate1 = Date.UTC(...parseDate(date1));
    const utcDate2 = Date.UTC(...parseDate(date2));

    // Calculate the difference in milliseconds between the two dates
    const timeDifference = utcDate2 - utcDate1;

    // Convert the difference to days by dividing by the number of milliseconds in a day
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
