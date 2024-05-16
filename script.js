async function handleClipboardData(event) {
    try {
        const items = (event.clipboardData || event.originalEvent.clipboardData).items;
        for (const item of items) {
            if (item.type.startsWith('image/')) {
                const blob = item.getAsFile();
                const url = URL.createObjectURL(blob);
                const selectedFormat = document.getElementById('file-format').value;
                const filename = `pasted-image.${selectedFormat}`;
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                break;
            }
        }
    } catch (error) {
        console.error('Error accessing clipboard:', error);
        alert('Error accessing clipboard. Please try again or grant access manually.');
    }
}

document.addEventListener('paste', handleClipboardData);
