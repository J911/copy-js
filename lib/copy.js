'use strict';

var hiddenInput = document.createElement('input');
hiddenInput.style.position = 'fixed';
hiddenInput.style.top = '-100px';

var copy = function copy(value, callback) {
    document.body.appendChild(hiddenInput);
    hiddenInput.value = value.trim();
    hiddenInput.select();
    document.execCommand('copy');
    document.body.removeChild(hiddenInput);

    if (typeof callback === 'function') return callback();
    return;
};