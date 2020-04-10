$(document).ready(function () {
    $('#real_items').css('display', 'none');
    
    var i;
    for (i = 0; i < 8; i++) {
        $('#items').append('<div class="item_main_card item_card_border"><div class=" item_box_shadow img_container"><img class="item_img placeholder_img" src="" alt=""></div>' +
            '<div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0 col-md-3 placeholder_divs"></div><div class="col-md-7 placeholder_divs"></div></div>' +
            '<hr class="custom_line"><div class="chunk"><div class="deal_btn_pos m_b_10 col-md-4 placeholder_divs"></div></div>');
    }
})

$(window).load(function () {
    setTimeout(function () {
        $('#items').css('display', 'none');
        $('#real_items').css('display', 'flex');

    }, 1000)
    
    selected_sorting = 'popularity';
})

// placeholder divs
function show_placeholder_divs() {
    var i;
    for (i = 0; i < 5; i++) {
        $('#real_items').append('<div class="item_main_card item_card_border"><div class=" item_box_shadow img_container"><img class="item_img placeholder_img" src="" alt=""></div>' +
            '<div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0 col-md-3 placeholder_divs"></div><div class="col-md-7 placeholder_divs"></div></div>' +
            '<hr class="custom_line"><div class="chunk"><div class="deal_btn_pos m_b_10 col-md-4 placeholder_divs"></div></div>');
    }
}

function scroll_to_top() {
    $('html, body').animate({
        // scrollTop: window.scrollTo({top: 0, behavior: 'smooth'})
        scrollTop: $(".header_section").offset().top - 230

    }, 1000);
}

$('#show_more').on('click', function () {
    setTimeout(function () {
        var i;
        for (i = 0; i < 5; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/smart_band.jpeg" alt=""></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Buy Mi Smart Band - India No.1 Fitness Band</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
    }, 1000)
    
    
});

var selected_brands = [];
var selected_discounts = [];
var selected_categories = [];
var selected_sorting = [];
// ------------------------------------------------------------------------------
// Filters
$('.brands').on('click', function () {
    $('#real_items').html('');
    
    index = selected_brands.indexOf($(this).attr('id'));
    
    if (index > -1) {
        selected_brands.splice(index, 1);
    }else{
        selected_brands.push($(this).attr('id'));
    }
    console.log(selected_brands);
    // Call API and display result

    // 

    $('#items').css('display', 'flex');
    change_url();

    // dummy result
    setTimeout(function () {

        for (i = 0; i < 5; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/smart_band.jpeg" alt="Buy Mi Smart Band - India No.1 Fitness Band" title="Buy Mi Smart Band - India No.1 Fitness Band"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Buy Mi Smart Band - India No.1 Fitness Band</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    }, 1000)
    scroll_to_top();
})

$('.discounts').on('click', function () {
    $('#real_items').html('');

    index = selected_discounts.indexOf($(this).attr('id'));
    
    if (index > -1) {
        selected_discounts.splice(index, 1);
    }else{
        selected_discounts.push($(this).attr('id'));
    }
    console.log(selected_discounts);
    // Call API and display result

    // 

    // dummy result
    $('#items').css('display', 'flex');
    change_url();

    setTimeout(function () {

        for (i = 0; i < 5; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom" title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    }, 1000)
    
    var header_height = $('.header_section').outerHeight();

    scroll_to_top();
})
// Filters ends



// ------------------------------------------------------------------------------
// Sorting

// First Sort list
$('.popularity').on('click', function () {
    $('#real_items').html('');

    selected_sorting = 'popularity';
    $(".popularity").addClass('sort_selected');
    $(".low_high").removeClass('sort_selected');
    $(".high_low").removeClass('sort_selected');
    $(".newest").removeClass('sort_selected');

    $('#mob_sort_by').addClass('close_modal')

    console.log(selected_sorting);
    // Call API and display result

    // 

    // dummy result
    $('#items').css('display', 'flex');
    change_url();

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom" title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    },1000)
})

$('.low_high').on('click', function () {
    $('#real_items').html('');

    selected_sorting = 'low_to_high';
    $(".low_high").addClass('sort_selected');
    $(".popularity").removeClass('sort_selected');
    $(".high_low").removeClass('sort_selected');
    $(".newest").removeClass('sort_selected');

    $('#mob_sort_by').addClass('close_modal')

    console.log(selected_sorting);
    // Call API and display result

    // 

    // dummy result
    $('#items').css('display', 'flex');
    change_url();

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom" title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    },1000)
})

$('.high_low').on('click', function () {
    $('#real_items').html('');

    selected_sorting = 'high_to_low';
    $(".high_low").addClass('sort_selected');
    $(".popularity").removeClass('sort_selected');
    $(".low_high").removeClass('sort_selected');
    $(".newest").removeClass('sort_selected');

    $('#mob_sort_by').addClass('close_modal')

    console.log(selected_sorting);
    // Call API and display result

    // 
    // dummy result
    $('#items').css('display', 'flex');
    change_url();

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom" title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    },1000)
})

$('.newest').on('click', function () {
    $('#real_items').html('');

    selected_sorting = 'newest_first';
    $(".newest").addClass('sort_selected');
    $(".popularity").removeClass('sort_selected');
    $(".high_low").removeClass('sort_selected');
    $(".low_high").removeClass('sort_selected');

    $('#mob_sort_by').addClass('close_modal')

    console.log(selected_sorting);
    // Call API and display result

    // 
    // dummy result
    $('#items').css('display', 'flex');
    change_url();

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom" title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    },1000)
})
// First Sort list ends

// Second Sort list
$("select.secondary_sorts").change(function () {
    $('#real_items').html('');

    var selected_sorting = $(this).children("option:selected").val();
    console.log(selected_sorting);

    // Call API and display result

    // 

    // dummy result
    $('#items').css('display', 'flex');
    change_url();

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom" title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    },1000)
});
// Second Sort list ends



// ------------------------------------------------------------------------------
// Clearing the filters 
$('#clear_brands').on('click', function () {
    $('#real_items').html('');

    $(".brands").prop("checked", false);

    selected_brands = [];

    console.log(selected_brands);
    // Call API and display result

    // 
    // dummy result
    $('#items').css('display', 'flex');

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom" title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    }, 1000)

    scroll_to_top();
})

$('#clear_discounts').on('click', function () {
    $('#real_items').html('');

    $(".discounts").prop("checked", false);

    selected_discounts = [];

    console.log(selected_discounts);
    // Call API and display result

    // 
    // dummy result
    $('#items').css('display', 'flex');

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt=""></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    }, 1000)
    
    scroll_to_top();
})

$('#clear_cat').on('click', function () {
    
})

// all clears
$('#clear_all').on('click', function () {
    $('#real_items').html('');

    $(".brands").prop("checked", false);
    $(".discounts").prop("checked", false);

    $("#popularity").removeClass('sort_selected');
    $("#low_high").removeClass('sort_selected');
    $("#high_low").removeClass('sort_selected');
    $("#newest").removeClass('sort_selected');

    selected_brands = [];
    selected_discounts = [];
    selected_sorting = [];

    // dummy result
    $('#items').css('display', 'flex');

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt=""></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    }, 1000)
    
    scroll_to_top();
})


// Mobile js here --------------------------------------------------------------------------------------
$("#sort_by_div").on('click', function () {
    $('#mob_sort_by').css('display', 'block');
    $('#mob_sort_by').removeClass('close_modal')

})

$('#close_sort').on('click', function () {
    $('.modal').addClass('close_modal')
})
$('#clear_sort').on('click', function () {
    selected_sorting = [];

    apply_mob_filter(selected_categories, selected_brands, selected_discounts);
    $('.modal').addClass('close_modal')
})


$("#filter_by_div").on('click', function () {
    $('#mob_filter_by').css('display', 'block');
    $('#mob_filter_by').removeClass('close_modal')
})

$('#close_filter').on('click', function () {
    $('.modal').addClass('close_modal')
})
$('#clear_filter').on('click', function () {
    selected_categories = [];
    selected_brands = [];
    selected_discounts = [];

    $(".mob_brands").prop("checked", false);
    $(".mob_discounts").prop("checked", false);

    $('.modal').addClass('close_modal');
    apply_mob_filter(selected_categories, selected_brands, selected_discounts);

})


//open mob filter divs
$('#open_mob_cat').on('click', function () {
    $('#mob_cat_div').toggleClass('d_none')
})

$('#open_mob_brands').on('click', function () {
    $('#mob_brands_div').toggleClass('d_none')
})

$('#open_mob_discounts').on('click', function () {
    $('#mob_discounts_div').toggleClass('d_none')
})

$('.mob_brands').on('click', function () {    
    index = selected_brands.indexOf($(this).attr('id'));
    
    if (index > -1) {
        selected_brands.splice(index, 1);
    }else{
        selected_brands.push($(this).attr('id'));
    }
    console.log(selected_brands);
})

$('.mob_discounts').on('click', function () {
    index = selected_discounts.indexOf($(this).attr('id'));
    
    if (index > -1) {
        selected_discounts.splice(index, 1);
    }else{
        selected_discounts.push($(this).attr('id'));
    }
    console.log(selected_discounts);
})

$('#clear_brands_mob').on('click', function () {
    $('#mob_brands_div').toggleClass('d_none')
    $(".brands").prop("checked", false);

    selected_brands = [];

    console.log(selected_brands);
    apply_mob_filter(selected_categories, selected_brands, selected_discounts);

})

$('#clear_discounts_mob').on('click', function () {
    $('#mob_discounts_div').toggleClass('d_none')
    $(".discounts").prop("checked", false);

    selected_discounts = [];

    console.log(selected_discounts);
    apply_mob_filter(selected_categories, selected_brands, selected_discounts);

})

$('#clear_cat_mob').on('click', function () {
    $('#mob_cat_div').toggleClass('d_none')
    selected_categories = [];

    console.log(selected_categories);
    apply_mob_filter(selected_categories, selected_brands, selected_discounts);

})


$('#apply_filter').on('click', function () {
    $('#mob_cat_div').addClass('d_none')
    $('#mob_brands_div').addClass('d_none')
    $('#mob_discounts_div').addClass('d_none')

    apply_mob_filter(selected_categories, selected_brands, selected_discounts);
})

$('#apply_sort').on('click', function () {
    $('#mob_sort_by').addClass('close_modal')
})

function apply_mob_filter(selected_categories, selected_brands, selected_discounts) {
    change_url();

    $('#mob_filter_by').addClass('close_modal')

    $('#real_items').html('');

    // Call API and display result

    // 
    // dummy result
    $('#items').css('display', 'flex');

    setTimeout(function () {

        for (i = 0; i < 8; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt=""></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    }, 1000)

    scroll_to_top();
}

function change_url() {
    var new_url = '?view=gird';

    var cat_url = brand_url = disc_url = sort_url = '';

    if (selected_categories.length > 0) {
        checked_categories = selected_categories;
        checked_categories = checked_categories.join(',');
        cat_url = '&categories=' + checked_categories;
    }

    if (selected_brands.length > 0) {
        checked_brands = selected_brands;
        checked_brands = checked_brands.join(',');
        brand_url = '&brands=' + checked_brands;
    }

    if (selected_discounts.length > 0) {
        checked_disc = selected_discounts;
        checked_disc = checked_disc.join(',');
        disc_url = '&discounts=' + checked_disc;
    }
    
    if (selected_sorting != '') {
        sort_url = '&sort=' + selected_sorting;
    }

    filter_url = new_url + cat_url + brand_url + disc_url + sort_url;

    console.log(new_url + cat_url + brand_url + disc_url + sort_url);
    
    window.history.replaceState("", "All flipkart deals", filter_url);

}

$('.page-link').on('click', function () {
    var page = $(this).attr('id');

    console.log('page=' + page);

     // Call API and display result

    // 
    // dummy result
    $('#real_items').html('');
    $('#items').css('display', 'flex');

    setTimeout(function () {

        for (i = 0; i < 5; i++) {
            $('#real_items').append('<div class="item_main_card item_card_border "><div class=" item_box_shadow img_container"><img class="item_img" src="./images/products/camera.jpeg" alt=""></div>' +
                '<div class="offer_card"><p class="offer_text">40% &nbsp;OFF</p></div><div class="row item_detail_chunk font_size_14 sans_font"><div class="margin_10_0"><span class="striked_text">1990</span>' +
                '<span class="red_font">597/-</span><div><div><span class="item_title">Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom</span></div></div><hr class="custom_line"><div class="chunk">' +
                '<div class="deal_btn deal_btn_pos m_b_10"><a class="no_deco_text font_size_12 green_font " href="">Get Deal</a> </div> </div> </div>');
        }
        $('#items').css('display', 'none');

        $('#real_items').css('display', 'flex');

    }, 1000)

    scroll_to_top();
})