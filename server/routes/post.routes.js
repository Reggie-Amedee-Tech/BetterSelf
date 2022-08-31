const PostController = require('../controller/post.controller');

module.exports = function(app) {
    app.post('/api/createPost', PostController.createPost)
    app.get('/api/Posts', PostController.getPosts)
    app.get('/api/Posts/:id', PostController.getPostDetail)
    app.put('/api/:id/edit', PostController.upDatePost)
    app.delete('/api/Posts/:id', PostController.deleteOne)
}

