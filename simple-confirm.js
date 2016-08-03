var confirmModule = angular.module('simpleConfirm', ['mgcrea.ngStrap']);

confirmModule.value('$confirmDefaults', {
    template: '<div class="modal" tabindex="-1" role="dialog">' +
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<div class="modal-header" ng-show="data.title">' +
    '<button type="button" class="close" ng-click="$hide()">&times;</button>' +
    '<h4 class="modal-title">{{data.title}}</h4>' +
    '</div>' +
    '<div class="modal-body" ><span ng-style="{fontSize:\'15px\'}">{{data.content}}</span></div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-default" ng-click="answer(\'no\')">{{ data.cancel }}</button>' +
    '<button type="button" class="btn btn-danger" ng-click="answer(\'yes\')">{{ data.confirm }}</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>',
    placement: 'center',
    defaultLabels: {
        title: 'Confirm',
        content: 'Are you sure?',
        cancel: 'Cancel',
        confirm: 'Confirm'
    }
});

confirmModule.service('$confirm', function($modal, $rootScope, $q, $confirmDefaults) {
    var settings = angular.copy($confirmDefaults);
    settings.show = false;

    if ('templateUrl' in settings && 'template' in settings) {
        delete settings.template;
    }

    var scope = $rootScope.$new();
    scope.data = settings.defaultLabels;

    scope.answer = function(res) {
        deferred.resolve(res);
        confirm.hide();
    };

    settings.scope = scope;

    var confirm = $modal(settings);
    var parentShow = confirm.show;
    confirm.show = function(data){
        scope.data = angular.extend(scope.data, data);
        deferred = $q.defer();
        parentShow();
        return deferred.promise;
    };

    return confirm;
});