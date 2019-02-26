export const getDimentions = file => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onerror = () => {
            reader.abort();
            reject(new DOMException("Parse error"));
        };

        reader.onload = () => {
            let img = new Image;
            img.onload = () => resolve([img.width, img.height])
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    })
}