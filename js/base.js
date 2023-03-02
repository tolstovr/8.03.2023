// responsive nav
$("#nav_toggle").click(function() {
    $("#nav_toggle").toggleClass("bi-list");
    $("#nav_toggle").toggleClass("bi-box-arrow-left");
    $(".nav-content").toggleClass("shown");
});

// scroll animation
function element_visible(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('shown');
        }
    })
};

let options = {threshold: [0.15]};
let observer = new IntersectionObserver(element_visible, options);
let elements = $(".fade-left");

for (let elm of elements) {
    observer.observe(elm);
};