var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var album_service_1 = require('./album.service');
var route_config_1 = require('./route.config');
var DashboardComponent = (function () {
    function DashboardComponent(_albumService, _router) {
        this._albumService = _albumService;
        this._router = _router;
    }
    DashboardComponent.prototype.onInit = function () {
        return this.albums = this.getPopularAlbums();
    };
    DashboardComponent.prototype.gotoDetail = function (album) {
        this._router.navigate([("/" + route_config_1.Routes.album.as), { id: album.id }]);
    };
    DashboardComponent.prototype.getPopularAlbums = function () {
        var _this = this;
        this._albumService.getPopularAlbums()
            .then(function (albums) {
            return _this.albums = albums;
        });
        return this.albums;
    };
    DashboardComponent = __decorate([
        angular2_1.Component({
            selector: 'ms-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css'],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map