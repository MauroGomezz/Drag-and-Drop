const dropArea = document.querySelector('.drop-area');
const dragText = dropArea.querySelector('h2');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('#input-file');
let files;

button.addEventListener('click', (e) => {
    input.click();
});

input.addEventListener('change', (e) => {
    files = e.target.files;
    showFiles(files);
});

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragText.textContent = 'Suelta para subir los archivos';
});

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dragText.textContent = 'Arrastra y suelta imagenes';
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dragText.textContent = 'Arrastra y suelta imagenes';
});

function showFiles(files) {
    if(files.length === undefined) {
        processFile(files);
    } else {
        for(const file of files) {
            processFile(file)
        }
    }
};

function processFile(file) {
    const docType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    if(validExtensions.includes(docType)) {
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;
        fileReader.addEventListener('load', (e) => {
            const fileUrl = fileReader.result;
            document.querySelector('#img-container').src = fileUrl; 
        });

        fileReader.readAsDataURL(file);
        uploadFile(file, id);
    } else {
        alert('No es un archivo valido')
    }
};

function uploadFile() {

};