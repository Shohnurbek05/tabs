const btns = document.querySelectorAll('.tab-nav__btn');
const contents = document.querySelectorAll('.tab-body__content');

btns.forEach((elem, idx) => {
    elem.addEventListener("click", () => {
        for (let index = 0; index < btns.length; index++) { 
            btns[index].classList.remove("active");
            contents[index].classList.remove("active");
        }
        elem.classList.add("active");
        contents[idx].classList.add("active");
    });
});
