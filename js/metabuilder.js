/*
 * MetaBuilder: The Engine behind SquareOne
 *
 * Copyright: Andres Buzzio https://andresbuzzio.github.io/portfolio
 *
 */

// DRAG & SNAP.

$( function() {
$( "#draggable-section" ).draggable({ snap: ".ui-widget-header" });
} );


// DRAG & DROP.

$( function() {
    $( "#draggable-section" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );


// RESIZE ME.
$( function() {
    $( "#resizable" ).resizable();
  } );

// EDITABLE H1.

$(function(){
    var $div=$('h1'), isEditable=$div.is('.editable');
    $('h1').prop('contenteditable',!isEditable).toggleClass('editable');
})

// EDITABLE TEXT JUMBOTRON.

$(function(){
    var $div=$('p.the-title'), isEditable=$div.is('.editable');
    $('p.the-title').prop('contenteditable',!isEditable).toggleClass('editable');
})

// EDITABLE CALL-TO-ACTION JUMBOTRON.

$(function(){
    var $div=$('.btn-primary'), isEditable=$div.is('.editable');
    $('.btn-primary').prop('contenteditable',!isEditable).toggleClass('editable');
})

// EDITABLE BRAND.

$(function(){
    var $div=$('.navbar-brand'), isEditable=$div.is('.editable');
    $('.navbar-brand').prop('contenteditable',!isEditable).toggleClass('editable');
})

// SLIDER OPACITY.

    $(document).ready(function() {
        //Step 1: set up the slider with some options. The valid values for opacity are 0 to 1
        //Step 2: Bind an event so when you slide the slider and stop, the following function gets called
        $('#slider').slider({ min: 0, max: 1, step: 0.1, value: 1 })
            .bind("slidechange", function() {
                //get the value of the slider with this call
                var o = $(this).slider('value');
                //the element to change with an attribute
                var e = '#' + $(this).data('wjs-element');
                // $(e).css('background-color', 'rgba(0, 0, 0, ' + o + ')');
                $(e).css('opacity', o);
            });
    });

    // OPACITY SLIDER ON //

    $('.editorOpacity').click(function() {
    $('#box-slider').addClass ('animated fadeIn');
    $('#box-slider').removeClass ('fadeOut');
    $('#box-slider').css('display', 'block');
    $('.editorOpacityOff').css('display', 'block');
    $('.editorOpacity').css('display', 'none');
    $('#slider').css('display', 'block');
    });

    // OPACITY SLIDER OFF //

    $('.editorOpacityOff').click(function() {
    $('#box-slider').addClass ('fadeOut');
    $('#box-slider').removeClass ('fadeIn');
    $('#box-slider').css('display', 'none');
    $('.editorOpacity').css('display', 'block');
    $('.editorOpacityOff').css('display', 'none');
    $('#slider').css('display', 'none');
    });

// TRIGGER EDITOR OFF  < //

$('.editorClose').click(function() {
$('#editor').removeClass ('slideInLeft');
$('#editor').addClass ('slideOutLeft');
$('.editorOpen').css ('display', 'block');
$('.editorClose').css ('display', 'none');
});

// TRIGGER EDITOR ON  > //

$('.editorOpen').click(function() {
$('#editor').removeClass ('slideOutLeft');
$('#editor').addClass ('slideInLeft');
$('.editorOpen').css ('display', 'none');
$('.editorClose').css ('display', 'block');
});

// TRIGGER EDITOR RIGHT OFF  > //

$('.editorCloseRight').click(function() {
$('#editorRight').removeClass ('slideInRight');
$('#editorRight').addClass ('slideOutRight');
$('.editorOpenRight').css ('display', 'block');
$('.editorCloseRight').css ('display', 'none');
});

// TRIGGER EDITOR RIGHT ON  < //

$('.editorOpenRight').click(function() {
$('#editorRight').removeClass ('slideOutRight');
$('#editorRight').addClass ('slideInRight');
$('.editorOpenRight').css ('display', 'none');
$('.editorCloseRight').css ('display', 'block');
});

// COLOR PICKER // DAY 06

$('#header').minicolors()

// update table colour after changes in the colour picker
$("#header").on('change', function() {
var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

$('.colourChosen').attr('style', newCol);

});

// DELETE JUMBOTRON.

$(document).ready(function() {

$('.editortrash').click(function() {
$("#header").hide().delay(500).fadeOut();
});

});

// BROWSE IMAGES > //

$('.editorImages').click(function() {
$('#browse').addClass ('animated fadeIn');
$('#browse').css('display', 'block');
$('.editorImages').css('display', 'none');
$('.editorImagesOpen').css('display', 'block');
});

// BROWSE IMAGES < //

$('.editorImagesOpen').click(function() {
$('#browse').addClass ('fadeIn');
$('#browse').removeClass ('fadeOut');
$('#browse').css ('display', 'none');
$('.editorImages').css('display', 'block');
$('.editorImagesOpen').css('display', 'none');
});

// UPLOAD IMAGE

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#header-image')
                    .attr('src', e.target.result)
                    .width('100%')
                    .height('auto');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

// H1 EDITOR.

$(function() {
    $("h1").focus( function() {
        $(".h1-editor").css("display","block");
        $(".h1-editor").addClass("animated slideInRight");
        $('.editorCloseRight').css("display","block");
    });
});

// H1 ALIGNMENT + FONT WEIGHT

$('.alignMeLeft').click(function() {
$('h1').css ('text-align', 'left');
});

$('.alignMeRight').click(function() {
$('h1').css ('text-align', 'right');
});

$('.alignMeCenter').click(function() {
$('h1').css ('text-align', 'center');
});

$('.alignMeJustify').click(function() {
$('h1').css ('text-align', 'justify');
});

$('.boldMe').click(function() {
$('h1').css ('font-weight', '700');
});
