const countries = ['Ukraine', 'Poland', 'Croatia', 'Montenegro', 'France', 'USA'];

const countriesPrice = [100, 200, 300, 400, 500, 600];

const filterCountry = totalMoney =>
  countries.filter((item, index) => countriesPrice[index] <= totalMoney);

const askMoney = () => {
  let userTotalMoney = Number(prompt('Яку суму ви готові витратити на тур?'));
  if (userTotalMoney < countriesPrice[0]) {
    alert(
      `Працюй наполегливіше, до мінімального туру вам не достатньо: ${
        countriesPrice[0] - userTotalMoney
      } $.`
    );
    askMoney();
  }
  const filteredCountry = filterCountry(userTotalMoney);
  alert(`Список країн на ваш бюджет: ${filteredCountry}`);
  let userChoice = prompt('Вкажіть країну куди хочете придбати тур?');
  const indexOfCountry = countries.indexOf(userChoice);
  alert(
    `Тур сплачений, вітаємо. Ваш залишок на рахунку становить: ${
      userTotalMoney - countriesPrice[indexOfCountry]
    }`
  );
};

const verification = registeredArray => {
  let userNameTruth = prompt('Авторизація: Введіть ваш логін');
  let userPassTruth = prompt('Авторизація: Введіть ваш пароль!');
  const {
    user: { login, password },
  } = registeredArray;
  login === userNameTruth && password === userPassTruth
    ? console.log('Авторизація успішна', askMoney())
    : verification(register());
};

const register = () => {
  let inputUserName = prompt('Введіть логін');
  let inputUserPass = prompt('Введіть пароль');
  const newArray = {
    user: {
      login: inputUserName,
      password: inputUserPass,
    },
  };

  return newArray;
};

verification(register());
