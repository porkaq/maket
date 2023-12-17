initMap();
let defaultSchemeLayer;
async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;
    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [104.261908, 52.262699],

                // Уровень масштабирования
                zoom: 17
            }
        }
    );

    $( '#map' ).css( 'height', '400px');
    // Добавляем слой для отображения схематической карты
    defaultSchemeLayer = new YMapDefaultSchemeLayer();
    map.addChild(defaultSchemeLayer);
}
$( document ).ready( () => {
        $( '.url' ).each( (i, e) => {
            let $e = $( e );
            let params = JSON.parse( $( e ).data( 'params' ).replace( /\'/gm, '"' ) );
            if ( params != undefined && params.url != undefined ) {
                $e.on( 'click', (checked_el) => {
                    console.log(checked_el);
                    window.location.href = params.url;
                } )
            }
        } )
        $( '.chat-widget' ).on({
        'click': () => {
            $( '.chat-widget' ).toggleClass( 'none' );
            $( '.chat-wrapper' ).toggleClass( 'none' );
        }
    })
    $( '.chat-close' ).on({
        'click': () => {
            $( '.chat-wrapper' ).toggleClass( 'none' );
            $( '.chat-widget' ).toggleClass( 'none' );
        }
    })
    $( '.color-scheme-input' ).on({
        'change': function(e){
            if ( this.checked ) {
                defaultSchemeLayer.update({theme: 'dark'});
                $( 'body' ).addClass( 'night' );
            } else {
                defaultSchemeLayer.update({theme: 'light'});
                $( 'body' ).removeClass( 'night' );
            }
            
        }
    })
} );
