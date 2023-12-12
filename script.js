initMap();
async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;
    $( '#map' ).css( 'height', '400px' );

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [52.262615, 104.261490],

                // Уровень масштабирования
                zoom: 18
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
    map.setLocation({
      center: [52.262615, 104.261490],
      zoom: 18
    });
}
//<--temp
function changeColor ( params ) 
{
    $( 'body' ).css( params.css_var, params.color );
}
$( document ).ready( () => {
    function changeDefault ( params = {} )
    {
        if ( params == {} || params == true ) {
            $( '#color1' )[0].value = ( '' + $(':root').css('--bg-color') );
            $( '#color1' ).trigger( 'input' );
            $( '#color2' )[0].value = ( '' + $(':root').css('--bg2-color') );
            $( '#color2' ).trigger( 'input' );
            $( '#color4' )[0].value = ( '' + $(':root').css('--text-color') );
            $( '#color4' ).trigger( 'input' );
            $( '#color5' )[0].value = ( '' + $(':root').css('--darker-text-color') );
            $( '#color5' ).trigger( 'input' );
            $( '#color6' )[0].value = ( '' + $(':root').css('--active-text-color') );
            $( '#color6' ).trigger( 'input' );
            $( '#color7' )[0].value = ( '' + $(':root').css('--light-text-color') ); 
            $( '#color7' ).trigger( 'input' );
        } else {
            $( '#color1' )[0].value = params.color1;
            $( '#color1' ).trigger( 'input' );
            $( '#color2' )[0].value = params.color2;
            $( '#color2' ).trigger( 'input' );
            $( '#color4' )[0].value = params.color4;
            $( '#color4' ).trigger( 'input' );
            $( '#color5' )[0].value = params.color5;
            $( '#color5' ).trigger( 'input' );
            $( '#color6' )[0].value = params.color6;
            $( '#color6' ).trigger( 'input' );
            $( '#color7' )[0].value = params.color7;
            $( '#color7' ).trigger( 'input' );
            $( '#radius' )[0].value = params.radius;
            $( '#radius' ).trigger( 'input' );
        }
        
    }
    $( 'input[name="radio"][value="1"]' ).on( 'click', e => { changeDefault( true ) } );
    $( 'input[name="radio"][value="2"]' ).on( 'click', e => { changeDefault( {'color1': '#545454', 'color2': '#A9CEF4', 'color4': '#A9CEF4', 'color5': '#545454', 'color6': '#4976FD', 'color7': '#A9CEF4', 'radius': '15'} ) } );
    $( 'input[name="radio"][value="3"]' ).on( 'click', e => { changeDefault( {'color1': '#545454', 'color2': '#6da6df', 'color4': '#6da6df', 'color5': '#545454', 'color6': '#1544d1', 'color7': '#6da6df', 'radius': '15'} ) } );

    $( '#color1' ).on( 'input', (e) => { changeColor( {'css_var': '--bg-color', color: e.target.value } ) } );
    $( '#color2' ).on( 'input', (e) => { changeColor( {'css_var': '--bg2-color', color: e.target.value } ) } );
    $( '#color4' ).on( 'input', (e) => { changeColor( {'css_var': '--text-color', color: e.target.value } ) } );
    $( '#color5' ).on( 'input', (e) => { changeColor( {'css_var': '--darker-text-color', color: e.target.value } ) } );
    $( '#color6' ).on( 'input', (e) => { changeColor( {'css_var': '--active-text-color', color: e.target.value } ) } );
    $( '#color7' ).on( 'input', (e) => { changeColor( {'css_var': '--light-text-color', color: e.target.value } ) } );
    $( '#radius' ).on( 'input', (e) => { $( 'body' ).css( '--border-radius', e.target.value + 'px' ) } );
    //temp-->
} );
