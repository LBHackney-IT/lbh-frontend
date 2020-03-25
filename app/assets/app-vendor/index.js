function createHTMLItem() {
  var buttons = document.querySelectorAll('.create-form-add-item');
  if (buttons.length > 0) {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener('click', function(e) {
        handleButtonClick(e);
      });
    }
  }
}

function handleButtonClick(e) {
  var button = e.target;
  var group = e.target.previousElementSibling;
  var fieldset = group.parentElement;
  var newGroup = group.cloneNode(true);
  newGroup.classList.add('js-created');
  var previouslyCreated = newGroup.querySelectorAll('.js-created');
  for (var x = 0; x < previouslyCreated.length; x++) {
    previouslyCreated[x].parentElement.removeChild(previouslyCreated[x]);
  }
  var formGroups = newGroup.querySelectorAll('.lbh-form-group');
  var index = fieldset.childElementCount - 3;
  // If is inner most child
  if (group.querySelectorAll('.lbh-button').length > 0) {
    for (var i = 0; i < formGroups.length; i++) {
      var input = formGroups[i].querySelector('input');
      var oldInputId = input.getAttribute('id');
      var firstIndexId = oldInputId.indexOf(index);
      var inputId = oldInputId.substr(0, firstIndexId) + (index + 1) + oldInputId.substr(firstIndexId + 1);
      var oldInputName = input.getAttribute('name');
      var firstIndexName = oldInputName.indexOf(index);
      var inputName = oldInputName.substr(0, firstIndexName) + (index + 1) + oldInputName.substr(firstIndexName + 1);
      var oldHintId = formGroups[i].querySelector('.lbh-hint').getAttribute('id');
      var firstIndexHint = oldHintId.indexOf(index);
      var hintId = oldHintId.substr(0, firstIndexHint) + (index + 1) + oldHintId.substr(firstIndexHint + 1);
      formGroups[i].querySelector('input').setAttribute('id', inputId);
      formGroups[i].querySelector('input').setAttribute('name', inputName);
      formGroups[i].querySelector('input').value = '';
      formGroups[i].querySelector('input').setAttribute('aria-describedby', hintId);
      formGroups[i].querySelector('label').setAttribute('for', inputId);
      formGroups[i].querySelector('.lbh-hint').setAttribute('id', hintId);
    }
  // Else it has a recursive child
  } else {
    for (var i = 0; i < formGroups.length; i++) {
      var input = formGroups[i].querySelector('input');
      var oldInputId = input.getAttribute('id');
      var lastIndexId = oldInputId.lastIndexOf(index);
      var inputId = oldInputId.substr(0, lastIndexId) + (index + 1) + oldInputId.substr(lastIndexId + 1);
      var oldInputName = input.getAttribute('name');
      var lastIndexName = oldInputName.lastIndexOf(index);
      var inputName = oldInputName.substr(0, lastIndexName) + (index + 1) + oldInputName.substr(lastIndexName + 1);
      var oldHintId = formGroups[i].querySelector('.lbh-hint').getAttribute('id');
      var lastIndexHint = oldHintId.lastIndexOf(index);
      var hintId = oldHintId.substr(0, lastIndexHint) + (index + 1) + oldHintId.substr(lastIndexHint + 1);
      formGroups[i].querySelector('input').setAttribute('id', inputId);
      formGroups[i].querySelector('input').setAttribute('name', inputName);
      formGroups[i].querySelector('input').value = '';
      formGroups[i].querySelector('input').setAttribute('aria-describedby', hintId);
      formGroups[i].querySelector('label').setAttribute('for', inputId);
      formGroups[i].querySelector('.lbh-hint').setAttribute('id', hintId);
    }
  }
  
  fieldset.insertBefore(newGroup, e.target);
  var buttons = newGroup.querySelectorAll('button');
  if (buttons.length > 0) {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener('click', function(e) {
        handleButtonClick(e);
      });
    }
  }
}

createHTMLItem();