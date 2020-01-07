const fetchImpl = (function(){
    const get = function(url, params){
        return window.fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(res2){
            return res2;
        });
    }
    return {
        get: get
    };
})();

const photos = (function(fetchImpl){
    const photosNode = document.getElementById('photos');
    const photosURL = 'https://randomuser.me/api/?results=20&inc=picture';

    const createPhotosList = function(photoList){
        photoList.results.forEach(function(photo){
            const img = document.createElement('img');
            img.src = photo.picture.large;
            photosNode.appendChild(img);
        });
    };

    const getPhotos = function(){
        return fetchImpl.get(photosURL);
    }

    return {
        init: function(){
            getPhotos().then(function(photoList){
                createPhotosList(photoList);
            });
        }
    }

})(fetchImpl);


photos.init();