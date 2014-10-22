'use strict';

app.controller('MainCtrl', function () {
     
    var pullUpModel = {
        'name':'Pull Up',
        'leftHand': 1,
        'rightHand': 1,
        'reps':3,
        'break':3
    };

     var exercises = {
        'pullUp': pullUpModel,
        'kneeRaises':'Knee Raises',
        'deadHang':'Dead Hang',
        'bentArmHang': 'Bent Arm Hang',
        'lHang': 'L Hang',
        'frontLeaver': 'Front Leaver',
        'pushUps': 'Push Ups',
        'sitUps': 'Sit Ups',
        'plank': {
            'side':'Side',
            'front':'Front'
        }
     };

     // one arm pullups deadhangs right: (n) left: 0

     console.log(exercises);

     var workout1 = [
        {
            'exercise':exercises.pullUp,
            'leftHand':1,
            'rightHand':1,
            'reps':3,
            'break':3
        },
        {
            'exercise':exercises.pullUp,
            'leftHand':1,
            'rightHand':1,
            'reps':6,
            'break':3
        }
    ];

     console.log(workout1);
});