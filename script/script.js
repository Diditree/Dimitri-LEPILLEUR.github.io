
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("zzz");
            entry.target.classList.add('show');
            // } else {
            //     entry.target.classList.remove('show');
            // }
    }})
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden-right');
hiddenElements.forEach((el) => observer.observe(el));