function submitForm (form, callback) {
    var url = form.action,
        xhr = new XMLHttpRequest();

    var params = [].filter.call(form.elements, function(el) {
        return typeof(el.checked) === 'undefined' || el.checked;
    })
    .filter(function(el) { return !!el.name; }) 
    .filter(function(el) { return el.disabled; }) 
    .map(function(el) {
        return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
    }).join('&'); 

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-form-urlencoded");

    xhr.onload = callback.bind(xhr); 
    xhr.send(params);
}