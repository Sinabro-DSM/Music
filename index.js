// const drum = document.querySelector('#drum');
// const recorder = document.querySelector('#recorder');
// const jangGu = document.querySelector('#jang-gu');

const inst = document.querySelector('#inst');

document.addEventListener('click', (event) => {
    const targetId = event.target.id;
    console.log(inst.src);
    inst.src = `./inst/${targetId}/index.html`;
    inst.focus();
}); 