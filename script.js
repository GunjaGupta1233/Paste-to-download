document.querySelector('.container').addEventListener('click', async function() {
    try {
        const permission = await navigator.permissions.query({ name: 'clipboard-read' });
        if (permission.state === 'granted' || permission.state === 'prompt') {
            const clipboardData = await navigator.clipboard.read();
            const items = clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.type.startsWith('image/')) {
                    const blob = item.getAsFile();
                    const url = URL.createObjectURL(blob);
                    const img = new Image();
                    img.src = url;
                    document.body.appendChild(img);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'pasted-image.png';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    document.body.removeChild(img);
                    break;
                }
            }
        } else {
            // Permissions not granted, ask the user
            const result = await navigator.permissions.request({ name: 'clipboard-read' });
            if (result.state === 'granted') {
                // Permission granted, repeat the process
                this.click();
            } else {
                // Permission denied
                alert('Clipboard access denied. Please grant access to download images.');
            }
        }
    } catch (error) {
        console.error('Error accessing clipboard:', error);
        alert('Error accessing clipboard. Please try again or grant access manually.');
    }
});
