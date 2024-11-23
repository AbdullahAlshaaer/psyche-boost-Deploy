function assessScore() {
    const score = parseInt(document.getElementById('score').value);
    let severity;
    let page;

    if (score < 0 || score > 27 || isNaN(score)) {
        alert('Please enter a valid score between 0 and 27');
        return;
    }

    if (score <= 4) {
        severity = 'minimal';
        page = 'minimal.html';
    } else if (score <= 9) {
        severity = 'mild';
        page = 'mild.html';
    } else if (score <= 14) {
        severity = 'moderate';
        page = 'moderate.html';
    } else if (score <= 19) {
        severity = 'moderately-severe';
        page = 'moderately-severe.html';
    } else {
        severity = 'severe';
        page = 'severe.html';
    }

    window.location.href = page;
}