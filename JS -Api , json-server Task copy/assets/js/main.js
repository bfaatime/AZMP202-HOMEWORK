document.addEventListener('DOMContentLoaded', function () {

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
      button.addEventListener('click', function () {
          Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to undo this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                  const card = button.closest('.card');
                  card.remove();

                  Swal.fire('Deleted!', 'The blog post has been deleted.', 'success');
              }
          });
      });
  });

  const editButtons = document.querySelectorAll('.edit-btn');
  editButtons.forEach(button => {
      button.addEventListener('click', function () {
          const card = button.closest('.card');
          
          const title = card.querySelector('h1');
          const description = card.querySelector('h2');

          title.setAttribute('contenteditable', 'true');
          description.setAttribute('contenteditable', 'true');

          button.textContent = 'Save';

          button.removeEventListener('click', arguments.callee);
          button.addEventListener('click', function () {
              title.setAttribute('contenteditable', 'false');
              description.setAttribute('contenteditable', 'false');

              button.textContent = 'EDIT';

              Swal.fire('Saved!', 'Your changes have been saved.', 'success');
          });
      });
  });

});
