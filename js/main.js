var formValidation = {
  
  init: function() {
    this.cacheDOM();
    this.bindEvents();
    this.hideSubmit();
},
  
  //Cache DOM
  cacheDOM: function() {
    this.$form = $('form'),
    this.$inputs = this.$form.find('input'),
    this.$submit = this.$form.find('button');
  },


  //Bind events
  bindEvents: function() {
    this.$inputs.on('change',this.validateAll.bind(this));
  },


  //validation methods
  //var countCorrect;

  validateAll: function() {
    this.countCorrect = 0;
    this.$inputs.each(this.validateSingle);
    this.countCorrect === this.$inputs.length ? this.showSubmit() : this.hideSubmit();
  },

  validateSingle: function() {
    var $field = $(this),
        type = $field.attr('type'),
        value = $field.val();
    if(value.length){
      switch(type){
        case 'text':
          if (/^[a-zA-Z\s]+$/.test(value)){
            formValidation.markCorrect($field);
          }
          else{
            formValidation.markIncorrect($field);
          }
          break;
        case 'number':
          value % 1 === 0 && value > 1900 && value < 2010 ? formValidation.markCorrect($field) : formValidation.markIncorrect($field);
          break;
        case 'email':
          /^\w+@\w+\.\w{2,4}$/.test(value) ? formValidation.markCorrect($field) : formValidation.markIncorrect($field);
          break;
      }
    }

  },

  //Trigger DOM events

  showSubmit: function() {
    this.$submit
    .attr('disable',false)
    .addClass('submitBtnOn')
    .removeClass('submitBtnOff');
  },

  hideSubmit: function() {
    this.$submit
    .attr('disabled','disabled')
    .removeClass('submitBtnOn')
    .addClass('submitBtnOff');
  },

  markCorrect: function(field) {
    field
      .removeClass('incorrect')
      .addClass('correct');
    field
      .closest('.pole')
      .removeClass('incorrect')
      .addClass('correct');

    this.countCorrect++;
  },

  markIncorrect: function(field) {
    field
      .removeClass('correct')
      .addClass('incorrect');
    field
      .closest('.pole')
      .removeClass('correct')
      .addClass('incorrect');
  }
}
$(document).ready(formValidation.init());
