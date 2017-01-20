export const getCurrentPosition = () => {

    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position.coords);
            }, (err) => {
                reject(err);
            });
        } else {
            reject('Geolocation not supported');
        }
    });

}
