// Polyfill for console.log in older browsers, with support for multiple arguments
function debug_log() {
    try {
        if (typeof console !== 'undefined' && console.log) {
            console.log.apply(console, arguments); // Pass all arguments to console.log
        }
    } catch (e) {
        // No-op, silently fail if console is not available
    }
}

// Polyfill for console.error in older browsers, with support for multiple arguments
function debug_error() {
    try {
        if (typeof console !== 'undefined' && console.error) {
            console.error.apply(console, arguments); // Pass all arguments to console.error
        } else if (typeof console !== 'undefined' && console.log) {
            console.log.apply(console, ["ERROR:"].concat(Array.prototype.slice.call(arguments))); // Fallback to console.log, prefixing with "ERROR:"
        }
    } catch (e) {
        // No-op, silently fail if console is not available
    }
}

// Polyfill for console.info in older browsers, with support for multiple arguments
function debug_info() {
    try {
        if (typeof console !== 'undefined' && console.info) {
            console.info.apply(console, arguments); // Pass all arguments to console.info
        } else if (typeof console !== 'undefined' && console.log) {
            console.log.apply(console, ["INFO:"].concat(Array.prototype.slice.call(arguments))); // Fallback to console.log, prefixing with "INFO:"
        }
    } catch (e) {
        // No-op, silently fail if console is not available
    }
}
