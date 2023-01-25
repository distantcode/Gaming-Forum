router.get('/post', function(req, res, next){
    res.render('write');
});
router.get('/reviews', function(req, res, next){
    res.render('read');
});
