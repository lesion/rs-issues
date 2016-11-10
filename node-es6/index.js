// require remotestoragejs
import RemoteStorage from 'remotestoragejs'
import 'remotestorage-module-bookmarks'

const rs = new RemoteStorage()
rs.access.claim('bookmarks','rw')

var bookmark = {url: 'http://remotestorage.io', title: 'title'}
rs.bookmarks.archive.store(bookmark)


