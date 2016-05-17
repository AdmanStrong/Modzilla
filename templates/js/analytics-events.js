(function (w, d) {
    function trackOutboundLink(url) {
        ga('send', 'event', 'outbound', 'click', url, {
            'hitCallback': function () {}
        });
    }

    function trackInteriorLink(name) {
        ga('send', 'event', 'button', 'click', name);
    }
    
    function attachClickTracking() {
        var elems = d.querySelectorAll('a, input[type=submit], button, [data-track], [data-linktype]'),
            elem,
            len = elems.length;
        
        while(--len > -1){
            elem = elems[len];
            
            elem.addEventListener('click', function(){
                var datatrack = this.getAttribute('data-track')|| this.textContent || this.value || this.href || this.alt || 'unnamed event',
                    linktype = this.getAttribute('data-linktype');
                
                if(linktype && linktype == 'outbound'){
                    trackOutboundLink(datatrack);
                } else {
                    trackInteriorLink(datatrack);
                }
            });
        }
    }
    
    w.addEventListener('load', attachClickTracking);
}(window, document));