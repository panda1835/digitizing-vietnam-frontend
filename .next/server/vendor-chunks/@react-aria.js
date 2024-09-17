"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-aria";
exports.ids = ["vendor-chunks/@react-aria"];
exports.modules = {

/***/ "(ssr)/./node_modules/@react-aria/live-announcer/dist/LiveAnnouncer.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@react-aria/live-announcer/dist/LiveAnnouncer.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   announce: () => (/* binding */ $319e236875307eab$export$a9b970dcc4ae71a9),\n/* harmony export */   clearAnnouncer: () => (/* binding */ $319e236875307eab$export$d10ae4f68404609a),\n/* harmony export */   destroyAnnouncer: () => (/* binding */ $319e236875307eab$export$d8686216b8b81b2f)\n/* harmony export */ });\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;\nlet $319e236875307eab$var$liveAnnouncer = null;\nfunction $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = \"assertive\", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {\n    if (!$319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();\n    $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);\n}\nfunction $319e236875307eab$export$d10ae4f68404609a(assertiveness) {\n    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);\n}\nfunction $319e236875307eab$export$d8686216b8b81b2f() {\n    if ($319e236875307eab$var$liveAnnouncer) {\n        $319e236875307eab$var$liveAnnouncer.destroy();\n        $319e236875307eab$var$liveAnnouncer = null;\n    }\n}\n// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18\n// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a\n// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.\n// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer\n// is simple enough to implement without React, so that's what we do here.\n// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638\nclass $319e236875307eab$var$LiveAnnouncer {\n    createLog(ariaLive) {\n        let node = document.createElement(\"div\");\n        node.setAttribute(\"role\", \"log\");\n        node.setAttribute(\"aria-live\", ariaLive);\n        node.setAttribute(\"aria-relevant\", \"additions\");\n        return node;\n    }\n    destroy() {\n        if (!this.node) return;\n        document.body.removeChild(this.node);\n        this.node = null;\n    }\n    announce(message, assertiveness = \"assertive\", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {\n        if (!this.node) return;\n        let node = document.createElement(\"div\");\n        node.textContent = message;\n        if (assertiveness === \"assertive\") this.assertiveLog.appendChild(node);\n        else this.politeLog.appendChild(node);\n        if (message !== \"\") setTimeout(()=>{\n            node.remove();\n        }, timeout);\n    }\n    clear(assertiveness) {\n        if (!this.node) return;\n        if (!assertiveness || assertiveness === \"assertive\") this.assertiveLog.innerHTML = \"\";\n        if (!assertiveness || assertiveness === \"polite\") this.politeLog.innerHTML = \"\";\n    }\n    constructor(){\n        this.node = document.createElement(\"div\");\n        this.node.dataset.liveAnnouncer = \"true\";\n        // copied from VisuallyHidden\n        Object.assign(this.node.style, {\n            border: 0,\n            clip: \"rect(0 0 0 0)\",\n            clipPath: \"inset(50%)\",\n            height: \"1px\",\n            margin: \"-1px\",\n            overflow: \"hidden\",\n            padding: 0,\n            position: \"absolute\",\n            width: \"1px\",\n            whiteSpace: \"nowrap\"\n        });\n        this.assertiveLog = this.createLog(\"assertive\");\n        this.node.appendChild(this.assertiveLog);\n        this.politeLog = this.createLog(\"polite\");\n        this.node.appendChild(this.politeLog);\n        document.body.prepend(this.node);\n    }\n}\n\n\n\n//# sourceMappingURL=LiveAnnouncer.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvbGl2ZS1hbm5vdW5jZXIvZGlzdC9MaXZlQW5ub3VuY2VyLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUcyTDtBQUMzTCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2xpdmUtYW5ub3VuY2VyL2Rpc3QvTGl2ZUFubm91bmNlci5tanM/YzhjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi8gLyogSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0FsbWVyb1N0ZXluL3JlYWN0LWFyaWEtbGl2ZSAqLyBjb25zdCAkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkTElWRVJFR0lPTl9USU1FT1VUX0RFTEFZID0gNzAwMDtcbmxldCAkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkbGl2ZUFubm91bmNlciA9IG51bGw7XG5mdW5jdGlvbiAkMzE5ZTIzNjg3NTMwN2VhYiRleHBvcnQkYTliOTcwZGNjNGFlNzFhOShtZXNzYWdlLCBhc3NlcnRpdmVuZXNzID0gXCJhc3NlcnRpdmVcIiwgdGltZW91dCA9ICQzMTllMjM2ODc1MzA3ZWFiJHZhciRMSVZFUkVHSU9OX1RJTUVPVVRfREVMQVkpIHtcbiAgICBpZiAoISQzMTllMjM2ODc1MzA3ZWFiJHZhciRsaXZlQW5ub3VuY2VyKSAkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkbGl2ZUFubm91bmNlciA9IG5ldyAkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkTGl2ZUFubm91bmNlcigpO1xuICAgICQzMTllMjM2ODc1MzA3ZWFiJHZhciRsaXZlQW5ub3VuY2VyLmFubm91bmNlKG1lc3NhZ2UsIGFzc2VydGl2ZW5lc3MsIHRpbWVvdXQpO1xufVxuZnVuY3Rpb24gJDMxOWUyMzY4NzUzMDdlYWIkZXhwb3J0JGQxMGFlNGY2ODQwNDYwOWEoYXNzZXJ0aXZlbmVzcykge1xuICAgIGlmICgkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkbGl2ZUFubm91bmNlcikgJDMxOWUyMzY4NzUzMDdlYWIkdmFyJGxpdmVBbm5vdW5jZXIuY2xlYXIoYXNzZXJ0aXZlbmVzcyk7XG59XG5mdW5jdGlvbiAkMzE5ZTIzNjg3NTMwN2VhYiRleHBvcnQkZDg2ODYyMTZiOGI4MWIyZigpIHtcbiAgICBpZiAoJDMxOWUyMzY4NzUzMDdlYWIkdmFyJGxpdmVBbm5vdW5jZXIpIHtcbiAgICAgICAgJDMxOWUyMzY4NzUzMDdlYWIkdmFyJGxpdmVBbm5vdW5jZXIuZGVzdHJveSgpO1xuICAgICAgICAkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkbGl2ZUFubm91bmNlciA9IG51bGw7XG4gICAgfVxufVxuLy8gTGl2ZUFubm91bmNlciBpcyBpbXBsZW1lbnRlZCB1c2luZyB2YW5pbGxhIERPTSwgbm90IFJlYWN0LiBUaGF0J3MgYmVjYXVzZSBhcyBvZiBSZWFjdCAxOFxuLy8gUmVhY3RET00ucmVuZGVyIGlzIGRlcHJlY2F0ZWQsIGFuZCB0aGUgcmVwbGFjZW1lbnQsIFJlYWN0RE9NLmNyZWF0ZVJvb3QgaXMgbW92ZWQgaW50byBhXG4vLyBzdWJwYXRoIGltcG9ydCBgcmVhY3QtZG9tL2NsaWVudGAuIFRoYXQgbWFrZXMgaXQgaGFyZCBmb3IgdXMgdG8gc3VwcG9ydCBtdWx0aXBsZSBSZWFjdCB2ZXJzaW9ucy5cbi8vIEFzIGEgZ2xvYmFsIEFQSSwgd2UgY2FuJ3QgdXNlIHBvcnRhbHMgd2l0aG91dCBpbnRyb2R1Y2luZyBhIGJyZWFraW5nIEFQSSBjaGFuZ2UuIExpdmVBbm5vdW5jZXJcbi8vIGlzIHNpbXBsZSBlbm91Z2ggdG8gaW1wbGVtZW50IHdpdGhvdXQgUmVhY3QsIHNvIHRoYXQncyB3aGF0IHdlIGRvIGhlcmUuXG4vLyBTZWUgdGhpcyBkaXNjdXNzaW9uIGZvciBtb3JlIGRldGFpbHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHdnL3JlYWN0LTE4L2Rpc2N1c3Npb25zLzEyNSNkaXNjdXNzaW9uY29tbWVudC0yMzgyNjM4XG5jbGFzcyAkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkTGl2ZUFubm91bmNlciB7XG4gICAgY3JlYXRlTG9nKGFyaWFMaXZlKSB7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwibG9nXCIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBhcmlhTGl2ZSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiYXJpYS1yZWxldmFudFwiLCBcImFkZGl0aW9uc1wiKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlKSByZXR1cm47XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlID0gbnVsbDtcbiAgICB9XG4gICAgYW5ub3VuY2UobWVzc2FnZSwgYXNzZXJ0aXZlbmVzcyA9IFwiYXNzZXJ0aXZlXCIsIHRpbWVvdXQgPSAkMzE5ZTIzNjg3NTMwN2VhYiR2YXIkTElWRVJFR0lPTl9USU1FT1VUX0RFTEFZKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlKSByZXR1cm47XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgIGlmIChhc3NlcnRpdmVuZXNzID09PSBcImFzc2VydGl2ZVwiKSB0aGlzLmFzc2VydGl2ZUxvZy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgZWxzZSB0aGlzLnBvbGl0ZUxvZy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UgIT09IFwiXCIpIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgICBjbGVhcihhc3NlcnRpdmVuZXNzKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlKSByZXR1cm47XG4gICAgICAgIGlmICghYXNzZXJ0aXZlbmVzcyB8fCBhc3NlcnRpdmVuZXNzID09PSBcImFzc2VydGl2ZVwiKSB0aGlzLmFzc2VydGl2ZUxvZy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAoIWFzc2VydGl2ZW5lc3MgfHwgYXNzZXJ0aXZlbmVzcyA9PT0gXCJwb2xpdGVcIikgdGhpcy5wb2xpdGVMb2cuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmRhdGFzZXQubGl2ZUFubm91bmNlciA9IFwidHJ1ZVwiO1xuICAgICAgICAvLyBjb3BpZWQgZnJvbSBWaXN1YWxseUhpZGRlblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMubm9kZS5zdHlsZSwge1xuICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgY2xpcDogXCJyZWN0KDAgMCAwIDApXCIsXG4gICAgICAgICAgICBjbGlwUGF0aDogXCJpbnNldCg1MCUpXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXB4XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiLTFweFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hc3NlcnRpdmVMb2cgPSB0aGlzLmNyZWF0ZUxvZyhcImFzc2VydGl2ZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuYXNzZXJ0aXZlTG9nKTtcbiAgICAgICAgdGhpcy5wb2xpdGVMb2cgPSB0aGlzLmNyZWF0ZUxvZyhcInBvbGl0ZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMucG9saXRlTG9nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRoaXMubm9kZSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7JDMxOWUyMzY4NzUzMDdlYWIkZXhwb3J0JGE5Yjk3MGRjYzRhZTcxYTkgYXMgYW5ub3VuY2UsICQzMTllMjM2ODc1MzA3ZWFiJGV4cG9ydCRkMTBhZTRmNjg0MDQ2MDlhIGFzIGNsZWFyQW5ub3VuY2VyLCAkMzE5ZTIzNjg3NTMwN2VhYiRleHBvcnQkZDg2ODYyMTZiOGI4MWIyZiBhcyBkZXN0cm95QW5ub3VuY2VyfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxpdmVBbm5vdW5jZXIubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-aria/live-announcer/dist/LiveAnnouncer.mjs\n");

/***/ })

};
;