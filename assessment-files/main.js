// functionality for showing/hiding the comments section

const button = document.querySelector('.show-hide');
const wrapper = document.querySelector('.comment-wrapper');

wrapper.style.display = 'none';
button.setAttribute('aria-expanded', 'false');

button.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', String(!isOpen));
  wrapper.style.display = isOpen ? 'none' : 'block';
  button.textContent = isOpen ? 'Show comments' : 'Hide comments';
});

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
