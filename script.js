//hamburger menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach( button => button. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//grid modules layout
const quickViewButtons = document.querySelectorAll('[data-quick-view]');
const closeButtons = document.querySelectorAll('[data-close]');
const fullwidthCards = document.querySelectorAll('.fullwidth');
let toggle; // expanding <button>.
let toggleParent; // <grid item>.
let fullwidth; // Fullwidth card to be "injected".

const openQuickView = (toggle, toggleParent, fullwidth) => {
    toggle.setAttribute('aria-expanded', 'true');
    toggleParent.classList.toggle('is-selected');
    fullwidth.classList.toggle('is-hidden');
    // Make fullwidth card keyboard focusable.
    fullwidth.setAttribute('tabIndex', '0');
};

const closeQuickView = (toggle, toggleParent, fullwidth) => {
    toggle.setAttribute('aria-expanded', 'false');
    toggleParent.classList.toggle('is-selected');
    fullwidth.classList.toggle('is-hidden');
    fullwidth.removeAttribute('tabIndex');
};

quickViewButtons.forEach(quickView => {
    // Add appropriate ARIA attributes for "toggle" behaviour.
    fullwidth = quickView.parentElement.nextElementSibling;
    quickView.setAttribute('aria-expanded', 'false');
    quickView.setAttribute('aria-controls', fullwidth.id);

    quickView.addEventListener('click', (e) => {
        toggle = e.target;
        toggleParent = toggle.parentElement;
        fullwidth = toggleParent.nextElementSibling;

        // Open (or close) fullwidth card.
        if (toggle.getAttribute('aria-expanded') === 'false') {
            // Do we have another fullwidth card already open? If so, close it.
            fullwidthCards.forEach(fullwidthOpen => {
                if (!fullwidthOpen.classList.contains('is-hidden')) {
                    toggleParentOpen =
                        fullwidthOpen.previousElementSibling;
                    toggleOpen = toggleParentOpen.querySelector(
                        '[data-quick-view]'
                    );

                    closeQuickView(toggleOpen, toggleParentOpen, fullwidthOpen);
                }
            });

            openQuickView(toggle, toggleParent, fullwidth);
        } else {
            closeQuickView(toggle, toggleParent, fullwidth);
        }
    });
});

closeButtons.forEach(close => {
    close.addEventListener('click', (e) => {
        fullwidth = e.target.parentElement;
        toggleParent = e.target.parentElement.previousElementSibling;
        toggle = toggleParent.querySelector('[data-quick-view]');

        closeQuickView(toggle, toggleParent, fullwidth);
        toggle.focus(); // Return keyboard focus to "toggle" button.
    });
});


//fade-in effect 
let elementsArray = document.querySelectorAll(".module-grid, .introduction, .statistics, #happy-ending, .module-tx");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();

//submit button effect
function submitForm(){
    var Name = document.getElementById("name");
    var Email = document.getElementById("email");
    var Company = document.getElementById("company");
    var Role = document.getElementById("role");
    var Trafore = document.getElementById("howyouhear");
    var msg = document.getElementById("message");
    const success= document.getElementById("success");
    const fail = document.getElementById("fail");

    if(Name.value === '' || Email.value === '' || Company.value === '' || Role.value === '' || msg.value === ''){
        fail.style.display = 'block';
    } else { 
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Company.value = '';
            Role.value = '';
            msg.value = '';
        }, 1000)
        success.style.display = 'block'}
    //remove the alert after submitting for 4 secs
    setTimeout(() => {
        fail.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

   /* Email.setAttributeNode({
        Host: "smtp.gmail.com",
        Username: "nglinhchi65@gmail.com",
        Password: "So6tayho",
        To: "nglinhchi65@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Message from Website",
        Body: "Name: " + Name +"<br>" + "Email: " + Email + "<br>" + msg,
    });*/
}