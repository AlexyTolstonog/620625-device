var link = document.querySelector(".modal-map-js");
        var show = document.querySelector(".modal-map");
        link.addEventListener("click", function(evt) {
            evt.preventDefault();
            show.classList.add("show-modal");
        });

        var closemap = document.querySelector(".js-map-close");
        closemap.addEventListener("click", function() {
            show.classList.remove("show-modal");
        });

        var modalfeedback = document.querySelector(".main-contacts-btn");
        var modalfeed = document.querySelector(".modal-feedback");
        modalfeedback.addEventListener("click", function(evt) {
            evt.preventDefault();
            modalfeed.classList.add("show-modal-feedback");
        });
        var closefeedback = document.querySelector(".btn-close-fedback");
        closefeedback.addEventListener("click", function() {
            modalfeed.classList.remove("show-modal-feedback");
        });