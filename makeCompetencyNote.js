function getCompetencies(row, headers) {
    let tdArray = Array.from(row.getElementsByTagName('td'));
    let compString = "";
    for (var i = 1; i < tdArray.length; i++) {
        compString += tdArray[i].innerText === '--' ? "" : headers[i+1] + ": " + tdArray[i].querySelector('.percent').innerText + "\n";
        console.log(compString);
    }
    return compString;
}

function fillOneComment(row, headerText) {
	let commentTextArea = document.getElementById('keypad-notes-text-textarea');
	commentTextArea.dispatchEvent(new Event('input'));
	angular.element(document.getElementById('keypad-close-button')).click();
    row.querySelector('.keypad-link').click();

    let commentText = '<<Type Date>>' + getCompetencies(row, headerText) + commentTextArea.value;
    commentTextArea.value = commentText;
    commentTextArea.dispatchEvent(new Event('input'));
}

function makeCompetencyNote() {
    let studentNum = window.prompt("Enter student number");
	let allTrs = document.getElementsByTagName('tr');
	let headerText = Array.from(
		allTrs[0].getElementsByTagName('th'))
		.map(elem => elem.innerText.slice(0,1)
		);

	fillOneComment(allTrs[studentNum], headerText);	
}

makeCompetencyNote();
