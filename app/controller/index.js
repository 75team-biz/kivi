module.exports = {
    indexAction: function* (next){
        this.render("base");
        yield next;
    }
};
