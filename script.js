// Smooth scroll function for buttons
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
    });
}
