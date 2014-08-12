// ==UserScript==
// @name          Mediaviewer killer user script
// @description   Disables Mediaviewer by setting the same localStorage bits as the official opt-out button does, but this script does even work if local storage gets cleared on a regular basis (e.g. incognito tabs etc).
// @include       *.wikipedia.org*
// @include       *.mediawiki.org*
// ==/UserScript==

localStorage.setItem("wgMediaViewerOnClick",0)
