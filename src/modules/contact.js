const showContactInfo = () => {
  const content = document.getElementById('content');
  const mainContent = document.createElement('div');
  const contact = document.createElement('div');

  mainContent.classList.add('main-content');
  contact.setAttribute('id', 'contact-info');
  contact.classList.add('center');

  contact.innerHTML = `
  <div class="container">
  <form id="contact" action="" method="post">
    <h3>Contact Us</h3>
    <h4>Contact us today, and get reply with in 24 hours!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
  `;

  mainContent.appendChild(contact);
  content.appendChild(mainContent);

  return {
    showContactInfo,
  };
};

export default showContactInfo;
