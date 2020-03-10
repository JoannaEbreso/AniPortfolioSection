$('document').ready(function(){
        // Show the first tab and hide the rest
        // $('#dev').addClass('bg-visited');
        $('.tab-content').hide();
        $('.tab-content:first').show();

        // Click function design
        $('#design').click(function(){
        $('.btn-black').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $('.tab-content:nth-of-type(2)').show();

        });
        // Click function development
        $('#dev').click(function(){
        $('.btn-black').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $('.tab-content:first').show();

        });

})