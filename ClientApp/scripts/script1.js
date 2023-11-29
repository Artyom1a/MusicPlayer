const inputFile = document.getElementById('custom-file');
const fileList = document.querySelector('.file-list');

inputFile.addEventListener(
    'change',
    (event) => {
        const files = event.target.files;
        const result = [];
        for(let i = 0; i< files.length; i++) {
            result.push(files[i].name);
        }
        fileList.textContent = result.join(' | ');

        const api = fetch('http')
    },
    false
);
