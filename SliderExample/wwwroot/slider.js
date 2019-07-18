window.slider = {
    inpElem: { value: '' },
    outputElem: { innerText: '' },
    onslide: () => {
        window.slider.outputElem.innerText =
            window.slider.inpElem.value;
    },
    attach: (inp, outp) => {
        window.slider.inpElem = inp;
        window.slider.outputElem = outp;
        inp.addEventListener("input", window.slider.onslide);
    }
};