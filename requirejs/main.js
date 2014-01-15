"use strict";
define([], function() {
    
        document.addEventListener("deviceready", function () { navigator.splashscreen.hide(); });

        var TipCalculator = {};
    
        DevExpress.devices.current({ platform: "android" });

        TipCalculator.app = new DevExpress.framework.html.HtmlApplication({
            namespace: TipCalculator,

            defaultLayout: "empty"
        });

        // enable iOS7 theme
        var device = DevExpress.devices.current(),
            iosVersion = DevExpress.devices.iosVersion();
        if (device.platform === "ios" && iosVersion && iosVersion[0] === 7) {
            $(".dx-viewport")
                .removeClass("dx-theme-ios")
                .addClass("dx-theme-ios7");
        }

        // [add routes here...]
        TipCalculator.app.router.register(":view", { view: "home" });
       
        // [add all the viewmodels here..]
        require(['views/home'], function (homeVm) {
            var self = {};
            self.homeVm = homeVm;

            TipCalculator.home = function (params) {
                return self.homeVm;
            };

            // now navigate to the first route
            TipCalculator.app.navigate();
        });
        

        return TipCalculator;
});

