async function handleClipboardData() {
    try {
        const clipboardItems = await navigator.clipboard.read();
        for (const item of clipboardItems) {
            if (item.types.includes('image/png') || item.types.includes('image/jpeg')) {
                const blob = await item.getType(item.types[0]);
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'pasted-image.png';
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

async function requestClipboardPermission() {
    try {
        const permissionStatus = await navigator.permissions.query({ name: 'clipboard-read' });
        if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
            await handleClipboardData();
        } else {
            alert('Clipboard access denied. Please grant access to download images.');
        }
    } catch (error) {
        console.error('Error requesting clipboard permission:', error);
        alert('Error requesting clipboard permission. Please try again or grant access manually.');
    }
}

document.addEventListener('paste', async function(event) {
    try {
        const items = (event.clipboardData || event.originalEvent.clipboardData).items;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.type.startsWith('image/')) {
                const blob = item.getAsFile();
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'pasted-image.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                break;
            }
        }
    } catch (error) {
        console.error('Error handling paste event:', error);
        alert('Error handling paste event. Please try again.');
    }
});

document.querySelector('.container').addEventListener('click', async function() {
    await requestClipboardPermission();
});
