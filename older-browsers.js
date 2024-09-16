// Polyfill for console.log and console.error in older browsers
function debug_log(message) {
    try {
        if (typeof console !== 'undefined' && console.log) {
            console.log(message);
        }
    } catch (e) {
        // No-op, silently fail if console is not available
    }
}

function debug_error(message) {
    try {
        if (typeof console !== 'undefined' && console.error) {
            console.error(message);
        } else if (typeof console !== 'undefined' && console.log) {
            console.log("ERROR: " + message); // Fallback to console.log if console.error is unavailable
        }
    } catch (e) {
        // No-op, silently fail if console is not available
    }
}
