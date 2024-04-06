 if (typeof value === 'object' && value !== null && typeof classOrSuperclass === 'function') {
        const methods = Object.getOwnPropertyNames(classOrSuperclass.prototype);
        return methods.every(method => typeof value[method] === 'function');
    }