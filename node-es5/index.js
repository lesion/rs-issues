// require remotestoragejs
var RemoteStorage = require('remotestoragejs')
require('remotestorage-module-bookmarks')

var rs = new RemoteStorage()
rs.access.claim('bookmarks', 'rw')
var bookmark = {url: 'http://remotestorage.io', title: 'RemoteStorage'}
rs.bookmarks.archive.store(bookmark)
