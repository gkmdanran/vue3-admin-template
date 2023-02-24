export function commonDownload(file: any, fileName?: string) {
    if ("download" in document.createElement("a")) {
        const elink = document.createElement("a");
        elink.style.display = "none";
        if (fileName) {
            elink.download = fileName;
        }
        if (typeof file == "string") {
            elink.href = file;
        } else {
            elink.href = URL.createObjectURL(file);
        }
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href);
        document.body.removeChild(elink);
    } else {
        (navigator as any).msSaveBlob(file, fileName);
    }
}