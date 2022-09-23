   $('.list').click(function(){
       const value = $(this).attr('data-filter');
        $('.list-item').not('.'+value).hide(1000);
        $('.list-item').filter('.'+value).show(1000);
    });