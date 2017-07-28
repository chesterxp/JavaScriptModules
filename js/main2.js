var person = {
  name:'Michał',
  sayName: function() {
    console.log(this.name);
  }
}

////Cache DOM
//
//var $form = $('form'),
//    $inputs = $form.find('input'),
//    $submit = $form.find('button');
//
////Bind events
//
//$inputs.on('change',validateAll);
//
////validation functions
//var countCorrect;
//
//function validateAll(){
//  countCorrect = 0;
//  $inputs.each(validateSingle);
//  countCorrect === $inputs.length ? showSubmit() : hideSubmit();
//}
//
//function validateSingle(){
//  var $field = $(this),
//      type = $field.attr('type'),
//      value = $field.val();
//  if(value.length){
//    switch(type){
//      case 'text':
//        if (/^[a-zA-Z\s]+$/.test(value)){
//          markCorrect($field);
//        }
//        else{
//          markIncorrect($field);
//        }
//        break;
//      case 'number':
//        value % 1 === 0 && value > 1900 && value < 2010 ? markCorrect($field) : markIncorrect($field);
//        break;
//      case 'email':
//        /^\w+@\w+\.\w{2,4}$/.test(value) ? markCorrect($field) : markIncorrect($field);
//        break;
//    }
//  }
//
//}
//
////Trigger DOM events
//
//function showSubmit(){
//  $submit
//  .attr('disable',false)
//  .addClass('submitBtnOn')
//  .removeClass('submitBtnOff');
//}
//
//function hideSubmit(){
//  $submit
//  .attr('disabled','disabled')
//  .removeClass('submitBtnOn')
//  .addClass('submitBtnOff');
//}
//
//function markCorrect(field){
//  field
//    .removeClass('incorrect')
//    .addClass('correct');
//  field
//    .closest('.pole')
//    .removeClass('incorrect')
//    .addClass('correct');
//  
//  countCorrect++;
//}
//
//function markIncorrect(field){
//  field
//    .removeClass('correct')
//    .addClass('incorrect');
//  field
//    .closest('.pole')
//    .removeClass('correct')
//    .addClass('incorrect');
//}
//
//hideSubmit();