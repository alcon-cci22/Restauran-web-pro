


function openModal(modalId) {
  const openBtn = document.getElementById(`open${modalId}`);
  const modalContainer = document.getElementById(`modal_container${modalId}`);
  const closeBtn = document.getElementById(`close${modalId}`);

  openBtn.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
}

// Call the function for each modal
openModal(1);
openModal(2);
openModal(3);
openModal(4);
openModal(5);
openModal(6);





