ymaps.ready(init);
function init() {
    var map = new ymaps.Map('map', {
        center: [68, 100],
        zoom: 1,
        type: 'yandex#satellite',
        controls: ['zoomControl']
    },{
        restrictMapArea: [[10, 10], [85,-160]]
    });
    map.controls.get('zoomControl').options.set({size: 'small'});
    var objectManager = new ymaps.ObjectManager();
    ymaps.borders.load('RU', {
        lang: 'ru',
        quality: 2
    }).then(function (result) {
        var districtCollections = {};
        result.features.forEach(function (feature) {
            var iso = feature.properties.iso3166;
            feature.id = iso;
            districtCollections[iso] = new ymaps.GeoObjectCollection(null, {
                strokeOpacity: 0.3,
                fillOpacity: 0.3,
                hintCloseTimeout: 0,
                hintOpenTimeout: 0
            });
            districtCollections[iso].add(new ymaps.GeoObject(feature));
            districtCollections[iso].description = regionData[iso];
        });
        var highlightedDistrict;
        for (var districtName in districtCollections) {
            map.geoObjects.add(districtCollections[districtName]);
            // При наведении курсора мыши будем выделять федеральный округ.
            districtCollections[districtName].events.add('mouseenter', function (event) {
                var district = event.get('target').getParent();
                district.options.set({fillOpacity: 1});
            });
            // При выводе курсора за пределы объекта вернем опции по умолчанию.
            districtCollections[districtName].events.add('mouseleave', function (event) {
                var district = event.get('target').getParent();
                if (district !== highlightedDistrict) {
                    district.options.set({fillOpacity: 0.3});
                }
            });
            // Подпишемся на событие клика.
            districtCollections[districtName].events.add('click', function (event) {
                var target = event.get('target');
                var district = target.getParent();
                map_app.$data.number = district.description.population;
                // Если на карте выделен федеральный округ, то мы снимаем с него выделение.
                if (highlightedDistrict) {
                    highlightedDistrict.options.set({fillOpacity: 0.3})
                }
                // Выделим федеральный округ.
                district.options.set({fillOpacity: 1});
                // Сохраним ссылку на выделенный федеральный округ.
                highlightedDistrict = district;
            });
        }
    })
}