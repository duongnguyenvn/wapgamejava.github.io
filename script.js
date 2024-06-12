// Chặn bấm chuột phải
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Chặn copy
document.addEventListener('copy', function(event) {
    event.preventDefault();
});

// Chặn Ctrl+S, Ctrl+U và F12
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.key === 's') || 
        (event.ctrlKey && event.key === 'u') || 
        (event.key === 'F12')) {
        event.preventDefault();
    }
});