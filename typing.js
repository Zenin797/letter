document.addEventListener('DOMContentLoaded', function() {
    const text = "Now i want you to have ";
    const linkText = "this";
    const linkURL = "dashboard.html";
    const typingElement = document.getElementById('typing-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed by changing the timeout duration
        } else if (index < text.length + linkText.length) {
            const linkIndex = index - text.length;
            typingElement.innerHTML = text + `<a href="${linkURL}" target="_blank">${linkText.substring(0, linkIndex + 1)}</a>`;
            index++;
            setTimeout(type, 100);
        }
    }

    // Start typing after the wish1 animation ends (40s delay)
    setTimeout(() => {
        typingElement.style.opacity = 1; // Make the typing text visible
        type();
    }, 40000); // Adjust this delay to match the end of the wish1 animation
});
