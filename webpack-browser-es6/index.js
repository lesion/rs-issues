// require remotestoragejs
import RemoteStorage from 'remotestoragejs'
import Bookmarks from 'remotestorage-module-bookmarks'
Bookmarks(RemoteStorage)

const rs = new RemoteStorage()
rs.displayWidget()
rs.access.claim('bookmarks','rw')

var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


