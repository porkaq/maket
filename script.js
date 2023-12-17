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
        'change': function(){
            console.log('s');
            defaultSchemeLayer.update({theme: 'dark'});
            $( 'body' ).toggleClass( 'night' );
        }
    })
} );
