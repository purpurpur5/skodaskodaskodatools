var Skoda;
(function (Skoda) {
    var K2NGTools;
    (function (K2NGTools) {
        var Modals;
        (function (Modals) {
            var SimpleModalWindow = (function () {
                function SimpleModalWindow() {
                    var _this = this;
                    this.noBodyScrollbar = ko.observable(false);
                    this.maxWindowHeight = ko.observable("auto");
                    this.keyDownHandler = function (e) {
                        if (_this.isVisible) {
                            e.preventDefault();
                            //Arrow key down or spacebar
                            if (e.keyCode && (e.keyCode == 40 || e.keyCode == 32)) {
                                _this.sly.slideBy(50);
                            }
                            //Arrow key up
                            if (e.keyCode && e.keyCode == 38) {
                                _this.sly.slideBy(-50);
                            }
                            //End key
                            if (e.keyCode && e.keyCode == 35) {
                                _this.sly.toEnd();
                            }
                            //Home key
                            if (e.keyCode && e.keyCode == 36) {
                                _this.sly.toStart();
                            }
                            //Page down
                            if (e.keyCode && e.keyCode == 34) {
                                _this.sly.slideBy(150);
                            }
                            //Page up
                            if (e.keyCode && e.keyCode == 33) {
                                _this.sly.slideBy(-150);
                            }
                        }
                    };
                    this.display = function (data) {
                        _this.mobileBack(data.mobileBack);
                        _this.headline(data.headline);
                        _this.content(data.content);
                        _this.buttonClose(data.buttonClose);
                        _this.onAfterCloseCallback = data.onAfterCloseCallback;
                        _this.isVisible(true);
                        _this.noBodyScrollbar(true);
                        var self = _this;
                        var $scrollBar = $('.scrollbar');
                        var $frame = $('.sa-modal-content');
                        if ($(window).innerWidth() > 659) {
                            _this.maxWindowHeight($(window).innerHeight() * 0.33);
                        }
                        else {
                            _this.maxWindowHeight($(window).innerHeight() - (44 + 84 + 102));
                        }
                        _this.sly = new Sly($frame, {
                            horizontal: false,
                            itemNav: null,
                            smart: false,
                            scrollBar: $scrollBar,
                            dragHandle: true,
                            dynamicHandle: true,
                            releaseSwing: false,
                            touchDragging: true,
                            scrollSource: $frame,
                            scrollBy: 10,
                            scrollHijack: 300,
                            scrollTrap: false
                        }).init();
                        _this.sly.slideTo(0);
                        if ($scrollBar.find(".handle").height() == $scrollBar.height() || $scrollBar.height() <= 36) {
                            $scrollBar.hide();
                        }
                        else {
                            $scrollBar.show();
                        }
                        $(window).on('keydown', _this.keyDownHandler);
                        $(window).resize(function (e) {
                            if ($scrollBar.find(".handle").height() == $scrollBar.height()) {
                                $scrollBar.hide();
                            }
                            else {
                                $scrollBar.show();
                            }
                            if ($(window).innerWidth() > 659) {
                                self.maxWindowHeight($(window).innerHeight() * 0.33);
                            }
                            else {
                                self.maxWindowHeight($(window).innerHeight() - (44 + 84 + 102));
                            }
                            self.sly.reload();
                        });
                    };
                    this.close = function () {
                        _this.noBodyScrollbar(false);
                        _this.isVisible(false);
                        _this.mobileBack("");
                        _this.headline("");
                        _this.content("");
                        _this.buttonClose("");
                        if (_this.onAfterCloseCallback) {
                            _this.onAfterCloseCallback();
                        }
                        $(window).unbind("keydown", _this.keyDownHandler);
                    };
                    this.isVisible = ko.observable(false);
                    this.headline = ko.observable("");
                    this.mobileBack = ko.observable("");
                    this.content = ko.observable("");
                    this.buttonClose = ko.observable("");
                    this.noBodyScrollbar.subscribe(function (s) {
                        s ? $("body").css("overflow", "hidden") : $("body").css("overflow", "auto");
                    });
                }
                return SimpleModalWindow;
            })();
            Modals.SimpleModalWindow = SimpleModalWindow;
        })(Modals = K2NGTools.Modals || (K2NGTools.Modals = {}));
    })(K2NGTools = Skoda.K2NGTools || (Skoda.K2NGTools = {}));
})(Skoda || (Skoda = {}));
//# sourceMappingURL=simpleModalWindow.js.map