function dateDifference(date1, date2, resultElementId) {
    // Parse the input strings to Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    var dateDifferenceYears = d1.getFullYear() - d2.getFullYear();
    var dateDifferenceMonths = d1.getMonth() - d2.getMonth();
    var dateDifferenceDays = d1.getDate() - d2.getDate();

    // Adjust for negative days
    if (dateDifferenceDays < 0) {
        dateDifferenceMonths--;
        const lastMonthDays = new Date(d1.getFullYear(), d1.getMonth(), 0).getDate();
        dateDifferenceDays += lastMonthDays;
    }

    // Adjust for negative months
    if (dateDifferenceMonths < 0) {
        dateDifferenceYears--;
        dateDifferenceMonths += 12;
    }

    // Display the result in the specified element
    document.getElementById(resultElementId).innerHTML =
        dateDifferenceYears + ' years, ' + dateDifferenceMonths + ' months, and ' + dateDifferenceDays + ' days';
}