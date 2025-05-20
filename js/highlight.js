const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation ul li a");
const nSections = 3

let sectionTops = []

sections.forEach((section, index) => {
    sectionTops[index] = section.offsetTop
});

document.addEventListener("scroll", () => {
    let currentSection = "";
    
    // Iterate through each section to find which one is in view
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (index == nSections - 1 && scrollY >= sectionTops[index]) {
            currentSection = section.getAttribute("id");
        }
        else if (scrollY >= sectionTops[index] && scrollY <= sectionTops[index+1]) {
            currentSection = section.getAttribute("id");
        }
    });

    // Highlight the navigation link corresponding to the current section
    navLinks.forEach(link => {
        link.classList.remove("active");  
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active"); 
        }
    });
});
