# SimpleConfirm
A very simple Angular confirmation service using AngularStrap.

##Installing
Import the js file in your html with the proper path:

```html
<script src="<path>/simple-confirm.js" ></script >
```

Inject 'simpleConfirm' in your app:

```javascript
angular.module('myApp', ['mgcrea.ngStrap', 'simpleConfirm']);
```

##Using
Inject '$confirm' in any controller.

Call the service inside any function:

```javascript
$confirm.show({
    content: 'Are you sure you want to do that?'
}).then(function(res){
    if(res == "yes"){
        $scope.doIt();
    }
});
```

The function inside the "then" will be called after both confirm and cancel ("yes" or "no"), use if to verify the selected option.

The object argument for the "show" function will override defaults, thus allowing specific texts. Available texts and their defaults are:

- title: 'Confirm',
- content: 'Are you sure?',
- cancel: 'Cancel',
- confirm: 'Confirm'

To override all defaults use (with any of the available texts):

```javascript
app.run(function($confirmDefaults){
    $confirmDefaults.defaultLabels.cancel = 'Stop';
});
```
