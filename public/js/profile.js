const newFormHandler = async (event) => {
  event.preventDefault();
  const userName = document.querySelector('#userName').value.trim();
 const blog_name = document.querySelector('#blog_name').value.trim();
  const blog_description = document.querySelector('#blog_description').value.trim();

  if (userName && blog_name && blog_description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ userName, blog_name, blog_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blog');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/blog');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
