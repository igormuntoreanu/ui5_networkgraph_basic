sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/suite/ui/microchart/ComparisonMicroChart",
	"sap/suite/ui/microchart/ComparisonMicroChartData"    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, ComparisonMicroChart, ComparisonMicroChartData) {
		"use strict";

		return Controller.extend("com.networkgraph.networkgraphjson.controller.NetworkGraph", {
			onInit: function () {

                 // set data model on view
                var oModel2 = new JSONModel(sap.ui.require.toUrl("com/networkgraph/networkgraphjson/model/graph.json"));
                var oModel3 = new sap.ui.model.json.JSONModel("./model/graph.json"); //use path relative to the Root
                
                /** 
                var oData = {
                nodeBoxWidth: 200,
                nodes: [
                    {
                        key: 0,
                        title: "Amber",
                        icon: "sap-icon://checklist",
                        status: "Error",
                        group: "T"
                    },
                    {
                        key: 1,
                        title: "Beads",
                        icon: "sap-icon://bubble-chart"
                    },
                    {
                        key: 2,
                        title: "Bow & arrows",
                        icon: "sap-icon://back-to-top"
                    },
                    {
                        key: 3,
                        title: "Broth",
                        icon: "sap-icon://competitor",
                        shape: "Box",
                        status: "Success",
                        attributes: [
                            {
                                icon: "sap-icon://accept",
                                label: "Energy",
                                value: "780 kcal",
                                status: "AttributeLabel"
                            },
                            {
                                label: "Protein",
                                value: "49 g"
                            },
                            {
                                label: "Carb",
                                value: "52 g"
                            },
                            {
                                label: "Fat",
                                value: "11 g"
                            }
                        ]
                    },
                    {
                        key: 4,
                        title: "Bucket",
                        icon: "sap-icon://pipeline-analysis",
                        group: "V"
                    },
                    {
                        key: 5,
                        title: "Coat",
                        icon: "sap-icon://wounds-doc"
                    },
                    {
                        key: 6,
                        title: "Fish bone",
                        icon: "sap-icon://close-command-field",
                        group: "H"
                    },
                    {
                        key: 7,
                        title: "Flax",
                        icon: "sap-icon://sort-descending",
                        group: "F"
                    },
                    {
                        key: 8,
                        title: "Fur",
                        icon: "sap-icon://key-user-settings",
                        status: "Warning"
                    },
                    {
                        key: 9,
                        title: "Game",
                        icon: "sap-icon://laptop",
                        status: "Warning"
                    },
                    {
                        key: 10,
                        title: "Hemp",
                        icon: "sap-icon://radar-chart",
                        group: "F",
                        status: "Success"
                    },
                    {
                        key: 11,
                        title: "Husk",
                        icon: "sap-icon://product",
                        group: "V",
                        status: "Warning"
                    },
                    {
                        key: 12,
                        title: "Charcoal",
                        icon: "sap-icon://vertical-stacked-chart"
                    },
                    {
                        key: 13,
                        title: "Iron ingot",
                        icon: "sap-icon://value-help"
                    },
                    {
                        key: 14,
                        title: "Iron ore",
                        icon: "sap-icon://technical-object",
                        status: "Error",
                        group: "M"
                    },
                    {
                        key: 15,
                        title: "Kettle",
                        icon: "sap-icon://measuring-point"
                    },
                    {
                        key: 16,
                        title: "Leather",
                        icon: "sap-icon://map-3",
                        group: "H"
                    },
                    {
                        key: 17,
                        title: "Linen",
                        icon: "sap-icon://open-folder"
                    },
                    {
                        key: 18,
                        title: "Mud",
                        headerCheckbox: "Unchecked",
                        icon: "sap-icon://pool",
                        group: "V",
                        status: "Success",
                        shape: "Box",
                        maxWidth: 400
                    },
                    {
                        key: 19,
                        title: "Needle",
                        icon: "sap-icon://pushpin-off"
                    },
                    {
                        key: 20,
                        title: "Oxen fat",
                        icon: "sap-icon://pharmacy",
                        status: "Error"
                    },
                    {
                        key: 21,
                        title: "Pile & clay",
                        headerCheckbox: "Checked",
                        icon: "sap-icon://mileage",
                        group: "V",
                        status: "Dashed",
                        shape: "Box",
                        maxWidth: 400
                    },
                    {
                        key: 22,
                        title: "Rabbit",
                        icon: "sap-icon://Netweaver-business-client",
                        group: "H"
                    },
                    {
                        key: 23,
                        title: "Sickle",
                        icon: "sap-icon://restart",
                        group: "F"
                    },
                    {
                        key: 24,
                        title: "Sinews",
                        icon: "sap-icon://repost",
                        group: "H",
                        status: "Success"
                    },
                    {
                        key: 25,
                        title: "Smelter",
                        icon: "sap-icon://basket"
                    },
                    {
                        key: 26,
                        title: "Stones",
                        icon: "sap-icon://bbyd-dashboard",
                        group: "V",
                        status: "Success"
                    },
                    {
                        key: 27,
                        title: "Timber",
                        icon: "sap-icon://crossed-line-chart",
                        group: "F",
                        status: "Success"
                    },
                    {
                        key: 28,
                        title: "Trail",
                        icon: "sap-icon://horizontal-grip",
                        group: "H",
                        status: "Success"
                    },
                    {
                        key: 29,
                        title: "Trap",
                        icon: "sap-icon://flag",
                        group: "H"
                    },
                    {
                        key: 30,
                        title: "Trout",
                        icon: "sap-icon://attachment",
                        group: "H",
                        status: "Warning"
                    },
                    {
                        key: 31,
                        title: "Vegetable",
                        icon: "sap-icon://nutrition-activity",
                        group: "F",
                        status: "Warning"
                    },
                    {
                        key: 32,
                        title: "Water",
                        icon: "sap-icon://lab",
                        status: "Success"
                    },
                    {
                        key: 33,
                        title: "Whetstone",
                        icon: "sap-icon://measure",
                        status: "Success",
                        group: "T"
                    },
                    {
                        key: 34,
                        title: "Winter coat",
                        headerCheckbox: "Unchecked",
                        icon: "sap-icon://heating-cooling",
                        shape: "Box",
                        status: "Warning",
                        attributes: [
                            {
                                label: "Comfort",
                                value: "-10° C"
                            },
                            {
                                label: "Extreme",
                                value: "-25° C"
                            },
                            {
                                label: "Weight",
                                value: "6.25 kg"
                            }
                        ]
                    },
                    {
                        key: 35,
                        title: "Wood",
                        icon: "sap-icon://e-care",
                        group: "V",
                        status: "Success"
                    }
                ],
                lines: [
                    {
                        from: 0,
                        to: 1
                    },
                    {
                        from: 1,
                        to: 5
                    },
                    {
                        from: 2,
                        to: 9
                    },
                    {
                        from: 4,
                        to: 18,
                        status: "LineBorderStatus"
                    },
                    {
                        from: 5,
                        to: 34
                    },
                    {
                        from: 6,
                        to: 19
                    },
                    {
                        from: 7,
                        to: 17
                    },
                    {
                        from: 8,
                        to: 34
                    },
                    {
                        from: 9,
                        to: 3
                    },
                    {
                        from: 10,
                        to: 2
                    },
                    {
                        from: 11,
                        to: 4
                    },
                    {
                        from: 12,
                        to: 13
                    },
                    {
                        from: 13,
                        to: 15
                    },
                    {
                        from: 14,
                        to: 13
                    },
                    {
                        from: 15,
                        to: 3
                    },
                    {
                        from: 16,
                        to: 5
                    },
                    {
                        from: 17,
                        to: 5
                    },
                    {
                        from: 18,
                        to: 25
                    },
                    {
                        from: 19,
                        to: 5
                    },
                    {
                        from: 20,
                        to: 34
                    },
                    {
                        from: 21,
                        to: 12
                    },
                    {
                        from: 22,
                        to: 16
                    },
                    {
                        from: 23,
                        to: 7
                    },
                    {
                        from: 24,
                        to: 29
                    },
                    {
                        from: 25,
                        to: 13
                    },
                    {
                        from: 26,
                        to: 25
                    },
                    {
                        from: 27,
                        to: 23
                    },
                    {
                        from: 28,
                        to: 22
                    },
                    {
                        from: 29,
                        to: 22
                    },
                    {
                        from: 30,
                        to: 6
                    },
                    {
                        from: 31,
                        to: 3
                    },
                    {
                        from: 32,
                        to: 3
                    },
                    {
                        from: 33,
                        to: 1
                    },
                    {
                        from: 35,
                        to: 2
                    }
                ],
                groups: [
                    {
                        key: "F",
                        title: "Farmer"
                    },
                    {
                        key: "H",
                        title: "Hunter"
                    },
                    {
                        key: "M",
                        title: "Miner",
                        headerCheckboxState : "Unchecked"
                    },
                    {
                        key: "V",
                        title: "Villager",
                        headerCheckboxState : "Checked",
                        status: "GroupCustomStatus"
                    },
                    {
                        key: "T",
                        title: "Trader"
                    }
                ]
                };

                */
                
                // var oModel = new JSONModel(oData);
                // var oModel = new JSONModel(oData);
                var that = this;
                // this.getView().setModel(oModel);
                this.getView().setModel(oModel2);

                this._oModelSettings = new JSONModel({
				source: "atomicCircle",
				orientation: "LeftRight",
				arrowPosition: "End",
				arrowOrientation: "None",
				nodeSpacing: 55,
                mergeEdges: false,
                lineType: "Solid"
                });
                
            this.getView().setModel(this._oModelSettings, "settings");
                
			var fnSetContent = function (oNode) {
				oNode.setContent(new ComparisonMicroChart({
					size: "M",
					scale: "M",
					data: [
						new ComparisonMicroChartData({
							title: "USA",
							value: Math.floor(Math.random() * 60),
							color: "Neutral"
						}),
						new ComparisonMicroChartData({
							title: "EMEA",
							value: Math.floor(Math.random() * 60),
							color: "Error"
						}),
						new ComparisonMicroChartData({
							title: "APAC",
							value: -20,
							color: "Good"
						}),
						new ComparisonMicroChartData({
							title: "LTA",
							value: Math.floor(Math.random() * 60) * -1,
							color: "Critical"
						}),
						new ComparisonMicroChartData({
							title: "ALPS",
							value: Math.floor(Math.random() * 20),
							color: "Good"
						})
					]
				}).addStyleClass("sapUiSmallMargin"));

			};

                    oModel2.attachRequestCompleted(function (oData) {
                        that.byId("graph").getNodes().forEach(function (oNode) {
                            if (oNode.getKey() === "21" || oNode.getKey() === "18") {
                                fnSetContent(oNode);
                            }
                        });
                    });
            },
            
            onAfterRendering: function () {
                    this.byId("graphWrapper").$().css("overflow-y", "auto");
            
            },
            
            mergeChanged: function (oEvent) {
                    this._oModelSettings.setProperty("/mergeEdges", !!Number(oEvent.getSource().getProperty("selectedKey")));
            },

            spacingChanged: function (oEvent) {
                    this._oModelSettings.setProperty("/nodeSpacing", Number(oEvent.getSource().getProperty("selectedKey")));
            },
            
            lineTypeChanged: function (oEvent) {
                
                var oLineType = oEvent.getSource().getProperty("selectedKey");
                this._oModelSettings.setProperty("/lineType", oLineType);
            }
		});
	});
