/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comnetworkgraph./networkgraph_json/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
