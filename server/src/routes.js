const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controller/SongsController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    //Get/Read all the songs
    app.get('/songs',
        SongsController.index)

    //Get/Read the song by the ID
    app.get('/songs/:songId',
        SongsController.show)

    //Post/Create a new song
    app.post('/songs',
        SongsController.post)

    app.put('/songs/:songId',
        SongsController.put)

    app.get('/bookmarks',
        isAuthenticated,
        BookmarksController.index)

    app.post('/bookmarks',
        isAuthenticated,
        BookmarksController.post)
        
    app.delete('/bookmarks/:bookmarkId',
        isAuthenticated,
        BookmarksController.remove)
}