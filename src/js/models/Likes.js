export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);

        // Perist data in localStorage
        this.persistData();

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        // Perist data in localStorage
        this.persistData();
    }

    removeLikes(){
        this.likes = [];
        localStorage.setItem('likes', "");
    }

    //the recipe with the id that was passed in is liked or not.
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        //localStorage Can only store string, so convert array to string.
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        //if there is a storage
        if(localStorage.likes.length>0){
        const storage = JSON.parse(localStorage.getItem('likes'));
        
        // Restoring likes from the localStorage
        if (storage) this.likes = storage;
        }
    }
}
