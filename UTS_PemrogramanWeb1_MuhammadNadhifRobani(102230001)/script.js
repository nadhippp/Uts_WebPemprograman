document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById("backToTop");
    var chatToggle = document.getElementById("chatToggle");
    var chatBox = document.getElementById("chatBox");
    var chatClose = document.getElementById("chatClose");
    var registrationForm = document.getElementById("registrationForm");

   
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });

    chatToggle.addEventListener("click", function() {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });

    chatClose.addEventListener("click", function() {
        chatBox.style.display = "none";
    });

  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

 
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Formulir pendaftaran Anda telah berhasil dikirim.');
            registrationForm.reset();
        });
    }

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById("backToTop");
    var chatToggle = document.getElementById("chatToggle");
    var chatBox = document.getElementById("chatBox");
    var chatClose = document.getElementById("chatClose");
    var registrationForm = document.getElementById("registrationForm");

  
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });

    
    chatToggle.addEventListener("click", function() {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });

    chatClose.addEventListener("click", function() {
        chatBox.style.display = "none";
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Formulir pendaftaran Anda telah berhasil dikirim.');
        registrationForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById("backToTop");
    var chatToggle = document.getElementById("chatToggle");
    var chatBox = document.getElementById("chatBox");
    var chatClose = document.getElementById("chatClose");


    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });


    chatToggle.addEventListener("click", function() {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });

    chatClose.addEventListener("click", function() {
        chatBox.style.display = "none";
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById("backToTop");
    var chatToggle = document.getElementById("chatToggle");
    var chatBox = document.getElementById("chatBox");
    var chatClose = document.getElementById("chatClose");
    var contactForm = document.getElementById("contactForm");

    // Back to Top functionality
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });


    chatToggle.addEventListener("click", function() {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });

    chatClose.addEventListener("click", function() {
        chatBox.style.display = "none";
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var modal = new bootstrap.Modal(document.getElementById('contactModal'));
            modal.show();
            contactForm.reset();
        });
    }


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById("backToTop");
    var chatToggle = document.getElementById("chatToggle");
    var chatBox = document.getElementById("chatBox");
    var chatClose = document.getElementById("chatClose");

    // Back to Top functionality
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Chat Widget functionality
    var chatWidget = document.getElementById("chatWidget");
    var chatToggle = document.getElementById("chatToggle");
    var chatBox = document.getElementById("chatBox");
    var chatClose = document.getElementById("chatClose");
    var chatInput = document.getElementById("chatInput");
    var chatSend = document.getElementById("chatSend");

    chatToggle.addEventListener("click", function() {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });

    chatClose.addEventListener("click", function() {
        chatBox.style.display = "none";
    });

    chatSend.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        var message = chatInput.value.trim();
        if (message !== "") {
            var chatBody = document.querySelector(".chat-body");
            var newMessage = document.createElement("p");
            newMessage.textContent = "Anda: " + message;
            chatBody.appendChild(newMessage);
            chatInput.value = "";

            // Simulate response (you can replace this with actual server communication)
            setTimeout(function() {
                var response = document.createElement("p");
                response.textContent = "Admin: Terima kasih atas pesan Anda. Kami akan segera merespons.";
                chatBody.appendChild(response);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }
    }


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Show modal on page load (you can customize this trigger)
    window.addEventListener('load', function() {
        var infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
        infoModal.show();
    });
});