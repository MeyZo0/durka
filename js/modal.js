(() => {
  const form = document.querySelector("#subscribe");
  const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
  };

  function disableScroll() {
      document.body.style.setProperty('overflow', 'hidden', 'important');
  }

  function enableScroll() {
      document.body.style.removeProperty('overflow');
  }

  function openModal() {
      refs.modal.classList.remove("is-hidden");
      disableScroll();
  }

  function closeModal() {
      refs.modal.classList.add("is-hidden");
      enableScroll();
  }

  refs.openModalBtn.forEach(element => {
      element.addEventListener("click", openModal);
  });
  refs.closeModalBtn.addEventListener("click", closeModal);

  form.addEventListener("submit", (e) => {
      e.preventDefault();

      var subscribeemail = document.getElementById("email").value;
      var subscribename = document.getElementById("name").value;
      var subscribephone = document.getElementById("phone").value;

      var subscribe = `New subscriber <b>${subscribename}</b> Email:<b>${subscribeemail}</b> Name: <b>${subscribename}</b>
  
      var token = "6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0";
      var chat_id = '969394372';
      var url = https://api.telegram.org/bot$%7Btoken%7D/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      console.log("Subscribe successfully sended!");
      form.reset();
      closeModal();
  });
})();