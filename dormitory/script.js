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
    $('.chat-on').on( 'click', () => { toggleModal( { name : 'chat' } ); } );
    $('.form-on').on( 'click', () => { toggleModal( { name : 'form' } ); } );
    $( '.chat-close' ).on({
        'click': () => {
            console.log('123');
            toggleModal( { name : 'chat' } );
        }
    })
    $( '.form-close' ).on({
        'click': () => {
            toggleModal( { name : 'form' } );
        }
    })
        $( '.url' ).each( (i, e) => {
            let $e = $( e );
            let params = JSON.parse( $( e ).data( 'params' ).replace( /\'/gm, '"' ) );
            if ( params != undefined && params.url != undefined ) {
                $e.on( 'click', () => {
                    window.location.href = '/maket/dormitory' + params.url;
                } )
            }
        } )
} );
var toggleModal = function ( params )
{
    $('.' + params.name ).toggleClass( 'none' );
    $( 'body' ).toggleClass( 'fixed' );
}
