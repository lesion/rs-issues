// require remotestoragejs
var RemoteStorage = require('remotestoragejs')

var rs = new RemoteStorage()
rs.displayWidget()
rs.access.claim('bookmarks','rw')

require('remotestorage-module-bookmarks')
var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


