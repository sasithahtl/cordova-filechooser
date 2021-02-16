module.exports = {
    open: function (filter, success, failure) {
        console.log('opened filechooser 3');
        if (typeof filter === 'function') {
            failure = success;
            success = filter;
            filter = {};
        }

        cordova.exec(success, failure, "FileChooser", "open", [ filter ]);
    }
};
