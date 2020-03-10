$('document').ready(function(){
        // Show the first tab and hide the rest
        $('.tab-content').hide();
        $('.tab-content:first').show();

        // Click function design
        $('#design').click(function(){
        $('.tab-content').hide();
        $('.tab-content:nth-of-type(2)').show();

        });
        // Click function development
        $('#dev').click(function(){
        $('.tab-content').hide();
        $('.tab-content:first').show();

        });

})