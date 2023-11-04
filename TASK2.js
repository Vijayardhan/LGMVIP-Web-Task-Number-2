const getUsersBtn = document.getElementById('getUsersBtn');
const userGrid = document.getElementById('userGrid');
const loader = document.getElementById('loader');

// "Get Users" button
getUsersBtn.addEventListener('click', getUsers);

// fetch users 
function getUsers() {
  showLoader();

  // delay of 2 seconds
  setTimeout(() => {
    fetch('https://reqres.in/api/users?page=1') 
      .then(response => response.json())
      .then(data => {
        hideLoader();
        displayUsers(data.data);
      })
      .catch(error => {
        hideLoader();
        console.error('Error fetching users:', error);
      });
  }, 2000);
}

// display users
function displayUsers(users) {
  userGrid.innerHTML = '';
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${user.avatar}" alt="${user.first_name}" />
      <h3>${user.first_name} ${user.last_name}</h3>
      <p>Email: ${user.email}</p>
    `;
    userGrid.appendChild(card);
  });
}

// loader show
function showLoader() {
  loader.classList.remove('hide');
}

// loader hide
function hideLoader() {
  loader.classList.add('hide');
}