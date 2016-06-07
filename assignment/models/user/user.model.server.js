module.exports = function() {

    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User", UserSchema);

    var api = {
        createUser: createUser,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
    return api;
    
    function createUser(user) {
        return User.create(user);
        // User.create(user, function(err, user){
        //     model.find(funct(){
        //         model.find
        //     })
        // });
    }

    function findUserById(userId) {
        return User.findById(userId);
    }
    
    function findUserByCredentials() {
        
    }
    
    function findUserByUsername() {
        
    }
    
    function updateUser() {
        
    }
    
    function deleteUser() {
        
    }
};