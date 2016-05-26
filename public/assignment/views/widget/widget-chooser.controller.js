(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController);

    function WidgetChooserController() {
        var vm = this;

        vm.createWidget = createWidget;

        vm.widgets = [
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p class="first-text">Why has Silicon Valley billionaire Peter Thiel <a href="http://gawker.com/right-wing-billionaire-peter-thiel-is-on-a-mission-to-d-1778825033">spent upwards of $10 million</a> funding third-party lawsuits against Gawker? If you believe his interview with <a href="http://www.nytimes.com/2016/05/26/business/dealbook/peter-thiel-tech-billionaire-reveals-secret-war-with-gawker.html?_r=0" rel="noopener" target="_blank">the <em>New York Times</em></a>, Thiel’s willingness to bankroll litigation brought by Hulk Hogan and other plaintiffs stems from several posts, including <a href="http://gawker.com/335894/peter-thiel-is-totally-gay-people">a 2007 item</a> about…<span class=" read-more-placeholder"></span></p>'},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        function createWidget(widgetType) {
            var newWidget = {
                _id: (new Date()).getTime(),
                widgetType: widgetType
            };
            widgets.push(newWidget);
        }
    }
})();