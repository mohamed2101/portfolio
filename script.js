document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace("#", "");
            showSection(targetId);
        });
    });

    // Scroll to section function for buttons
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    }


    // Typewriter effect
    const textArray = ["Computer Science Student", "Project Manager", "Business Analyst", "IT Consultant", "Scrum Master", "Product Owner", "Systems Analyst", "Data Analyst"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000;
    const typewriterElement = document.getElementById('typewriter');

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, newTextDelay);

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active', 'fadeIn');
            section.style.display = 'none';
        });
    
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'flex';
            targetSection.classList.add('active', 'fadeIn');
        }
    }
    
    // Show the home section by default
    showSection('home');

    function showSkills(skillType) {
        var hardSkills = document.getElementById('hard-skills');
        var softSkills = document.getElementById('soft-skills');
    
        if (skillType === 'hard') {
            softSkills.classList.remove('fadeIn');
            setTimeout(() => softSkills.style.display = 'none', 500); // Hide after fadeOut
            hardSkills.style.display = 'flex';
            hardSkills.classList.add('fadeIn');
        } else if (skillType === 'soft') {
            hardSkills.classList.remove('fadeIn');
            setTimeout(() => hardSkills.style.display = 'none', 500); // Hide after fadeOut
            softSkills.style.display = 'flex';
            softSkills.classList.add('fadeIn');
        }
    }

    // Attach event listeners to skill type buttons
    const softSkillsBtn = document.getElementById('soft-skills-btn');
    const hardSkillsBtn = document.getElementById('hard-skills-btn');

    if (softSkillsBtn) {
        softSkillsBtn.addEventListener('click', function() {
            showSkills('soft');
        });
    }

    if (hardSkillsBtn) {
        hardSkillsBtn.addEventListener('click', function() {
            showSkills('hard');
        });
    }

    // Add event listeners for the homepage buttons
    const aboutMeBtn = document.querySelector('button[data-section="about"]');
    const contactMeBtn = document.querySelector('button[data-section="contact"]');

    if (aboutMeBtn) {
        aboutMeBtn.addEventListener('click', function() {
            showSection('about');
        });
    }

    if (contactMeBtn) {
        contactMeBtn.addEventListener('click', function() {
            showSection('contact');
        });
    }
});
