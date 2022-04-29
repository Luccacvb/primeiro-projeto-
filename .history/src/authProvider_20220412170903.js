<input id="night-mode" class="lamp" type="checkbox" aria-label="night-mode" />;

const nightMode = document.querySelector('#night-mode');

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');
});

// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode');

// caso tenha o valor no localStorage
if (nightModeStorage) {
  // ativa o night mode
  document.documentElement.classList.add('night-mode');

  // já deixa o input marcado como ativo
  nightMode.checked = true;
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');

  // se tiver a classe night-mode
  if (document.documentElement.classList.contains('night-mode')) {
    // salva o tema no localStorage
    localStorage.setItem('gmtNightMode', true);
    return;
  }
  // senão remove
  localStorage.removeItem('gmtNightMode');
});

const AuthProvider = {
  // chamado quando o usuário tenta fazer o login

  login: ({ username }) => {
    localStorage.setItem('username', username);

    //aceitar todas as combinações de nome de usuário/palavra-passe
    return Promise.resolve();
  },
  // chamado quando o usuário clica no botão de logout
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  // chamado quando a API retorna um erro
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // chamado quando o usuário navega para um novo local, para verificar a autenticação
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  },
  // chamado quando o usuário navega para um novo local, para verificar as permissões / funções
  getPermissions: () => Promise.resolve(),
};
export default AuthProvider;
