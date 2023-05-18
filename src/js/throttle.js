const throttle = (context, limit) => {
    let inThrottle = true;
    return function (...args) {
        if (inThrottle) {
            context.apply(this, args);
            inThrottle = false;
            setTimeout(() => inThrottle = true, limit);
        }
    }.bind(context);
};

export default throttle;