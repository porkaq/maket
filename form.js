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
function openModal()
{
    $('.modal').css('display', 'block');
}
function closeModal()
{
    $('.modal').css('display', 'none');
}
