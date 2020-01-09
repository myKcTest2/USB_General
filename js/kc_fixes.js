$('#p_city_another_label').hide();
$('#p_city_another').hide();

$('#done').on('click', function () {


  $('#my_reg').html("hi");

});

$('#renew').on('click', function () {


  let form_text = '<form id="reg_form" >        <div class="form-group">          <label for="p_name">Имя</label>          <input class="form-control" type="text" id="p_name" required>          <label for="p_surname">Фамилия</label>          <input class="form-control" type="text" id="p_surname" required>          <label for="p_age">Возраст</label>          <input class="form-control" type="text" id="p_age" required>          <label for="p_city">Город</label>          <select class="form-control" id="p_city">            <option>Кохтла-Ярве</option>            <option>Йыхви</option>            <option>Нарва</option>            <option>Нарва-Йыессу</option>            <option>Таллинн</option>            <option>Силламяе</option>            <option>Валга</option>            <option>Тарту</option>            <option>Тапа</option>            <option>Другой</option>          </select>          <label for="p_city_another" id="p_city_another_label">Впишите город</label>          <input class="form-control" type="text" id="p_city_another">          <label for="p_email">Ваш e-mail</label>          <input type="email" class="form-control" id="p_email" aria-describedby="emailHelp" required>        </div>        <hr>        <label for="p_arrive_method">Как я доберусь</label>        <div class="form-check">          <input class="form-check-input" type="radio" name="p_arrive_method" d="p_arrive_method1" value="option1" checked>          <label class="form-check-label" for="p_arrive_method1"> Своим ходом </label>        </div>        <div class="form-check">          <input class="form-check-input" type="radio" name="p_arrive_method" id="p_arrive_method2" value="option2">          <label class="form-check-label" for="p_arrive_method2"> На автобусе </label>        </div>        <div class="form-check">          <input class="form-check-input" type="radio" name="p_arrive_method" id="p_arrive_method3" value="option3">          <label class="form-check-label" for="p_arrive_method3"> Подсяду к кому-то в машину </label>        </div>        <hr>        <button type="submit" class="btn btn-primary">Зарегестрироватся</button>      </form>';


  $('#my_reg').html(form_text);
});

$('#p_city').on('change', function () {
  if ($("#p_city option:selected").text() == "Другой") {

    $('#p_city_another_label').show();
    $('#p_city_another').show();

  } else {
    $('#p_city_another_label').hide();
    $('#p_city_another').hide();


  }
});


$('#reg_form').submit(function (event) {

  event.preventDefault();

  let post_url = "./API/reg.php";
  let requiest_methor = "POST";


  let t_p_city = $("#p_city option:selected").text();

  if ($("#p_city option:selected").text() == "Другой") {
    t_p_city = 'Другой: ' + $('#p_city_another').val();
  }

  let t_parrive_method = "none";

  switch ($("input:checked").val()) {
    case 'option1':
      t_parrive_method = "Своим ходом";
      break;
    case 'option2':
      t_parrive_method = "На автобусе";
      break;
    case 'option3':
      t_parrive_method = "Подсяду к кому-то в машину";
      break;
  }


  let form_data_reworked = {
    'p_name': $('#p_name').val(),
    'p_surname': $('#p_surname').val(),
    'p_age': $('#p_age').val(),
    'p_email': $('#p_email').val(),
    'p_city': t_p_city,
    'p_arrive_method': t_parrive_method
  }


  $.ajax({
    url: post_url,
    type: requiest_methor,
    data: form_data_reworked,
    error: function () {
      let error_text = '<br><div class="alert alert-danger" role="alert">К сожалению что-то пошло не так. Повторите попытку. Если и она будет неудачно, то арегестрирутесь по телефону или напишите письмо.</div>'
      $('#my_reg').html(error_text);
    },
    success: function () {
      let success_text = '<br><div class="alert alert-success" role="alert">Поздравляю! Регистрация прошла успешна. Вам было высланно соответсвующие письмо на e-mail.</div>'
      $('#my_reg').html(success_text);
    }
  })

});
