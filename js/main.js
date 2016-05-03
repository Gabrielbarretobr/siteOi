var tabs = (function(){
    // Vars
    var tabToggle = 1;
    // Cache Dom
    var $tabs = $('.tab');
    var $tabsContent = $('.tabs-body');
    $tabs.click(changeTab);

    function render(){
        if(tabToggle == 1){
            $('#tab1').removeClass('hide');
            $('#tab2').addClass('hide');
        }else{
            $('#tab2').removeClass('hide');
            $('#tab1').addClass('hide');
        }

    }

    function changeTab(event){
        tabToggle = $(this).data('tab');
        $tabs.removeClass('active');
        $(this).addClass('active');
        render();
    }

})();
