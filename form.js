$(document).ready(function () {
    $('.close-modal').on('click', () => {closeModal();})
    function handleFormSubmit ( e ) 
    {
        e.preventDefault();
        let formData = new FormData( $( '.zaselenie' )[0] );
        JSON.stringify(Object.fromEntries(formData));
        $.ajax({
            type: "post",
            url: "/",
            data: "formData",
            dataType: "JSON",
            // success: function ( response ) {
                
            // }
        });
    }
    $( '#zaselenie' ).on( {
        click: () => {
            let formData = new FormData(  )
            JSON.stringify(Object.fromEntries(formData));
        }
    } )
    $( '.zaselenie' )[0].addEventListener('submit', handleFormSubmit );
});
var openModal = function ()
{
    $('.modal').addClass('active');
}
var closeModal = function()
{
    $('.modal').removeClass('active');
}
