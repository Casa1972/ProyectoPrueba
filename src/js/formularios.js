export function formularioInscr() {
    if(document.getElementById("botonAlumno")){
        var modal = document.getElementById("ventanaInscr");
        var btn = document.getElementById("botonAlumno");
        var span = modal.getElementsByClassName("close")[0];
        var body = document.getElementsByTagName("body")[0];

        btn.addEventListener('click', event => {
            modal.style.display = "block";

            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "hidden";
        })

        span.addEventListener('click', event => {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        })

        window.addEventListener('click', event => {
            if (event.target == modal) {
                modal.style.display = "none";

                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            }
        })
    }
}
export function formularioProfe() {
    if(document.getElementById("botonProfesor")){
        var modal = document.getElementById("ventanaProfe");
        var btn = document.getElementById("botonProfesor");
        var span = modal.getElementsByClassName("close")[0];
        var body = document.getElementsByTagName("body")[0];

        btn.addEventListener('click', event => {
            modal.style.display = "block";

            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "hidden";
        })

        span.addEventListener('click', event => {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        })

        window.addEventListener('click', event => {
            if (event.target == modal) {
                modal.style.display = "none";

                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            }
        })
    }
}